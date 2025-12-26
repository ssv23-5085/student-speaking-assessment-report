const express = require("express"); // Imports Express
const cors = require("cors"); // Allow Frontend to talk to Backend

const app = express(); // Creates Server App
const PORT = 5000;

//Allow Frontend requests
app.use(cors());

//sample student data

const studentReport = {
    overallScore : 7,
    skills : {
        pronunciation : 7,
        fluency : 6,
        vocabulary : 7,
        grammar : 8
    } 

};

// API Endpoint
app.get("/api/report", (req,res) => {
    res.json(studentReport);
})

//start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
