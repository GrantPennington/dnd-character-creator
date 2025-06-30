import {
  Box,
  Typography,
} from '@mui/material';

const SheetSection = ({ title, children }) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            {title}
        </Typography>
        {children}
    </Box>
);

export default SheetSection;