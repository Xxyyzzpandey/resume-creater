// app/api/signup/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import User from "@/db/models/user"
import connectDB from "@/db/connectdb"

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log(email)
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }
    await connectDB(); 
    console.log(password)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.insertOne({ email, password: hashedPassword });

    return NextResponse.json({ message: 'Signup successful.' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  } 
}
