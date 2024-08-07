import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    return (
        <div className='bg-slate-500 text-white text-3xl text-center p-4'>
            <p>Github Id = {data.id} </p>
            <div className='flex justify-center my-4'>
                <div className='p-2 w-fit bg-white bg-opacity-50 hover:bg-opacity-100'>
                    <img src={data.avatar_url} alt="Github photo" width={300} />
                </div>
                
            </div>  
        </div>
    )
}

export default Github;

