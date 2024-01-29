//props react
// import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"
//import img from "../images/"

function Card(props) {
    let badgeText
    if(props.items.openSpots === 0) {
        badgeText="SOLD OUT"
    }
    else if(props.items.location === "Online") {
        badgeText="ONLINE"
    }
    return (
        <section>
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.items.coverImg} className="card--photo" alt="coverImg"/>
                <div className="card--stats"> 
                    <img src={Star} className="card--star"/>
                    <span>{props.items.stats.rating}</span>
                    <span className="gray">({props.items.stats.reviewCount}) - </span>
                    <span className="gray">{props.items.location}</span>
                </div>
                <p class="card--title">{props.items.title}</p>
                <p className="card--price">
                    <span className="bold">From ${props.items.price}</span> 
                    / person
                </p>
            </div>
        </section>
    );
}
export default Card;