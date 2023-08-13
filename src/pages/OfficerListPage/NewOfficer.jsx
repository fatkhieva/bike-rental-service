import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { OfficerForm } from "../../components/OfficerForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCases, createCase } from "../../reducers/cases-slice";

export const NewOfficer = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const casesState = useSelector(selectCases);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setFormValues(defaultFormValues);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isValid = ["licenseNumber", "ownerFullName", "type"].every(
      (field) => !!formValues[field]
    );

    if (isValid) {
      console.log(formValues);
      dispatch(createCase(formValues));
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Добавить сотрудника
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Добавление сотрудника</DialogTitle>
        <DialogContent>
          <OfficerForm
            {...{
              formValues,
              setFormValues,
              isSubmitted,
              isLoading: casesState.isSending,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} autoFocus>
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const defaultFormValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  approved: false,
};
