import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import studentRoutes from './routes/student.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import yearRout from './routes/year.js';
import semesterRout from './routes/semester.js';
import shiftRout from './routes/shift.js';
import roomRout from './routes/room.js';
import classRoute from './routes/classRoutes.js';
import gbfsRoute from './routes/gbfs.route.js';


//for serching students by year,room,shift,semester
import studenSearchRoutes from './routes/student.js';

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", userRoutes);
app.use("/api/students",studentRoutes);
app.use("/api/attendance",attendanceRoutes);

// Year routes
app.use('/api/years', yearRout);

// Semester routes
app.use('/api/semesters', semesterRout);

// Shift routes
app.use('/api/shifts', shiftRout);

// room routes
app.use('/api/Rooms', roomRout);

// for serching students by year,room,shift,semester
app.use('/api/students',studenSearchRoutes);


// classRoute
app.use('/api/class', classRoute);

// gbfs

app.use('/gbfs',gbfsRoute);


export default app;
