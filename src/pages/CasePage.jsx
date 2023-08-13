import { CaseForm } from "../components/CaseForm";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCases } from "../reducers/cases-slice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Cases } from "../services/http";
import { useParams } from "react-router-dom";

export const CasePage = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const casesState = useSelector(selectCases);
  const dispatch = useDispatch();
  const { caseId } = useParams();

  useEffect(() => {
    Cases.getCase(caseId).then((res) => {
      const { createdAt, updatedAt, __v, ...others } = res.data.data;
      setFormValues(others);
    });
  }, [caseId]);

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
          Сообщение о кражах
        </Typography>
      </Box>
      <CaseForm
        {...{
          formValues,
          setFormValues,
          isSubmitted,
          isFormBlocked: casesState.isSending,
        }}
      />
    </Container>
  );
};

const defaultFormValues = {
  _id: "",
  licenseNumber: "",
  ownerFullName: "",
  type: "",
  officer: "",
  clientId: "",
  color: "",
  date: "",
  description: "",
  resolution: "",
  status: "",
};
