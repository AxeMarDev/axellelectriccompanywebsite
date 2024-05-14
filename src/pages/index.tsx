import  {useEffect, useState} from "react";
import Carosel from "../components/carosel.tsx";



export default function Index(){


    const [slide, setSlide ] = useState(0)

    useEffect(() => {
       // setTimeout( ()=>setSlide(slide + 1), 10000)
    }, [slide]);

    // this should be fetched from server. It will be populated with an initial item in cdn
    const images = [
        "https://flythevalley.com/wp-content/uploads/2023/01/Connect-With-Nature-via-a-Trip-to-South-Padre-Islan.jpeg",
       "https://insideclimatenews.org/wp-content/uploads/2022/05/spacex_jim-watson-getty-scaled.jpg"
   ]
    const imageCount = images.length

    const content = [
        { title:"Serving the valley for over 30 years", description: "placeholder description"},
        { title:"Helping brownsville go to mars", description: "placeholder description"}
    ]

    return(
        <div className={"mt-[7.5rem] h-[70vh]"} style={{
            backgroundImage:`url(${images[ slide % imageCount]})`,
            backgroundSize: "cover"
        }}>
            <Carosel slideState={[slide, setSlide]} slideCount={imageCount} content={content}/>
        </div>
    )
}

