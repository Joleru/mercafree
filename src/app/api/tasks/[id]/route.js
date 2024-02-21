import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//obtener producto
export async function GET(request, {params}) {
    console.log(params.id)

    const task = await prisma.task.findUnique({
        where:{
            id: Number(params.id),
        },
    })
    console.log(task)

    return NextResponse.json(task)
}

//actualizar productor
export async function PUT(request, {params}) {
    const data = await request.json();

    const taskUpdate = await prisma.task.update({
        where:{
            id: Number(params.id),
        },
        data: data,
    })
    return NextResponse.json(taskUpdate)
}

//eliminar producto
export async function DELETE(request, {params}) {
    try {
        console.log(params.id)

    const taskRemoved = await prisma.task.delete({
        where: {
            id: Number(params.id),
        },
    });
    console.log(taskRemoved);
    return NextResponse.json(taskRemoved);
    } catch (error) {
    return NextResponse.json(error.message);    
    }
    
}