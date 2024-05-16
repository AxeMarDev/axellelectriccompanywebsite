import React, {useEffect, useState} from "react";
import API, {tMessage} from "../API/API.ts";

type formType = {name:string, value:string, type:string, id:string}

type propsField = { index:number, setFormData: [ formData:formType[], setFormData:React.Dispatch<React.SetStateAction<formType[]>>] }
const Field = ({index, setFormData}:propsField) =>{

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

        const temp  = setFormData[0].map((item, i)=>{
            if( i === index ){
                return {...item, value: e.target.value}
            } else{
                return item
            }
        })

        setFormData[1]( temp )
    }

    return(
        <input className={"bg-gray-100 w-1/3 p-5 rounded"}
               type={"text"}
               placeholder={setFormData[0][index].name }
               value={setFormData[0][index].value}
               onChange={(e)=>handleChange(e)}/>
    )
}



type propsForm = {data:formType[]}
function Form( {data}:propsForm ){

    const [ formData , setFormData ] = useState<formType[]>([])

    useEffect(() => {
        setFormData(data)
    }, []);

    const handleSumbit = () =>{

        const params:tMessage = { id:"" ,
            email: formData[1].value ,
            name:formData[0].value,
            location:formData[2].value,
            message: formData[3].value ,
            read:false
        }

        API.addMessage(params).then((resp)=>{
            setFormData(data)
            console.log(resp.resp)
        })

    }

    return(
        <div className={"mt-[7.5rem] flex flex-col w-full   space-y-2 "}>
            <p className={"flex justify-center font-bold text-3xl text-gray-800 mb-10 "}> Send us a message</p>
            {formData.map((_, index)=>
                <div className={"flex  justify-center  w-full   "}>
                    <Field index={index} setFormData={[formData,setFormData]}/>
                </div>
            )}
            <div className={"flex  justify-center  w-full  pt-10 "}>
                <button className={"bg-blue-500 w-1/3 p-5 rounded text-white font-bold hover:bg-blue-400"} onClick={()=>handleSumbit()}>Submit</button>
            </div>
        </div>
    )
}

export default function Contact(){

    const data:formType[] = [
        {name:"name", value:"", type:"text", id:"1"},
        {name:"email", value:"", type:"text", id:"1" },
        {name:"location", value:"", type:"text", id:"1" },
        {name:"message", value:"", type:"text", id:"1" },
    ]

    return(
        <div className={"mt-[7.5rem] flex h-full"}>
            <Form data={data}/>
        </div>
    )
}