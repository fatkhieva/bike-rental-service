import React from "react";
import { connect } from "react-redux";
import { fetchAllOfficers } from "../../reducers/officers-slice";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

class OfficerListPage extends React.Component {
  componentDidMount() {
    this.props.fetchOfficers();
  }

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Typography component="h2" variant="h5">
          Ответственные сотрудники
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">Имя</TableCell>
                  <TableCell align="right">Фамилия</TableCell>
                  <TableCell align="right">Статус</TableCell>
                  <TableCell align="right">Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.officers.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">
                      {row.approved ? "Одобренный" : "Неодобренный"}
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" size="small">Редактировать</Button>
                      <IconButton aria-label="delete" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    officers: state.officers.data,
    isLoading: state.officers.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOfficers: () => dispatch(fetchAllOfficers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfficerListPage);
