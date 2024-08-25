import React from 'react'
import appwriteServices from '../appwrite/config'

function Logo({width = '100px'}) {
    return (
        <img src={appwriteServices.getFilePreview('blog')} alt='Blog' width={'40px'}/>
    )
}

export default Logo
