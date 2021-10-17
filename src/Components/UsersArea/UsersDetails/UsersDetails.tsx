import { Component } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import {
    StaticGoogleMap,
    Marker,
    Path,
} from 'react-static-google-map';


import './UsersDetails.css'

interface RouteParams {
    id: string;
}

interface UserDetailsProps extends RouteComponentProps<RouteParams> { }


interface UserDetailsState {
    User: UserModel;
}

class UsersDetails extends Component<UserDetailsProps, UserDetailsState> {

    public constructor(props: UserDetailsProps) {
        super(props);
        this.state = { User: null };
    }

    public async componentDidMount() {
        try {
            const username = this.props.match.params.id;
            console.log(this.props.match.params.id)
            const User = store.getState().usersState.users.find(p => p.login.username === username);
            <Redirect to="/" />
            if (User) {
                this.setState({ User });
                console.log(this.props)

            }
            else {
                this.props.history.push("/", { state: 'sample data' });
                alert("Returning to main page")
            }
        }
        catch (err) {
            alert("Error");
            console.log(err);
        }
    }



    public render(): JSX.Element {
        return (
            <div className="UsersDetails">

                <h2>User Details</h2>

                {this.state.User === null && <PleaseWait />}

                {this.state.User &&

                    <><>
                        <img src={this.state.User.picture.large} alt="" />
                        <p>Name: {this.state.User.name.first} {this.state.User.name.last}</p>
                        <p>Gender: {this.state.User.gender}</p>
                        <p>Email: {this.state.User.email}</p>
                        <p> Adress:{this.state.User.location.country}, {this.state.User.location.state}, {this.state.User.location.city}, {this.state.User.location.street.name}, {this.state.User.location.street.number}
                            <br />
                            <StaticGoogleMap size="300x300" apiKey="AIzaSyAHdedLiyjRCf-SCqPgpr3xXQL-LQmcPSg">
                                <Marker
                                    location={this.state.User.location.country + this.state.User.location.state}
                                    color="red"
                                    label="Location"
                                />

                            </StaticGoogleMap>
                        </p>
                        <br />

                    </><NavLink to="/">Back</NavLink></>
                }
            </div>
        );
    }
}

export default UsersDetails;
