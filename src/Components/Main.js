export default function Card(props){
    return(
        <div className="card-container-main">
            <div className="main-card-details"> 
                <h1>$ {props.card}</h1>
                <span><s>$ {props.span}</s></span>
                <p>{props.sels}</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
}
