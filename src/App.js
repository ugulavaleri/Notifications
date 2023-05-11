import "./App.css";
import Notification from "./components/Notification";
import Bg1 from "./images/Ellipse 5 (1).png";
import Bg2 from "./images/Ellipse 5 (2).png";
import Bg3 from "./images/Ellipse 5 (3).png";
import Bg4 from "./images/Ellipse 5.png";

import icon1 from "./images/Vector (1).png";
import icon2 from "./images/Vector (2).png";
import icon3 from "./images/Vector (3).png";
import icon4 from "./images/Vector.png";

const data = [
    {
        imgBg: Bg1,
        img: icon1,
        title: " Error",
        text: "Order Placed Successfully. You can check order delivery status.",
        color: "#EB5757",
    },
    {
        imgBg: Bg2,
        img: icon2,
        title: "Warning",
        text: "Order Placed Successfully. You can check order delivery status.",
        color: "#F2C94C",
    },
    {
        imgBg: Bg3,
        img: icon3,
        title: "Info",
        text: "Order Placed Successfully. You can check order delivery status.",
        color: "#5458F7",
    },
    {
        imgBg: Bg4,
        img: icon4,
        title: "Success",
        text: "Order Placed Successfully. You can check order delivery status.",
        color: "#00CC99",
    },
];

const types = ["Error", "Warning", "Info", "Success"];
const type = "Success";

function App() {
    return (
        <>
            <Notification
                type={types.includes(type) ? data[types.indexOf(type)] : null}
            />
        </>
    );
}

export default App;
