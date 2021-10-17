import "./PleaseWait.css";
import loadingImage from "../../../Assets/Images/loading.gif";

function PleaseWait(): JSX.Element {
    return (
        <div className="PleaseWait">
            <img src={loadingImage} alt="" />
        </div>
    );
}

export default PleaseWait;
