"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewPage({params}) {
    console.log(params)
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
       

    useEffect(()=>{
       if (params.id) {
        fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data =>{
                setTitle(data.title)
                setDescription(data.description)
                setPrice(data.price)
                console.log(data);
            })
       }    
    },[])
    
    const onSubmit = async (e) => {
        e.preventDefault()
        //const title = e.target.title.value
        //const description = e.target.description.value
        
        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`,{
                method: "PUT", 
                body: JSON.stringify({title, description, price}),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
            console.log('actualizando')
        } else{
            const res = await fetch('api/tasks', {
                method: 'POST',
                body: JSON.stringify({title, description, price}),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
    
        }
        router.refresh()
        router.push('/')
        
        
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>

                <label htmlFor="title" className="font-bold text-sm text-white"> Titulo de la tarea</label>
                <input id="title" placeholder="Titulo" type="text" className="border border-gray-400 p-2 mb-4 w-full text-black"
                onChange={(e) => setTitle(e.target.value)} value={title}></input>

                <label htmlFor="description" className="font-bold text-sm text-white"> Descripcion de la tarea</label>
                <textarea id="description" placeholder="Descripcion" className="border border-gray-400 p-2 mb-4 w-full text-black" rows="3"
                onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

                <label htmlFor="price" className="font-bold text-sm text-white"> Precio del producto</label>
                <input type="number" id="price" placeholder="Precio" className="border border-gray-400 p-2 mb-4 w-full text-black" rows="3"
                onChange={(e) => setPrice(parseFloat(e.target.value))} value={price}></input>

                <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit">Crear</button>
                {
                    params.id &&(
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" type="button" 
                        onClick={ async()=> {
                           const res = await fetch(`/api/tasks/${params.id}`, {
                                method:  "DELETE",
                            })
                            const data = await res.json()
                            console.log(data);
                            router.refresh()
                            router.push('/')
                        }}>
                            Delete
                        </button>
                    )
                }
                </div>
                
            </form>

            
        </div>
       
    )
}

export default NewPage