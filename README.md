# todo_app_backend
# Simple TODO App Backend

This is a simple TODO app backend application built using Node.js, Express, and MongoDB. The application provides APIs for creating, reading, updating, and deleting TODO items.

## Features

- Create, read, update, and delete TODO items
- Store data in MongoDB
- JSON-based APIs

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your computer. You can download it from [Node.js official website](https://nodejs.org/).
- MongoDB installed and running. You can download it from [MongoDB official website](https://www.mongodb.com/).

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/todo-app-backend.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd todo-app-backend
   ```

3. **Install the dependencies**:
   ```sh
   npm install
   ```

4. **Create a `.env` file in the root directory** and add your MongoDB connection string and any other environment variables:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/todoDB
   ```

## Usage

1. **Start the server**:
   ```sh
   npm start
   ```

2. **Access the application**:
   - The application will be running at `http://localhost:3000`.

3. **Use the following API endpoints to interact with the application**:

### TODO Items

- **Get all TODO items**: `GET /todos`
- **Get a single TODO item**: `GET /todos/:id`
- **Create a new TODO item**: `POST /todos`
- **Update a TODO item**: `PUT /todos/:id`
- **Delete a TODO item**: `DELETE /todos/:id`

## Project Structure

```plaintext
todo-app-backend/
│
├── config/
│   └── database.js      # Database connection configuration
│
├── controllers/
│   ├── createTodo.js    # Controller for creating TODO items
│   ├── deleteTodo.js    # Controller for deleting TODO items
│   ├── getTodo.js       # Controller for getting TODO items
│   └── updateTodo.js    # Controller for updating TODO items
│
├── models/
│   └── Todo.js          # Mongoose schema and model for TODO items
│
├── routes/
│   └── todos.js         # Routes for TODO items
│
├── .env                  # Environment variables file
├── index.js              # Main server file
├── package-lock.json     # NPM package lock file
└── package.json          # NPM package configuration
```

## Contributing

Contributions are always welcome! Please create a pull request or open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Your Name - [amitprakhar14@gmail.com](mailto:amitprakhar14@gmail.com)
- GitHub - [amit012-bit](https://github.com/amit012-bit)
