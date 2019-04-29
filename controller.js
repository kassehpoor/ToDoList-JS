var controller = (function () {
	var _todos = [];
	var _filter = 0; // 0:all   1:active   2:complete

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
		_todos.push({ title: value, complete: false });
		render();
	}

	function toggleComplete(todo) {
		todo.complete = !todo.complete;
		render();
	}

	function remove(todo) {
		_todos.splice(_todos.indexOf(todo), 1);
		render();
	}

	function removeAllTodos() {
		_todos = [];
		render();
	}

	function setFilter(value) {
		_filter = value;
		render();
	}


	// ================================================================


	function init() {
		var model = db.getModel() || { todos: [], filter: 0 };
		_todos = model.todos;
		_filter = model.filter;
		render();
	}

	function filterTodos() {
		return (_filter === 0
			? _todos
			: _todos.filter(function (t) {
				return _filter === 1 ? !t.complete : t.complete;
			}));
	}


	function render() {
		db.setModel({ todos: _todos, filter: _filter });
		view.render(filterTodos());
	}

})();