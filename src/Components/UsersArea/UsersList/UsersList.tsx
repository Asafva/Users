import axios from "axios";
import { Component } from "react";
import UserModel from "../../../Models/UserModel";
import { usersDownloadedAction } from "../../../Redux/UsersState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import UsersTable from "../UsersTable/UsersTable";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "react-js-pagination";
// import Pagination from "react-pagination-js";
import './UsersList.css'
import { TableBody } from "@material-ui/core";

interface UsersListState {
    users: UserModel[];
    activePage: number;
    itemClass: string;
    linkClass: string;
}


class UsersList extends Component<{}, UsersListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            users: store.getState().usersState.users,
            activePage: 1,
            itemClass: "page-item",
            linkClass: "page-link"
        };
    }

    public async componentDidMount() {
        try {
            if (this.state.users.length === 0) {
                const response = await axios.get(globals.usersUrl);

                this.setState({ users: response.data.results });
                store.dispatch(usersDownloadedAction(response.data.results));
            }
        }
        catch (err) {
            alert("Error");
            console.log(err);
        }
    }

    handlePageChange(pageNumber: number) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }
    public render(): JSX.Element {
        return (
            <div className="UsersList">

                {this.state.users.length === 0 && <PleaseWait />}
                <div className="pagination">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={this.state.users.length}
                        pageRangeDisplayed={100}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table" className="table">
                        <TableBody>
                            <TableRow >
                                <TableCell>Picure</TableCell>
                                <TableCell>FullName</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


                {this.state.users.slice((this.state.activePage - 1) * 10, (this.state.activePage - 1) * 10 + 10).map(u => <UsersTable users={u} key={u.login.username} />)}

            </div >
        );
    }
}

export default UsersList;
