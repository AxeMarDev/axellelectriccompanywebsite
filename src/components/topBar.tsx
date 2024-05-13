import  {ReactNode} from "react";
import {Link} from "react-router-dom";



type propsTopBarButton = { children:ReactNode, to:string}
function TopBarButton({children, to}:propsTopBarButton){
    return(
        <Link className={"px-3"} to={to}>
            {children}
        </Link>
    )
}

export default function TopBar(){
    return(
        <div className={"bg-blue-500 w-screen flex flex-row p-6 justify-between" }>
            <div className={"flex flex-row"}>
                <p>logo</p>
                <TopBarButton to={"/"}> home </TopBarButton>
                <TopBarButton to={"/projects.tsx"}> clients </TopBarButton>
                <TopBarButton to={"/about"}> about </TopBarButton>
            </div>
            <TopBarButton to={"/contact"}> contact </TopBarButton>
        </div>
    )
}
