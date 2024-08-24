import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import appwriteServices from '../appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Input, RTE, Select, Button} from './index'

function PostForm({post}) {

    //console.log(post)

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const {register, handleSubmit, control, getValues, setValue, watch} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            featuredImage: post?.featuredImage || '',
            status: post?.status || 'active'
        } 
    })

    const submit = async (data) => {

        //console.log(data);
        if(post){

            const file = data.image[0] ? await appwriteServices.uploadFile(data.image[0]) : null ;

            if(file){
                await appwriteServices.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteServices.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined})

            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
            
        }else{

            const file = data.image[0] ? await appwriteServices.uploadFile(data.image[0]) : null ;

            const dbPost = await appwriteServices.createPost({...data, userId: userData.$id, featuredImage: file ? file.$id : undefined})

            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
            
            // const file = await appwriteServices.uploadFile(data?.image[0]);

            // if (file) {
            //     const fileId = file.$id;
            //     data.featuredImage = fileId;
            //     const dbPost = await appwriteServices.createPost({ ...data, userId: userData.$id });

            //     if (dbPost) {
            //         console.log(dbPost)
            //         navigate(`/post/${dbPost.$id}`);
            //     }
            // }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof(value) === 'string') 
            return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, '-')

        return ''
    }, []);

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === "title"){
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title : "
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug : "
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content : " name="content"  control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image : "
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image")}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteServices.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status : "
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" chlidren={post ? "Update" : "Submit"}>
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
