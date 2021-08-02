import React,{useState,useEffect} from "react";
import sanityClient from "../client.js";
import aboutt from "../about.jpg";
import imageUrlBuilder from "@sanity/image-url";
import Blockcontent from "@sanity/block-content-to-react";
import mypicture from "../mypicture.jpg"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function About(){
    const [author,setAuthor] =useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage": image.assest->url
        }`).then(data => setAuthor(data))
        .catch(console.error)
    },[]);

    if(!author) return <div>Loading...</div>

    return (
        <main className="relative ">
            <img src={aboutt} alt="about background" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={mypicture} className="rounded w-32 h-32 lg:w-60 lg:h-60 mr-8 "
                    alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hey there.I'm{" "}
                            <span className="text-green-100">Subodh.</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            I am Subodh Pandey ,from Varanasi Uttar Pradesh.I'm pursuing B.tech from Indian Institute of Information Technology
                            Una Himachal Pradesh in Computer Science and Engineering. I am a Full stack web developer ,Competetive Programmer.
                            I also have knowledge about Database Management System, MySQL and searching for good platform to enhance and implement 
                            my skills .
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}