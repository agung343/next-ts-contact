import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb"
import Contact from "@/app/models/Contact"
import mongoose from "mongoose";

interface ResponseData {
    fullName: string
    email: string;
    message: string;
    msg: string
}

export async function POST(req: Request) {
    const {fullName, email, message}: ResponseData = await req.json()

    try {
        await connectDB()
        await Contact.create({
            fullName: fullName,
            email: email,
            message: message
        })

        return NextResponse.json({msg: ["Message sent succesfully"], success: true})
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList:string[] = []
            for (let e in error.errors) {
                errorList.push(error.errors[e].message)
            }
            return NextResponse.json({msg: errorList})
        } else {
            return NextResponse.redirect("/500");
        }
    }
}
