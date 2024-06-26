const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const setupJobs = require("./utils/job");

const app = express();
const setupAndStartServer = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Reminder Service is listening on port ${PORT}`);
        setupJobs();
    });
}

setupAndStartServer();