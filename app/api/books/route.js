import connectMongoDB from "@/libs/mongodb"
import Book from "@/models/book"
import { NextResponse } from "next/server"

export async function POST(request) {
    const { name, description, image, author, price, rating, category } = await request.json()
    await connectMongoDB()
    await Book.create({ name, description, image, author, price, rating, category })
    return NextResponse.json({message: "Book Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const books = await Book.find()
    return NextResponse.json({books})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Book.findByIdAndDelete(id)
    return NextResponse.json({message: "Book deletd"}, {status: 200})
}
