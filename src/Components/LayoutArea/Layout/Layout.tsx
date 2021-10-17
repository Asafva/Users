import { BrowserRouter } from "react-router-dom";
import Totalusers from "../../UsersArea/TotalUsers/TotalUsers";
import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="Layout">
                <h1>All Users </h1>
                <h2>     <Totalusers /></h2>

                <Routing />
                <footer>
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default Layout;