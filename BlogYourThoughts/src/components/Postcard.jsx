import React from 'react'
import appwriteServices from '../appwrite/config'
import { Link } from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
    //console.log(featuredImage)
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full rounded-xl bg-gray-100 p-4'>
                {featuredImage && 
                <div className='w-full justify-center mb-4 px-2'>
                    <img src={appwriteServices.getFilePreview(featuredImage)} alt={title} 
                    className='rounded-xl'/>
                </div>}
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default Postcard
