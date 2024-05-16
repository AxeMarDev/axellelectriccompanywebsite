
export type tProject = {id:string, name:string, location:string, imageurl:string}
export type tProjects = [tProject] | [];

export type tMessage = {id:string, email:string, name:string, location:string, message:string,read:false}
const GET = async ( route:string, params:Record<string, string> ) =>{

    let value : { resp : tProjects } = {resp: []}

    const queryParams = new URLSearchParams(params);

    const url = `http://localhost:8080${route}?${queryParams}`;

    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response)=> response.json() )
        .then((data) => {
            console.log(data)
            console.log(data.error)
            if ( data.error){
                value = { resp: [] }
            } else{
                value = { resp: data }
            }

        })
        .catch((error) => {
            console.error(error);
            value = { resp: [] }
        });


    return value
}

const POST = async ( route:string, params:Record<string, string>, data:BodyInit ) =>{

    let value : { resp : tProjects } = {resp: []}

    const queryParams = new URLSearchParams(params);

    const url = `http://localhost:8080${route}?${queryParams}`;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    })
        .then((response)=> response.json() )
        .then((data) => {
            console.log(data)
            console.log(data.error)
            if ( data.error){
                value = { resp: [] }
            } else{
                value = { resp: data }
            }

        })
        .catch((error) => {
            console.error(error);
            value = { resp: [] }
        });


    return value
}


const   getProjects = async () =>{

    return GET( "/projects",{})

}

const   addProjects = async (param:tProject) =>{

    return POST( "/projects",{}, JSON.stringify(param))

}

const   addMessage = async (param:tMessage) =>{

    return POST( "/messages",{}, JSON.stringify(param))

}


export {getProjects}

export default class API{

    static getProjects(){
        return getProjects()
    }
    static addProjects( param:tProject){
        return addProjects(param)
    }
    static addMessage(param:tMessage){
        return addMessage(param)
    }
}