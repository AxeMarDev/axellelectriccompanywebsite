import {ReactNode} from "react";
import {Link} from "react-router-dom";
import axellelectriclogotype from "../assets/axellelectirclogotype.png"



type propsTopBarButton = { children:ReactNode, to:string}
function TopBarButton({children, to}:propsTopBarButton){
    return(
        <div className={"h-full grid content-center "}>
            <Link className={"px-2 text-lg h-8  grid content-center hover:bg-gray-100 rounded-lg"} to={to}>
                {children}
            </Link>
        </div>

    )
}

function LeftTopBarButton({children, to}:propsTopBarButton){
    return(
        <div className={"h-full grid content-center"}>
            <Link className={"px-6  bg-blue-500 h-12 text-white grid content-center hover:bg-blue-700 rounded-lg"} to={to}>
                {children}
            </Link>
        </div>

    )
}

export default function TopBar(){


    return(
        <div className={"fixed top-0 "}>
            <div className={" bg-white w-screen px-32 border-b-gray-100 border-b-2 p-4  flex flex-row h-16 justify-between" }>
                <div className={"flex flex-row "}>
                    <Link className={" flex flex-row justify-between"} to={"/"}>
                        <img className={"mr-10"} src={axellelectriclogotype} alt={"blue text axell logotype"}/>
                    </Link>
                    <TopBarButton to={"/projects"}> projects </TopBarButton>
                    <TopBarButton to={"/about"}> about </TopBarButton>
                    <TopBarButton to={"/careers"}> careers </TopBarButton>
                </div>
                <div>
                    <LeftTopBarButton to={"/contact"}> contact </LeftTopBarButton>
                </div>
            </div>
        </div>


    )
}
