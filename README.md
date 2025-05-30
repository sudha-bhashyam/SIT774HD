
# SIT774HD: OTP Login System Web Application

This repository contains the source code for a secure One-Time Password (OTP) based login system, developed as part of the SIT774 - Web Technologies and Development unit at Deakin University. The application demonstrates full-stack development using Node.js, Express, and front-end technologies such as HTML, CSS, and JavaScript.

## Features

- One-Time Password (OTP) login system
- Email-based OTP delivery (via Nodemailer)
- Basic input validation and security checks
- Responsive UI using Bootstrap
- Organized project structure for ease of deployment and testing

## Folder Structure
SIT774HD/
│
├── public_html/ # Frontend HTML/CSS/JS files
│ ├── index.html
│ ├── login.html
│ ├── otp.html
│ └── styles.css
│
├── images/ # Static image assets
│
├── otpManager.js # OTP generation and verification logic
├── server.js # Node.js Express server configuration
├── package.json # NPM metadata and dependencies
└── README.md # Project documentation


## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- NPM

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sudha-bhashyam/SIT774HD.git
   cd SIT774HD
2. Install the dependencies:
npm install

3. Set up environment variables (optional):
If using email-based OTP delivery, create a .env file with:
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

4. Run the server:
node server.js

5.Visit the app:
Open your browser and navigate to http://localhost:3000

## Usage

User enters their email on the login page.
A 6-digit OTP is generated and sent via email.
The user enters the OTP to gain access.
OTPs expire after a limited time or number of attempts.




## Acknowledgements

Developed for SIT774 – Web Technologies and Development
Instructor: Micheal Hobbs
University: Deakin University
Author: Lakshmi Sudha Bhashyam

## License
You are free to reuse and adapt it for academic or personal use.
