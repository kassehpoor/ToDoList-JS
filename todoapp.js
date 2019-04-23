// version 0.0.2  save data on loca storage
(function todoModule() {

	var todos, addButton, deleteButton, todoText, toDoListElements;
	
	window.onload = init;
	
	function init () {
		getTodosFromLocalStorage();

		addButton = document.getElementById("addButton");
	    deleteButton = document.getElementById("deleteButton");
        todoText = document.getElementById("todoText");
        toDoListElements = document.getElementById("toDoListElements");
		
		addButton.onclick = function (){addelement(todos)};
	    deleteButton.onclick = function (){deleteAllTodos(todos)};

		render();
	}
	
	//------Getting Todos elements form Loca Storage------------------------
	
	function getTodosFromLocalStorage() {
		var retrievedData = localStorage.getItem('todos');
		todos = retrievedData ? JSON.parse(retrievedData) : [];
		//window.todos = todos;
	}
	
	//-------Save Todos elements on Loca Storage----------------------------
	
	function saveTodosOnLocalStorage() {
		var todosToBeSaved = todos.map(todo => ({
			text: todo.text,
			isDone: todo.isDone
		}));
		localStorage.setItem('todos', JSON.stringify(todosToBeSaved));
	}
	
	//---------------------------------------------------------------------

    function render() {
		todos.forEach(function(todo) {
			if(todo.isRendered) return;
			
			var element  = document.createElement("li");
			
            element.innerHTML = todo.text;
						
			toDoListElements.appendChild(element);
			element.appendChild(createButtons(element, todo));
			
			todo.isRendered = true;
			todo.element = element;
		});
    }

	//------------------------------------------------------------------
	
    function addelement(todos) {
        var el = document.getElementById("todoText");
		
			if (el.value!=""){
				todos.push({text:el.value,isDone:false,isRendered:false});
				saveTodosOnLocalStorage();
				el.value = "";
				el.focus();
			}
		
        render();
    }
	//---------------------------------------------------------------

	function deleteAllTodos (todos) {
		
		[].concat(todos).forEach(function(todo){
			deleteelement(todo);
		});
		
		saveTodosOnLocalStorage();
		
		render();
	}
	
	//----------------------------------------------------------------
	
	function deleteelement(todo) {
		
		todo.element.remove();
		todos.splice(todos.indexOf(todo), 1);
		saveTodosOnLocalStorage();
		render();
	}

	//-----------------------------------------------------------------
	
	function createButtons(element,todo){
		var div = document.createElement("div");
		div.style.display = 'inline';
		var btnRemove = document.createElement("input");
		btnRemove.type="Button";
		btnRemove.value = "delete";
		btnRemove.onclick=function(){
			deleteelement(todo);
		};
		div.appendChild(btnRemove);
		
		var btndone = document.createElement("input");
		btndone.type="Button";
		element.style.color = todo.isDone ?'green':'gray';
		btndone.style.backgroundColor = todo.isDone ?'green':'gray';
		btndone.value = todo.isDone ? 'unDone' : 'done';
		
		btndone.addEventListener("click", function() {
			//todo.isDone = todo.isDone ?false :true;
			todo.isDone = !todo.isDone ;
			element.style.color = todo.isDone ?'green':'gray';
			btndone.style.backgroundColor = todo.isDone ?'green':'gray';
			btndone.value = todo.isDone ? 'unDone' : 'done';
			saveTodosOnLocalStorage();
		}, false);
		div.appendChild(btndone);
		
		
		return div;
	}
	
	
	
})();

