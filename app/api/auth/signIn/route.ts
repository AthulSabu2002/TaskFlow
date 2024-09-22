// pages/api/auth/signin.ts
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../../lib/dbConnect'
import User from '../../../../models/User'



export async function POST(request: Request){
    await dbConnect();

    const { email, password } = await request.json()
  
    try {
      
      const user = await User.findOne({ email });
  
      if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, {status: 400})
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password)
  
      if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid credentials' }, {status: 400})
      }
  
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      )
  
      return NextResponse.json({ token }, {status: 200})
    } catch (error) {
      console.error('Signin error:', error)
      return NextResponse.json({ message: 'Error signing in' }, {status: 500})
    }
  
}