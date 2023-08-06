import AppBar from "@mui/material/AppBar";
import BikeScooter from "@mui/icons-material/BikeScooter";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { selectUser, reset } from "../../reducers/current-user-slice";
import { useSelector, useDispatch } from "react-redux";
import { AppLocalStore } from "../../utils/app-local-store";

export const Header = () => {
  const navigate = useNavigate();
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    AppLocalStore.setToken("");
    dispatch(reset());
  };

  const navBar = (
    <nav>
      <Box sx={{ display: "flex", gap: '16px' }}>
        <Link
          component={RouterLink}
          variant="button"
          color="inherit"
          to="/cases"
        >
          Сообщения о кражах
        </Link>
        <Link
          component={RouterLink}
          variant="button"
          color="inherit"
          to="/officers"
        >
          Ответственные сотрудники
        </Link>
      </Box>
    </nav>
  );

  const logInButton = (
    <Button color="inherit" onClick={() => navigate("/login")}>
      Login
    </Button>
  );

  const logOutButton = (
    <Button color="inherit" onClick={logOut}>
      LogOut
    </Button>
  );

  return (
    <AppBar position="relative">
      <Container disableGutters maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BikeScooter sx={{ mr: 2 }} />
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Сервис проката велосипедов
            </Typography>
          </Box>
          {userState.isLoggedIn && navBar}
          {userState.isLoggedIn ? logOutButton : logInButton}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
