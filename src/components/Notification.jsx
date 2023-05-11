import "./Notifications.css";

const Item = (props) => {
    return (
        <div className="wrapper" style={{ "--bg-color": props.color }}>
            <div className="imageDiv">
                <img src={props.imgBg} alt="bgimage" />
                <img src={props.img} alt="icon" className="img" />
            </div>
            <div className="textDiv">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Item;
