// app/api/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

    // Revalidate paths where user data is displayed
    revalidatePath("/");
    revalidatePath("/api/users");

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    // Check if the error is a unique constraint violation
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002" &&
      "meta" in error &&
      error.meta &&
      typeof error.meta === "object" &&
      "target" in error.meta &&
      Array.isArray(error.meta.target) &&
      error.meta.target.includes("email")
    ) {
      return NextResponse.json(
        {
          error:
            "This email is already registered. Please use a different email.",
        },
        { status: 409 }
      );
    }

    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
