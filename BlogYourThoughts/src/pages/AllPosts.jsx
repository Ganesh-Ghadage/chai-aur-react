import React, {useState, useEffect} from 'react'
import { Container, Postcard } from '../components'
import appwriteServices from '../appwrite/config'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteServices.getPosts([])
        .then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        });

    }, [])

    if(posts && posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Posts to Read
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex-wrap grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                    { posts.map((post) => (
                        <div key={post.$id} className='p-2 w-fit'>
                            <Postcard {...post}/>
                        </div>
                    )) }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
