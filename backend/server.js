const express = require('express');   // Import Express
const app = express();                // Create an Express app
const PORT = 3000;                    // Set the port

// Basic endpoint
app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

