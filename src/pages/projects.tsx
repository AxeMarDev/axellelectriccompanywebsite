

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

    const content = [
        {url: "https://www.gosandiego.com/wp-content/uploads/2015/01/Baked-Bear-1.jpg", title:"Baked Bear", location:"South Padre Island, TX"},
        {url: "https://s.hdnux.com/photos/01/36/00/71/24645201/3/rawImage.jpg", title:"WSS store" , location:"Mission, TX"},
        {url: "https://www.spacex.com/static/images/locations/kennedy.jpg", title:"Space X homes", location:"Brownsville, TX"},
        {url: "https://i.redd.it/7pv54j1fwi4b1.jpg", title:"Sunrise mall", location:"Brownsville, TX"},
        {url: "https://s.hdnux.com/photos/46/66/01/10182747/6/rawImage.jpg", title:"DDs Discount", location:"Mission, TX"},
        {url: "https://eatz-associates.com/wp-content/uploads/2020/03/CSC-Chesterfield-MI-Store-Front-scaled.jpg", title:"Cold Stone", location:"Brownsville, TX"},
        {url: "https://www.utrgv.edu/som/gme/programs/general-surgery-valley-baptist-medical-center/_files/images/locations/valley-baptist.jpg", title:"Valley Baptist Hospital", location:"Brownsville, TX"},

    ]

    return(
        <div className={"pt-[4rem] px-32 flex h-full"}>
            <div className={"w-full h-full pt-4 pb-10"}>
                <p className={"text-3xl font-bold text-gray-400"}>Projects</p>
                <div className={"w-full h-full pt-4 grid grid-cols-3 gap-10"}>
                    {content.map((item)=> <ProjectCard title={item.title} url={item.url} location={item.location}/>)}
                </div>
            </div>
        </div>
    )
}