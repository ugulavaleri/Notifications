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

function App() {
    return (
        <>
            <Notification
                imgBg={Bg1}
                img={icon1}
                title="Success"
                text="Order Placed Successfully. You can check order delivery status."
                color=" #EB5757"
                key={1}
            />
            <Notification
                imgBg={Bg2}
                img={icon2}
                title="Error"
                text="Order Placed Successfully. You can check order delivery status."
                color=" #F2C94C"
                key={2}
            />
            <Notification
                imgBg={Bg3}
                img={icon3}
                title="Warning"
                text="Order Placed Successfully. You can check order delivery status."
                color=" #5458F7"
                key={3}
            />
            <Notification
                imgBg={Bg4}
                img={icon4}
                title="Info"
                text="Order Placed Successfully. You can check order delivery status."
                color=" #00CC99"
                key={4}
            />
        </>
    );
}

export default App;
