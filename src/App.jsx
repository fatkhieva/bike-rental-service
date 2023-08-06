import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/layout/Header";
import { WelcomePage } from "./pages/WelcomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { AxiosInterceptor } from "./services/http";
import { Protected } from "./components/utils/ProtectedRoute";
import CaseListPage from "./pages/CaseListPage/CaseListPage";
import OfficerListPage from "./pages/OfficerListPage/OfficerListPage";

export const App = () => {
  return (
    <>
      <AxiosInterceptor>
        <CssBaseline />
        <Header></Header>
        <Container disableGutters component="main" maxWidth="lg" sx={{ my: 2 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route
              path="cases"
              element={<Protected element={<CaseListPage />} />}
            />
            <Route
              path="officers"
              element={<Protected element={<OfficerListPage />} />}
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="welcome" element={<WelcomePage />} />
          </Routes>
        </Container>
      </AxiosInterceptor>
    </>
  );
};
