<h1>Hospital Management System</h1>

### Overview

<p>The Hospital Management System is a web application designed to streamline hospital operations. It supports two user roles: patients and administrators, enabling efficient interaction and data handling.</p>

### Features

• User Authentication: Secure login and registration for patients and admins using JSON Web Tokens (JWT).

• Role-Based Access: Different functionalities for patients and administrators.

• Error Handling: Comprehensive error management across all controllers.

• Data Storage: Utilizes MongoDB Atlas for secure and scalable data management.

### Technologies

• Backend: Node.js, Express.js

• Database: MongoDB Atlas

• Authentication: JSON Web Tokens (JWT)

• Development Tools: Postman, Git 

<h2>Getting Started</h2>

### Prerequisites

Before you begin, ensure you have the following tools installed:

• Node.js (v14 or higher)

• MongoDB Atlas Account

• Cloudinary Account

## Installation

### 1. Clone the Repository

    git clone <repository-link>

### 2. Navigate to the project directory

### 2. Install Dependencies

  Ensure you have npm (Node Package Manager) installed. Run:

    npm install
   
### 3. Set Up Environment Variables

   Create a .env file in the root directory and add the following environment variables:

    PORT=3000
    
    MONGO_URI=your_mongodb_atlas_connection_string
    
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    
    JWT_SECRET=your_jwt_secret_key
    
Replace the placeholders with your actual credentials.

### Start the Server

    npm start
    
The server will start on http://localhost:3000.

### Acknowledgments

• Express.js

• MongoDB Atlas

• JSON Web Tokens
