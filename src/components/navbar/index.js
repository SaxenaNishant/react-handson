import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Button,
  Link,
  Paper,
} from "@material-ui/core";
import logoImage from "../../assets/images/logo.png";
import { useStyles } from "./style";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Navbar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          className={classes.header}
          role="navigation"
        >
          <Toolbar>
            <img src={logoImage} alt="" className={classes.logo} />
            <Typography variant="h6" className={classes.heading}>
              Bill payment remittance reporting
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 2 }}>
              <p>
                <span className={classes.text}>Contact us</span>
              </p>
            </Box>
            <Box sx={{ p: 2 }}>
              <p>
                <span>En | </span>
                <span className={classes.text}>Fr</span>
              </p>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Grid container>
          <Grid item lg={2} md={4}>
            <Typography variant="h1" className={classes.column_title}>
              Log in
            </Typography>
          </Grid>
          <Grid item lg={2} md={4}>
            <p className={classes.input_field_label1}>User ID *</p>
            <FormControl
              variant="outlined"
              className={classes.input_field_box1}
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                value={values.userID}
                onChange={handleChange("userID")}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "userID",
                }}
              />
            </FormControl>
            <p className={classes.input_field_label2}>Password *</p>
            <FormControl
              variant="outlined"
              className={classes.input_field_box2}
            >
              <OutlinedInput
                id="outlined-adornment"
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
              />
            </FormControl>
            <Box>
              <Button className={classes.loginBtn} variant="contained">
                Log in
              </Button>
              <Link href="#" className={classes.link1}>
                I forgot my password
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.parentBox}>
          <Paper elevation={4}>
            <Typography variant="h6" className={classes.paperHeading}>
              Messages
            </Typography>
            <Box className={classes.childBox}>
              <p className={classes.paperHeader}>
                <strong>Banking with TELUS</strong>
                <br />
                At TELUS Bank, our commitment to Corporate Social Responsibility
                opens doors and creates opportunities.
                <span className={classes.underline}>Learn more</span>
              </p>

              <p className={classes.paperHeader}>
                <strong>PDF advices unavailable: Feb 15 - 22</strong>
                <br />
                Due to system migration issues, PDF advices will not be
                available on the portal for the period of: Feb 15 - Feb 22,
                inclusive. You should have received Fax advices during this time
                that can be used for your reconciliation.
              </p>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
