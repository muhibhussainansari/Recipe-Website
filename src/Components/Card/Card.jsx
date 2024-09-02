import React from 'react'
import { Link } from 'react-router-dom'



function Card({data}) {
    return (
        <div className='flex flex-wrap justify-around'>
        {data?.map(({name,image, id, instructions}) => {
            // console.log(instructions)
            return (
            <>
            <div key={id} className=' mt-5 flex flex-wrap'>
                <div className="relative h-[400px] w-[300px] rounded-md hover:-translate-y-3  my-10">
                    <img 
                        src={image}
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">{name}</h1>
                        <p className="mt-2 text-sm text-gray-300">
                            
                        </p>
                        <button data={data} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold hover:bg-red-500"><Link className='text-black hover:text-white' to={`/details/${id}`}>
                        {"View Detail →"}
                        </Link>
                            
                        </button>
                    </div>
                </div>
                </div>
            </>
            )
        })}
        </div>
    )
}


export default Card