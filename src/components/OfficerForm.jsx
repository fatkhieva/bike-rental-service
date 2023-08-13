import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const OfficerForm = (props) => {
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
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            error={isSubmitted && !formValues.email}
            autoComplete="email"
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            onChange={handleChange}
            value={formValues.password}
            error={isSubmitted && !formValues.password}
            autoComplete="new-password"
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            fullWidth
            id="firstName"
            label="Имя"
            onChange={handleChange}
            value={formValues.firstName}
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="lastName"
            label="Фамилия"
            name="lastName"
            onChange={handleChange}
            value={formValues.lastName}
            autoComplete="family-name"
            disabled={isLoading}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="approved"
                id="approved"
                checked={formValues.approved}
                onChange={handleChange}
                disabled={isLoading}
              />
            }
            fullWidth
            label="Одобренный"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
