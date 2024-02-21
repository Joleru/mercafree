"use client"
import React from "react";
import { useRouter } from "next/navigation"; 

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

function TaskCard({task}){
    const router = useRouter();


    return(
        <>

          <div className="flex justify-between items-center">
          <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
          onClick={()=>{
            router.push('/tasks/edit/' + task.id)
          }}
          >
            

            <div className="mt-4 flex justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-gray-9002 text-white" >{task.title}</h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols- lg:grid-cols-2 xl:gap-x-8">

            </div>
            <p className="text-white">{task.description}</p>
            <p className="text-white font-bold">${task.price}</p>
            <p className="text-white">{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>

          </div>
        
         


        </>
    )
       
    
    
}

export default TaskCard