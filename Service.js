function Service(props){

    return(
        <div className="card">
            <div className="Card-Image">
                <img src={props.image} alt="Services" className="card-img"/>
            </div>
            <h1 className="Card-Title">{props.title}</h1>
            <p className="Card-Description">{props.description}</p>
            <p className="Button-Parent">
            <button className="Card-Button">Read More</button>
            </p>
            
        </div>    
    );
}
export default Service; 