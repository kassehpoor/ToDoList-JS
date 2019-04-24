var controller = (function () {
	var todos = [];
	var filter = 0; // 0:all   1:active   2:complete
	var filteredTodos = [];

	init();

	return {
		addTodo: addTodo,
		toggleComplete: toggleComplete,
		removeAllTodos: removeAllTodos,
		remove: remove,
		setFilter: setFilter,
	};

	function addTodo(value) {
		if (!value) return;
		todos.push({ title: value, complete: false });
		render();
	}

	function toggleComplete(todo) {
		todo.complete = !todo.complete;
		render();
	}

	function remove(todo) {
		todos.splice(todos.indexOf(todo), 1);
		render();
	}

	function removeAllTodos() {
		todos = [];
		render();
	}

	function setFilter(value) {
		filter = value;
		render();
	}


	// ================================================================


	function init() {
		var model = db.getModel();
		todos = model.todos;
		filter = model.filter;
		render();
	}

	function filteredTodos() {
		filteredTodos = filter === 0
			? todos
			: todos.filter(function (t) {
				return filter === 1 ? !t.complete : t.complete;
			});
	}

	function saveModelToDb() {
		db.setModel({ todos: todos, filter: filter });
	}

	function render() {
		saveModelToDb();
		filteredTodos();
		view.render(filteredTodos);
	}

})();