import { Route, Switch } from "react-router-dom";
import UsersList from "../../UsersArea/UsersList/UsersList";
import Page404 from "../../SharedArea/Page404/Page404";
import UserDetails from "../../UsersArea/UsersDetails/UsersDetails";

function Routing(): JSX.Element {
    return (
        <Switch>
            <Route path="/" component={UsersList} exact />
            <Route path="/:id" component={UserDetails} exact />
            {/* <Route path="/email" component={sendEmail} exact /> */}

            <Route component={Page404} />

        </Switch>
    );
}

export default Routing;
