const express = require("express");
const {
  doctorRegisterController,
  getDoctorProfileController,
  doctorDashboardController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
  getAllDoctorsController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");

const authMiddleware   = require("../middleware/authMiddleware");
const doctorMiddleware = require("../middleware/doctorMiddleware");

const router = express.Router();

// ── Public ──────────────────────────────────
// POST /api/v1/doctor/register
router.post("/register", doctorRegisterController);

// ── Patient side (needs login) ───────────────
// GET /api/v1/doctor/all
router.get("/all", authMiddleware, getAllDoctorsController);

// GET /api/v1/doctor/:doctorId
router.get("/:doctorId", authMiddleware, getDoctorByIdController);

// ── Doctor side (needs doctor role) ──────────
// GET /api/v1/doctor/doctor-info/profile
router.get("/doctor-info/profile", doctorMiddleware, getDoctorProfileController);

// GET /api/v1/doctor/doctor-info/dashboard
router.get("/doctor-info/dashboard", doctorMiddleware, doctorDashboardController);

// GET /api/v1/doctor/doctor-info/appointments
router.get("/doctor-info/appointments", doctorMiddleware, getDoctorAppointmentsController);

// POST /api/v1/doctor/doctor-info/update-status
router.post("/doctor-info/update-status", doctorMiddleware, updateAppointmentStatusController);

module.exports = router;
