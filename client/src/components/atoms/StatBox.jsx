import React from 'react'
import {
  Typography,
  Paper,
} from '@mui/material';

const StatBox = ({ label, value }) => (
  <Paper
    elevation={2}
    sx={{ p: 1, textAlign: 'center', border: '1px solid #999' }}
  >
    <Typography variant="subtitle2" fontWeight="bold">
      {label}
    </Typography>
    <Typography variant="h6">{value}</Typography>
  </Paper>
);

export default StatBox;