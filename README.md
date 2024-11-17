README file for my To-Do List application:

---

# To-Do List Application

<img width="785" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/e7a0058f-0c7f-4906-b859-25d6781026b2">

<img width="854" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/2d44f187-e694-4c95-a460-2da8a22b5e71">


This is a simple To-Do List web application built using Node.js, Express, and Vanilla JavaScript. The app allows users to add, update, delete, and filter tasks. All tasks are saved locally on the server, and the user interface provides an easy and interactive way to manage tasks.

## Features

- **Add a Task**: Enter a task description and click the plus button to add it to the list.
- **Mark as Complete**: Click the check button to mark tasks as complete.
- **Delete a Task**: Click the trash button to remove a task from the list.
- **Filter Tasks**: Filter tasks by "All," "Completed," or "Incomplete" categories.
- **Persisted Data**: Tasks are saved locally to a JSON file on the server, and previously saved tasks will load upon reopening the app.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A code editor, such as Visual Studio Code

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd todo-list-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `public` directory with `Listfile.html`, `Listfile.json`, and `style.css` files, and ensure the folder is set up as follows:

   ```
   public/
   ├── Listfile.html
   ├── Listfile.json
   └── style.css
   ```

5. In `Listfile.json`, initialize with an empty array:

   ```json
   []
   ```

### Run the Application

Start the server by running:

```bash
node app.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Use the input field to add tasks, check to mark as completed, and delete as needed.
3. Filter your tasks using the dropdown to show all, completed, or incomplete tasks.

## Code Structure

- **app.js**: Main server file. Handles API endpoints for managing todos.
- **public/Listfile.html**: Main HTML file with the structure of the to-do list interface.
- **public/script.js**: Client-side JavaScript for adding, deleting, and filtering tasks.
- **public/style.css**: Styling for the user interface.

## API Endpoints

- `GET /api/todos`: Retrieves all tasks.
- `POST /api/todos`: Adds a new task.
- `PATCH /api/todos/:id`: Updates the completion status of a task.
- `DELETE /api/todos/:id`: Deletes a task.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript
- **Persistence**: JSON file on the server

## Future Improvements

- Add user authentication to manage tasks by user.
- Enable editing tasks directly from the interface.
- Implement a database (e.g., MongoDB) for persistent data storage across sessions.
