// routes/reservationRoute.js
import express from "express";
import { send_reservation } from "../controller/reservation.js"; // Only import what you need

const router = express.Router();

router.post("/api/reservation", send_reservation); // Route to create a reservation
// You can remove the get and delete routes if they are not used

export default router;