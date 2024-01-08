# Todo List Application

This project is a simple Todo List application implemented in JavaScript, consisting of three main components: `view`, `controller`, and `db`. The `view` module is responsible for rendering the user interface, the `controller` module handles the application's logic, and the `db` module manages data storage.

## View Module

The `view` module is responsible for rendering the user interface and handling user interactions. It interacts with the HTML elements of the application to display todos and respond to user actions.

### Functions

- **`render(todos)`**: Renders the list of todos based on the provided array of todo objects. It clears the existing list and appends new list items for each todo.

### User Interaction

- The `init` function sets up an event handler for the "Add" button (`addButton`). When clicked, it triggers the `addTodo` function from the associated `controller`.

## Controller Module

The `controller` module manages the application's logic, including adding, toggling completion, removing todos, and setting filters. It interacts with the `view` module to update the user interface.

### Functions

- **`addTodo(value)`**: Adds a new todo with the provided value.
- **`toggleComplete(todo)`**: Toggles the completion status of a todo.
- **`removeAllTodos()`**: Removes all todos.
- **`remove(todo)`**: Removes a specific todo.
- **`setFilter(value)`**: Sets the filter for displaying todos.

### Initialization

- The `init` function initializes the `controller` by retrieving the model from the `db` module and rendering the initial state.

### Filtering

- The `filterTodos` function filters todos based on the selected filter (all, active, complete) and returns the filtered array.

### Rendering

- The `render` function updates the model in the `db` module and triggers the `render` function in the `view` module with the filtered todos.

## Database Module

The `db` module is a simple local storage-based database for storing the model data.

### Functions

- **`getModelFromLocalStorage()`**: Retrieves the model data from local storage.
- **`setModelToLocalStorage(value)`**: Stores the model data to local storage.

## How to Use

1. Open the `index.html` file in a web browser.
2. Use the input field and "Add" button to add new todos.
3. Click on todo items to toggle their completion status.
4. Use the "Activate" or "Complete" buttons to change the completion status.
5. Click the "X" button to remove a todo.
6. Use the "Clear All" button to remove all todos.

## Notes

- This Todo List application uses local storage for data persistence.
- The application includes a simple HTTP server for serving the HTML and JavaScript files using the `ecstatic` module. The server listens on port 8080.
- Ensure that the necessary HTML elements are present with the specified IDs for proper functionality.

Feel free to explore and modify the code to suit your needs. For additional information on building interactive web applications, refer to the relevant documentation for JavaScript and web development.
{
// in the project folder
// --> npm init
// npm install ecstatic --save-dev
// node server.js
}
