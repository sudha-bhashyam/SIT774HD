const nodemailer = require('nodemailer');
const crypto = require('crypto'); // Import crypto module for secure OTP generation

// In-memory store for OTPs
const otpStore = {};

exports.generateOTP = (email) => {
  const otp = crypto.randomInt(100000, 1000000).toString(); // Generates secure OTP between 100000–999999
  otpStore[email] = { otp, timestamp: Date.now() }; // Store OTP with current time
  return otp;
};

exports.sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,      // Your Gmail address from .env
      pass: process.env.EMAIL_PASS     // App password or Gmail password from .env
    }
  });

  await transporter.sendMail({
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It expires in 2 minutes.`
  });
};

exports.validateOTP = (email, inputOtp) => {
  const record = otpStore[email];
  if (!record) return false;

  const isValid = record.otp === inputOtp;
  const isExpired = (Date.now() - record.timestamp) > 2 * 60 * 1000; // 2 minutes expiry

  return isValid && !isExpired;
};
