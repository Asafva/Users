import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './UsersTable.css'


interface UsersTableProps {
    users: UserModel;
}

function UsersTable(props: UsersTableProps): JSX.Element {

    return (

        <div className="UsersTable">

            <TableContainer component={Paper}>
                <Table >
                    <TableBody >
                        <TableRow className="Hover" >
                            <TableCell >
                                <NavLink to={"/" + props.users.login.username}>
                                    <img src={props.users.picture.large} alt="" className="img1" />
                                </NavLink>
                            </TableCell>
                            <TableCell>{props.users.name.first} {props.users.name.last}</TableCell>
                            <TableCell>{props.users.gender}</TableCell>
                            <TableCell>
                                {props.users.email}
                            </TableCell>
                            <TableCell>{props.users.dob.age}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default UsersTable;
