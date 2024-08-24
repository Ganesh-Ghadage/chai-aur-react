import React, {useState, useEffect} from 'react'
import { Container, Postcard } from '../components'
import appwriteServices from '../appwrite/config'
import { useSelector } from 'react-redux'
//import { useNavigate } from 'react-router-dom'

function Home() {

    const [posts, setPosts] = useState([])
    const [userData, setUserData] = useState(null)
    //const navigate = useNavigate()

    const uData = useSelector((state) => state.auth.userData)

    //console.log(userData)

    // setUserData(uData)

    useEffect(() => {
        setUserData(uData)
    }, [uData])

    useEffect(() => {

        appwriteServices.getPosts().then((posts) => {
            //console.log(posts)
            if(posts) {
                setPosts(posts.documents)
            }
        })

    }, [userData,uData, setUserData])

    //console.log(posts)

    if(userData){
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
    
        return(
            <div className='w-full py-8'>
                <Container>
                    <div className='flex-wrap grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        { posts?.map((post) => (
                            <div key={post.$id} className='p-2 w-fit'>
                                <Postcard {...post}/>
                            </div>
                        )) }    
                    </div>
                </Container>
            </div>
        )
    }else{
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    
}

export default Home
