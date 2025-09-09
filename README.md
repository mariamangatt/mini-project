📚 RSET Notes - Collaborative Academic Notes Platform
RSET Notes is a web platform designed to simplify academic note sharing between teachers and students. 
It promotes collaboration while maintaining content quality through teacher approvals.

🎯 Key Features
Teacher Uploads

Upload notes as text or Markdown (.md) files. 

Collaborative Editing

Students can suggest edits to teacher-uploaded notes.

Edits go through an approval system managed by teachers.

Chatbot Assistance

Integrated Gemini API Chatbot helps students with doubts and encourages interdisciplinary learning.

Search & Filter

Easily search and filter notes by subject or keyword.

Subject Management

Teachers can add or delete subjects.

Private Note Storage

Students can upload personal notes for private use (not shared with others).

🛠️ Tech Stack
Frontend	Backend	Database
React.js	Node.js (Express)	MongoDB

🗂️ Folder Structure
pgsql
Copy
Edit
client/   --> React frontend (UI & Chatbot integration)  
server/   --> Node.js backend (APIs & Authentication)  
⚙️ Setup Guide
Clone the Repository

bash
Copy
Edit
git clone https://github.com/mariamangatt/mini-project.git
Install Dependencies

bash
Copy
Edit
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
Start the Application

bash
Copy
Edit
# Frontend
npm start

# Backend
npm start
Environment Variables

Create a .env file in the server/ folder for database connection and API keys.

🌟 Why RSET Notes?
Encourages collaborative learning

Reduces redundancy in note-taking

Bridges the gap between faculty and students in academic content management

🚀 Future Scope
Version Control for notes

PDF & Docx uploads

Role-based dashboards

📄 License
For academic and educational use.
