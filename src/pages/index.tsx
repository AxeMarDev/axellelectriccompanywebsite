import {useEffect, useState} from "react";


export default function Index(){


    const [slide, setSlide ] = useState(0)

    useEffect(() => {
        setTimeout( ()=>setSlide(slide + 1), 10000)
    }, [slide]);

    // this should be fetched from server. It will be populated with an initial item in cdn
    const images = [
        "https://flythevalley.com/wp-content/uploads/2023/01/Connect-With-Nature-via-a-Trip-to-South-Padre-Islan.jpeg",
        "https://insideclimatenews.org/wp-content/uploads/2022/05/spacex_jim-watson-getty-scaled.jpg"
    ]
    const imageCount = images.length

    return(
        <div className={"pt-[7.5rem]"}>

            <img className={"w-screen h-[70vh] object-cover "} src={images[slide % imageCount]}/>
        </div>
    )
}