const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');
const UserModel = require("./models/User2");
const PatientModel = require("./models/Patient");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(express.json());
app.use(cors());

// Cloudinary configuration
cloudinary.config({
    cloud_name: 'dbwnyvzab', // replace with your Cloudinary cloud name
    api_key: '712116713441461', // replace with your Cloudinary API key
    api_secret: 'OM6jcTn26O4kicgdhpNwl-2ha9w', // replace with your Cloudinary API secret
});

// Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        // Use the patientId from the request body to set the public_id
        return {
            folder: 'diabetic_retinopathy_images', // folder name in Cloudinary
            public_id: `${req.body.patientId}_${file.fieldname}`, // patientId and field name to create unique filenames
            allowed_formats: ['jpg', 'png', 'jpeg'],
        };
    },
});

// Configure multer to handle multiple file uploads
const upload = multer({ storage: storage });

mongoose.connect("mongodb://127.0.0.1:27017/User2");

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        });
});

// Modified upload endpoint
app.post('/upload', upload.fields([{ name: 'leftEyeImage' }, { name: 'rightEyeImage' }]), (req, res) => {
    const { patientId, patientName, phoneNo } = req.body;

    // Get the Cloudinary URLs for the uploaded images
    const leftEyeImageUrl = req.files['leftEyeImage'] ? req.files['leftEyeImage'][0].path : null;
    const rightEyeImageUrl = req.files['rightEyeImage'] ? req.files['rightEyeImage'][0].path : null;

    const newPatient = new PatientModel({
        patientId,
        patientName,
        phoneNo,
        leftEyeImageUrl, // Store the Cloudinary URL
        rightEyeImageUrl, // Store the Cloudinary URL
    });

    newPatient.save()
        .then(patient => res.json(patient))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Register endpoint
app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err));
});

// Start the server
app.listen(3001, () => {
    console.log("server is running");
});
