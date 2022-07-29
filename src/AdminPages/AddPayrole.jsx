import react from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
export default function AddPayrole() {
  const [employeeId, setemployeeId] = useState("");
  const [employeeName, setemployeeName] = useState("");
  const [basic_salary, setbasic_salary] = useState("");
  const [HRA, setHRA] = useState("");
  const [special_allowance, setspecial_allowance] = useState("");
  const [leave_travel_allowance, setleave_travel_allowance] = useState("");
  const [medical_allowance, setmedical_allowance] = useState("");
  const [performance_bonus, setperformance_bonus] = useState("");
  const [number_of_leaves, setnumber_of_leaves] = useState("");
  const [total_monthly, settotal_monthly] = useState("");
  const [net_salary, setnet_salary] = useState("");
  const [getEmployee, setGetEmployee] = useState([]);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeName);
    axios
      .post(
        "adminPayrole/addPayrole",
        {
          employeeId,
          employeeName,
          basic_salary,
          HRA,
          special_allowance,
          leave_travel_allowance,
          medical_allowance,
          performance_bonus,
          number_of_leaves,
          total_monthly,
          net_salary,
        },

        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    try {
      axios
        .get("employee/get_employees", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setGetEmployee(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(userId, userName);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Paper
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "90%",
            lg: "70%",
            xl: "70%",
          },
          mx: "auto",
        }}
      >
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Employee Id
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Box>
              <TextField
                label=" Request Type"
                id="filled-required"
                variant="filled"
                select
                fullWidth
                value={userId}
                sx={{ width: "95%" }}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserId(e.target.value);
                  // setUserName(data.firstName);
                }}
                // onChange={(e) => {
                //   setGetEmployee(e.target.value);
                // }}

                //  value={request}
                //  onChange={handleChangeRequest}
                //  onChange={(e) => {
                //   setrequestDetail({
                //     ...requestDetail,
                //     type: e.target.value,
                //   });
                // }}
                //  helperText={request ? "selected" : "open this select menu"}
              >
                {getEmployee.map((data) => (
                  <option
                    onClick={(e) => {
                      console.log(e.target.value);
                      setemployeeId(data._id);
                      setemployeeName(data.firstName);
                    }}
                    key={data._id}
                    value={data._id}
                  >
                    {data.firstName}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Basic Salary
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setbasic_salary(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              HRA
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setHRA(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Special Allowance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setspecial_allowance(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Leave Travel Allowance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setleave_travel_allowance(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Medical Allowance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setmedical_allowance(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Performance Bonus
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setperformance_bonus(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              No. of Leaves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setnumber_of_leaves(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Total Monthly Salary
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                settotal_monthly(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            borderTop: "1px solid #dfdfdf",
            borderBottom: "1px solid #dfdfdf",
          }}
        >
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16%",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Net Salary
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{ mt: "0.5%", mb: "0.5%" }}
          >
            <TextField
              id="outlined-search"
              label="New Role"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
              onChange={(e) => {
                setnet_salary(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Button type="submit">Submit</Button>
        </Grid>
      </Paper>
    </form>
  );
}
