import React, {useEffect, useState} from "react";




const SlideCard = () =>{
    return(
        <div className={" w-full h-full grid content-end "}>
            <div className={"bg-white w-2/3 h-72 mb-16 p-6 rounded-lg"}>
                <p>Serving the valley for over 30 years</p>
                <p>placeholder description</p>
            </div>

        </div>
    )
}

type propsSlideController = { slideCount:number, slideState:[slide:number, setSlide:React.Dispatch<React.SetStateAction<number>>]}
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

type propsCarosel = { slideCount:number, slideState:[slide:number, setSlide:React.Dispatch<React.SetStateAction<number>>]}

export default function Carosel({slideCount, slideState}:propsCarosel ){
    return(
        <div className={"flex flex-row w-screen px-32 h-[70vh]"}>
            <SlideCard/>
            <SlideController slideCount={slideCount} slideState={slideState}/>
        </div>
    )
}

// 108700