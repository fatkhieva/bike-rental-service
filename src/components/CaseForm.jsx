import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";

export const CaseForm = (props) => {
  const { formValues, setFormValues, isSubmitted, isLoading } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 3, width: "100%", marginTop: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Номер лицензии"
            name="licenseNumber"
            id="licenseNumber"
            onChange={handleChange}
            value={formValues.licenseNumber}
            error={isSubmitted && !formValues.licenseNumber}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="ownerFullName"
            id="ownerFullName"
            label="ФИО арендатора"
            onChange={handleChange}
            value={formValues.ownerFullName}
            error={isSubmitted && !formValues.ownerFullName}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Тип велосипеда"
            name="type"
            id="type"
            onChange={handleChange}
            value={formValues.type}
            error={isSubmitted && !formValues.type}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="officer"
            id="officer"
            label="Ответственный сотрудник"
            onChange={handleChange}
            value={formValues.officer}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Цвет велосипеда"
            name="color"
            id="color"
            onChange={handleChange}
            value={formValues.color}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="date"
            id="date"
            label="Дата кражи"
            onChange={handleChange}
            value={formValues.date}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="description"
            id="description"
            label="Дополнительный комментарий"
            onChange={handleChange}
            value={formValues.description}
            disabled={isLoading}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
