# Contact Us Application

This is a full-stack web application that allows users to submit a "Contact Us" form. The application consists of two main components:

- **Frontend:** A React-based client-side application.
- **Backend:** A Node.js server using Express and MongoDB for handling form submissions.

- Ensure you have the following installed:

- **Node.js** (v20.x or later)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Matt-T993/Matthew-Theseira-Open-Agent-Tech-Test-Submission.git
```

### 2. Set up backend

Add your MongoDB connection string to the `.env` file in the backend directory. Note:
Replace `<username>`, `<password>`, and `<cluster-url>` with your actual MongoDB credentials:
MONGO_URI=mongodb+srv://`<username>`:`<password>`@`<cluster-url>`/yourDatabaseName?retryWrites=true&w=majority

In your MongoDB Database for contents collections add this

- pageBody:Welcome to OpenAgent. We,ve been around since 2013, and our vision is to make it easy for people to buy, sell and own property.
- phone:"132434"
- postalAddress:"PO Box 419, Alexandria NSW 1435"
- businessHours:"Monday - Friday 8:30 - 5:00"
- pageHeader:"Contact us, we love to hear from you"
- email:"support@openagent.com.au"
- pageBody2:"Here are the different ways you can contact us"

or

use my database

- MONGO_URI=mongodb+srv://matthewtheseira:Rambo123@openagent-tech-test.zbap3.mongodb.net/?retryWrites=true&w=majority&appName=openAgent-tech-test

```bash
cd backend
npm install
npm run dev
```

### 3. Set up frontend

```
cd frontend
npm install
npm run dev
```
