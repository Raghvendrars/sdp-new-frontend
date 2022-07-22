import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import {
  Paper,
  Button,
  Modal,
  Input,
  TextField,
  DesktopDatePicker,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  FormControlLabel,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Container,
  MenuItem,
} from '@mui/material';
import Page from '../components/Page';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function RequestModules() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Request Modules
        </Typography>
        <Grid container>
          <Grid
            onClick={alert}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{ pl: '2%', pr: '2%', pt: '2%', pb: '2%' }}
          >
            <AppWidgetSummary sx={{ maxWidth: '450px' }} title="Change Data" icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: '2%', pr: '2%', pt: '2%', pb: '2%' }}>
            <AppWidgetSummary sx={{ maxWidth: '450px' }} title="Change" color="info" icon={'ant-design:apple-filled'} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: '2%', pr: '2%', pt: '2%', pb: '2%' }}>
            <AppWidgetSummary
              sx={{ maxWidth: '450px' }}
              title="SQL"
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: '2%', pr: '2%', pt: '2%', pb: '2%' }}>
            <AppWidgetSummary
              sx={{ maxWidth: '450px' }}
              title="To Access Login"
              total={234}
              color="error"
              icon={'ant-design:bug-filled'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
