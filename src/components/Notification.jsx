import "./Notifications.css";

const Item = (props) => {
    return (
        <div className="wrapper" style={{ "--bg-color": props.type.color }}>
            <div className="imageDiv">
                <img src={props.type.imgBg} alt="bgimage" />
                <img src={props.type.img} alt="icon" className="img" />
            </div>
            <div className="textDiv">
                <h2>{props.type.title}</h2>
                <p>{props.type.text}</p>
            </div>
        </div>
    );
};

export default Item;
