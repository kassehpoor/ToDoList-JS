//-----------------------model-

var todos = [];
//--------------------controller------------------------------------------------------------------
function addTodo(value) {
	todos.push({ title: value, complete: false });
	render();
}

function toggleComplete(todo) {
	todo.complete = !todo.complete;
}

function remove(todo) {
	// remove todo
	render();
}

//------------------------view------------------------------------------------------------------
var todoListEl = document.getElementById('todoList');

function render() {
	todoListEl.innerHTML = '';
	todos.forEach(function (todo) {
		todoListEl.appendChild(createLi(todo));
	});

	function createLi(todo) {
		var li = document.createElement('li');
		var span = document.createElement('span');
		span.textContent = todo.title;
		if (todo.complete) {
			span.className = 'complete';
		}
		li.appendChild(span);
		li.appendChild(createButtons(todo));
		
		return li;
	}

	function createButtons(todo) {
		var div = document.createElement('div');
		var btnComplete = document.createElement('button');
		var btnRemove = document.createElement('button');
		
		btnComplete.textContent = todo.complete ? 'undo' : 'do';
		btnRemove.textContent = 'X';

		div.style.display = 'inline';
		div.appendChild(btnComplete);
		div.appendChild(btnRemove);

		return div;
	}
}