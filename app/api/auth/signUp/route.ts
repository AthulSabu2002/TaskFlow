import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'

export async function POST(request: Request) {
  await dbConnect();

  const { email, password } = await request.json()

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
    })

    console.log(user);

    return NextResponse.json({ message: 'User created successfully', userId: user._id }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 })
  }
}