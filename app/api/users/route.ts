// app/api/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.location || !body.password) {
      return NextResponse.json(
        { error: "Name, email, location, and password are required" },
        { status: 400 }
      );
    }
    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        location: body.location,
        password: body.password,
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
