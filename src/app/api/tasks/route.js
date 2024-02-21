import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';


export async function GET(){

    const tasks = await prisma.task.findMany()
    console.log(tasks);
    return NextResponse.json(tasks)
}

export async function POST(request){
    const data = await request.json()
    console.log(data);
    
   const newTask =  await prisma.task.create({
        data:{
            title: data.title,
            description: data.description,
            price: data.price
        }
    })
    return NextResponse.json(newTask)
}