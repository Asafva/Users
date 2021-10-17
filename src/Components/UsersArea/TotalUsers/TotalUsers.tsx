import { Component } from "react";
import { Unsubscribe } from "redux";
import store from "../../../Redux/Store";

interface TotalusersState {
    totalusers: number;
}

class Totalusers extends Component<{}, TotalusersState> {

    private unsubscribeMe: Unsubscribe;

    public constructor(props: {}) {
        super(props);
        this.state = { totalusers: 0 };
    }

    public componentDidMount(): void {
        this.unsubscribeMe = store.subscribe(() => {
            this.setState({ totalusers: store.getState().usersState.users.length });
        });
    }

    public componentWillUnmount(): void {
        this.unsubscribeMe();
    }

    public render(): JSX.Element {

        if (this.state.totalusers === 0) {
            return null;
        }

        return (
            <div className="Totalusers">
                <span>
                    We have {this.state.totalusers} users.
                </span>
            </div>
        );
    }
}

export default Totalusers;
