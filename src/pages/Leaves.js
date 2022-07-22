import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { faker } from '@faker-js/faker';
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';

import {
  Button, Input ,Radio, RadioGroup, Stack,
  Paper,
  DesktopDatePicker,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Container,
  MenuItem,
} from '@mui/material';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import Page from '../components/Page';
import '../styles/Calender.css';
import '../styles/DatePicker.css';
import '../styles/DateRangePicker.css';

export default function Leaves() {
  // const theme = useTheme();
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <>
      <Page title="Dashboard">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Applying For Leave?
          </Typography>
          <Paper elevation={3} sx={{ minHeight: '400px' }}>
            <Grid container>
              <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
                <Typography
                  sx={{
                    fontSize: '23px',
                    textAlign: 'center',
                    mt: '8%',
                    mr: '2%',
                  }}
                >
                  Reason
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
                <Box>
                  <TextField
                    label=" Reason"
                    variant="filled"
                    select
                    fullWidth
                    size="small"
                    sx={{ mt: '1.5%', mb: '1.5%', width: '95%' }}
                    // value={request}
                    // onChange={handleChangeRequest}
                    //  onChange={(e) => {
                    //   setrequestDetail({
                    //     ...requestDetail,
                    //     type: e.target.value,
                    //   });
                    // }}
                    // helperText={request ? 'selected' : 'open this select menu'}
                  >
                    <MenuItem value="Vacation">Vacation</MenuItem>
                    <MenuItem value="Function">Function</MenuItem>
                    <MenuItem value="Sick-Family">Sick-Family</MenuItem>
                    <MenuItem value="Sick-Self">Sick-Self</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </TextField>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
                <Typography
                  sx={{
                    fontSize: '23px',
                    textAlign: 'center',
                    mt: '8%',

                    mr: '2%',
                  }}
                >
                  Days
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={7} xs={12} sx={{ mt: '2.5%' }}>
                <DateRangePicker onChange={onChange} value={value} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ width: '100%', mt: '10px', mb: '10px' }}>
                <Grid container>
                  <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
                    <Typography
                      sx={{
                        fontSize: '23px',
                        textAlign: 'center',
                        mt: '8%',

                        mr: '2%',
                      }}
                    >
                      No of Days
                    </Typography>
                  </Grid>
                  <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
                    <TextField
                      required
                      id="filled-required"
                      variant="filled"
                      placeholder="No. of Days"
                      sx={{ width: '95%' }}
                      // onChange={(e) => {
                      //   setresult({ ...result, noOfDays: e.target.value });
                      //   console.log("noofdays",e.target.value);
                      // }}
                      // value={calulateDate}
                    />
                  </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ width: '100%', mt: '10px', mb: '10px' }}>
                  <Grid container sx={{ mt: '3px' }}>
                    <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
                      <Typography
                        sx={{
                          fontSize: '23px',
                          textAlign: 'center',
                          mt: '8%',
                          mr: '2%',
                        }}
                        onChange={(e) => {
                          //  setresult({...result,desc:e.target.value})
                        }}
                      >
                        Description
                      </Typography>
                    </Grid>
                    <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
                      <TextField
                        id="filled-multiline-static"
                        multiline
                        placeholder="Description"
                        rows={4}
                        variant="filled"
                        sx={{ width: '95%', mt: '1%' }}
                      />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ width: '100%', textAlign: 'center' }}>
                      <Button
                        // onClick={handelsubmit}
                        variant="contained"
                        sx={{
                          borderRadius: 28,
                          color: 'white',
                          background: '#2065D1',
                          width: '25%',
                          maxWidth: '250px',
                          minWidth: '250px',
                          ml: 'auto',
                          mt: 2,
                          mr: 'auto',
                          // mx: "auto",
                        }}
                      >
                        SEND
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Page>
    </>
  );
}
