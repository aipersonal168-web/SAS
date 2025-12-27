import Year from '../models/year.model.js';

/**
 * getYears()
 * -------------------------
 * Meaning:
 * - Receive request from route
 * - Call model to get data
 * - Send response to client (JSON)
 */
export const getYears = async (req, res) => {
    try {
        const data = await Year.findAll();
       res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




