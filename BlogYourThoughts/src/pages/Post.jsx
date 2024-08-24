import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Container, Button } from '../components'
import parse from "html-react-parser"

function Post() {

    const [post, setPost] = useState(null)
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()

    const isAuthor = post && userData ? post.userId == userData.$id : false

    // console.log("post- ", post);
    // console.log("user data =", userData);
    // console.log(post?.userId === userData?.$id);

    const {slug} = useParams()
 
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug)
            .then((post) => {
                if(post) setPost(post);
                else navigate('/');
            })
        }else navigate('/');
    }, [])

    const deletePost = () => {
        //console.log(slug);
        
        appwriteService.deletePost(slug)
        .then((isDeleted) => {   
            if(isDeleted){
                //console.log(post)
                appwriteService.deleteFile(post.featuredImage);
                navigate('/')
            }
        })
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {post.featuredImage && 
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    }
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3" chlidren={"Edit"}>
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} chlidren={"Delete"}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
    
}

export default Post
