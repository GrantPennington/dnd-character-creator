const express = require('express');
const cors = require('cors');
require('dotenv').config();

const characterRoutes = require('./routes/characterRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/characters', characterRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));