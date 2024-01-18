import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB() //database
    await Topic.create({title, description}) //schema for mongodb
    return NextResponse.json({message: "Topic Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: "Topic deleted"}, {status: 200})
}