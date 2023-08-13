import React from "react";
import { connect } from "react-redux";
import { fetchAllCases } from "../../reducers/cases-slice";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { NewCase } from "./NewCase";
import dayjs from "dayjs";
import { Link as RouterLink } from "react-router-dom";

class CaseListPage extends React.Component {
  componentDidMount() {
    this.props.fetchCases();
  }

  componentWillUnmount() {}

  getStatus(status) {
    switch (status) {
      case "new":
        return "Новый";
      case "in_progress":
        return "В процессе";
      case "done":
        return "Завершен";
    }
  }

  getType(type) {
    switch (type) {
      case "sport":
        return "Спортивный";
      case "general":
        return "Обычный";
    }
  }

  render() {
    return (
      <Container>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Typography component="h2" variant="h5">
            Сообщения о кражах
          </Typography>
          <NewCase />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Статус</TableCell>
                  <TableCell>Дата кражи</TableCell>
                  <TableCell>Номер лицензии</TableCell>
                  <TableCell>Тип</TableCell>
                  <TableCell>ФИО владельца</TableCell>
                  <TableCell>Цвет</TableCell>
                  <TableCell align="right">Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.cases.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{this.getStatus(row.status)}</TableCell>
                    <TableCell>
                      {row.date ? dayjs(row.date).format("DD.MM.YYYY") : ""}
                    </TableCell>
                    <TableCell>{row.licenseNumber}</TableCell>
                    <TableCell>{this.getType(row.type)}</TableCell>
                    <TableCell>{row.ownerFullName}</TableCell>
                    <TableCell>{row.color}</TableCell>
                    <TableCell align="right">
                      <Button
                        component={RouterLink}
                        to={"/cases/" + row._id}
                        variant="outlined"
                        size="small"
                      >
                        Редактировать
                      </Button>
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
    cases: state.cases.data,
    isLoading: state.cases.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCases: () => dispatch(fetchAllCases()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseListPage);
