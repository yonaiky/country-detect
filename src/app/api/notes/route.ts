import { NextResponse } from "next/server";
import { prisma } from '@/prisma'

export async function GET (){

	const notes= await prisma.name.findMany()
	return NextResponse.json(notes);
}

export async function POST (request : Request ){
	const {name, lastname} = await request.json();

	const newname = await prisma.name.create({
		data:{
			name,
			lastname
		}
	})


	return NextResponse.json({newname})
}