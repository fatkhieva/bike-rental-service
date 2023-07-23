import AppBar from "@mui/material/AppBar";
import BikeScooter from "@mui/icons-material/BikeScooter";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

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
          <nav>
            <Link variant="button" color="inherit" href="#" sx={{ mx: 1.5 }}>
              Features
            </Link>
            <Link variant="button" color="inherit" href="#" sx={{ mx: 1.5 }}>
              Enterprise
            </Link>
            <Link variant="button" color="inherit" href="#" sx={{ mx: 1.5 }}>
              Support
            </Link>
          </nav>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
