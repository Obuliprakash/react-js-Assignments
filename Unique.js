import Navigation from "./Navigation";
import Service from "./Service";

function Unique(){

    const Services = [
        {
            title:"web-app",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:"https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
        },
        {
            title:"mobile-app",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:"https://www.dotcominfoway.com/wp-content/uploads/2020/01/app-development-platforms.png",
        },
        {
            title:"web-app",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:"https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg",
        },
        {
            title:"mobile-app",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:"https://www.dotcominfoway.com/wp-content/uploads/2020/01/app-development-platforms.png",
        }
    ]
    return(
        <div>
            <h1 className="Service-title">All Services</h1>
            <div className="container">
                {
                    Services.map((service,index)=>(
                        <Service title={service.title} description={service.description} image={service.image} />
                    ))
                }
            </div>
        </div>
        
    );
}
export default Unique;
