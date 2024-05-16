import {useEffect, useState} from "react";
import API from "../API/API.ts";


type propsProjectCard = {url: string, title:string, location:string}
function ProjectCard({url, title,location}:propsProjectCard){
    return(
        <div className={" rounded-lg shadow-lg  "}>
            <div className={"h-52 bg-gray-100 p-6 rounded-t-lg "} style={{
                background: `url(${url})`,
                backgroundSize: "cover"
            }}/>
            <div className={"h-20  grid content-center pl-6 rounded-b-lg"}>
                <p className={"text-xl"}>{title}</p>
                <p className={"text-sm text-gray-400"}>{location}</p>
            </div>
        </div>
    )
}
export default function Projects(){


    const[ content , setContent] = useState<{id:string,name:string,location:string,imageurl:string}[]>([])
    useEffect(()=>{
        API.getProjects().then((resp)=>{
             setContent(resp.resp)
        })
    },[])

    return(
        <div className={"pt-[4rem] px-32 flex h-full flex-col"}>
            <div className={"w-full h-full pt-4 pb-10"}>
                <p className={"text-3xl font-bold text-gray-400"}>Projects</p>
                <div className={"w-full h-full pt-4 grid grid-cols-3 gap-10"}>
                    {content.map((item)=> <ProjectCard title={item.name} url={item.imageurl} location={item.location}/>)}
                </div>
            </div>
        </div>
    )
}