import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseConnection {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

interface GlobalWithMongoose extends Global {
  mongoose: MongooseConnection;
}

declare const global: GlobalWithMongoose;

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<mongoose.Connection> {
  if (global.mongoose.conn) {
    if (global.mongoose.conn.db) {
      console.log(`Already connected to database: ${global.mongoose.conn.db.databaseName}`);
    } else {
      console.log('Already connected to database, but database name is not available.');
    }
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      if (mongoose.connection.db) {
        console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
      } else {
        console.log('Connected to database, but database name is not available.');
      }
      return mongoose.connection;
    });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (e) {
    global.mongoose.promise = null;
    console.error('Error connecting to database:', e);
    throw e;
  }

  return global.mongoose.conn;
}

export default dbConnect;