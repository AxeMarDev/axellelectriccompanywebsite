import {useState} from "react";

type propsCareerCard = {item:{title:string, location:string}}
function CareerCard ({item}:propsCareerCard) {

    const [mouseOver , setMouseOver] = useState(false)
    return(
        <div className={"w-full rounded-lg shadow p-5 border border-b-gray-100"} onMouseOver={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)}>
            <p className={"text-3xl font-bold"}>{item.title}</p>
            <p>{item.location}</p>
            <div className={"h-10"}>
                {mouseOver &&     <button className={"text-blue-400"}>{"apply>"}</button>}
            </div>


        </div>
    )
}


export default function Careers(){

    const content = [
        {title:"Master Electrician", location:"On site"},
        {title:"Estimator" , location:"Hybrid"},
        {title:"Commercial Electrician" , location:"On site"},
        {title:"Residential Electrician" , location:"On site"},
    ]


    return(
        <div className={"pt-[4rem] px-32 flex h-full"}>
            <div className={"w-full h-full pt-4 pb-10"}>
                <p className={"text-3xl font-bold text-gray-400"}>Open positions</p>
                <div className={"w-full h-full pt-4 grid grid-cols-2 gap-4 "}>
                    {content.map((item)=> <CareerCard item={item}/>)}
                </div>
            </div>
        </div>

    )
}