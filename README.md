# Student Speaking Assessment Report

This project is a simple **Full Stack Student Speaking Assessment Report Page**, inspired by platforms like IELTS / SpeechAce.  
It displays a student’s speaking performance using an interactive frontend and a lightweight backend API.

The project focuses on:
- Clean frontend UI
- Basic backend data handling
- Logical feedback generation based on scores

---

## 🛠️ Tech Stack Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

---




## 📂 Project Structure

student-speaking-report/
│
├── index.html
├── style.css
├── script.js
│
├── backend/
│ ├── server.js
│ ├── package.json
│ └── .gitignore
│
└── README.md


---

## ▶️ How to Run the Project

### Step 1: Run the Backend Server

1. Open **Command Prompt (CMD)**  
2. Navigate to backend folder:

```bash
cd student-speaking-report/backend

3. Install dependencies (one time only):

4. Start the server:
node server.js

If successful, you will see: Server running at http://localhost:5000

⚠️ Keep this terminal running.


Step 2: Run the Frontend

Open index.html using VS Code Live Server
OR

Open index.html directly in the browser

The frontend will fetch data from the backend API and display the report dynamically.

📊 Where the Scores Are Stored

The student scores are stored in the backend inside server.js as an in-memory JavaScript object.

Example:
const studentReport = {
  overallScore: 7,
  skills: {
    pronunciation: 7,
    fluency: 6,
    vocabulary: 7,
    grammar: 8
  }
};
This data is exposed through a REST API endpoint: GET http://localhost:5000/api/report


🧠 How Feedback Logic Works

The descriptive feedback is generated automatically on the frontend using JavaScript conditions based on the overall score.

Feedback Rules:

Score ≥ 8
→ Excellent performance with strong control.

Score between 6 and 7
→ Good performance with minor inaccuracies.

Score < 6
→ Needs improvement.

This logic ensures feedback updates automatically whenever the score values change

✅ Key Features

Clean and responsive UI

Dynamic score rendering from backend

Progress bar visualization for each skill

Automatic descriptive feedback

Simple and readable code structure


