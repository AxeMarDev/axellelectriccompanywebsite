import React, {useEffect, useState} from "react";



type propsSldieCard = {
    slideState:[slide:number, setSlide:React.Dispatch<React.SetStateAction<number>>],
    content:{title:string, description:string}[]
}
const SlideCard = ({slideState, content}:propsSldieCard) =>{
    return(
        <div className={" w-full h-full grid content-end "}>
            <div className={"bg-white w-2/3 h-auto mb-16 p-6 rounded-lg"}>
                <p className={"text-3xl font-bold mb-5"}>{content[slideState[0]].title}</p>
                <p>{content[slideState[0]].description}</p>
            </div>
        </div>
    )
}

type propsSlideController = {
    slideCount:number,
    slideState:[slide:number, setSlide:React.Dispatch<React.SetStateAction<number>>]}
const SlideController = ({slideCount, slideState}:propsSlideController ) =>{

    const [ mapArray, setMapArray ] = useState<number[]>([])

    useEffect(() => {
        let i = 0;
        const tempArray: number[] = [];

        while (++i <= slideCount){
            tempArray.push(0)
        }

        setMapArray(tempArray)

    }, []);
    return(
        <div className={" w-full h-full grid content-end"}>
            <div className={"flex flex-row space-x-2 flex mb-16 justify-end p-5"}>
                {mapArray.map((_temp, index)=>
                    <button className={`${slideState[0] === index ? "bg-white" : "bg-white/50"}  rounded-lg w-5 h-5 grid content-center`} onClick={()=>slideState[1](index)}/>
                )}
            </div>

        </div>
    )
}

type propsCarosel = {
    slideCount:number,
    slideState:[slide:number, setSlide:React.Dispatch<React.SetStateAction<number>>],
    content:{title:string, description:string}[]
}

export default function Carosel({slideCount, slideState, content}:propsCarosel ){
    return(
        <div className={"flex flex-row w-screen px-32 h-[70vh]"}>
            <SlideCard slideState={slideState} content={content}/>
            <SlideController slideCount={slideCount} slideState={slideState}/>
        </div>
    )
}

