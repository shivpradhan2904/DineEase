// controller/reservation.js
import { ErrorHandler } from "../middlewares/error.js"; // Import both the class and the middleware function
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
    const { firstName, lastName, date, time,email, phone, } = req.body;

    console.log("Received");

    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
    }

    try {
        await Reservation.create({ firstName, lastName, email, date, time, phone });

        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(', '), 400));
        }
        return next(error); // Pass the error directly to the error middleware
    }
};

export { send_reservation }; // Export the controller function for use in routes