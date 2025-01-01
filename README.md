# markdown-quiz-app
An application that imports a Markdown-based cheat sheet of English words/idioms and turns them into interactive quizzes.

## Features
- Markdown file upload & table parsing  
- Display and search cheat sheet entries (words, examples, translations, etc.)  
- Basic quiz functionality (user can specify number of questions, filter by tags)  
- LocalStorage-based learning progress tracking  
- Edit & delete functionality for uploaded data

## Prerequisites
- Node.js (v16 or above)
- npm (v8 or above) or yarn

## Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/markdown-quiz-app.git
   cd markdown-quiz-app
   ```

2. Go to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open your browser at http://localhost:5173


## Usage
- On the main page, click "Choose File" to upload a Markdown cheat sheet.
- After parsing, the entries will appear in a table. Use the search bar to filter them.
- To start a quiz, click the "Start Quiz" button, select a tag (optional) and the number of questions.
- Track your correct/incorrect answers, and see basic progress in the local storage.

## Roadmap
 - Basic Markdown file parsing
 - Search & filter
 - Quiz (English -> Japanese)
 - Enhanced quiz modes (example-based, Japanese -> English)
 - Improved progress tracking (charts/graphs)
 - Multi-language support


## License
This project is licensed under the MIT License. See the LICENSE file for details.





