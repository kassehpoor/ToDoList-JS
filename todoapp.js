(function todoModule() {

    var todos = [];
	window.todos = todos;
	
    var addButton = document.getElementById("addButton");
	var deleteButton = document.getElementById("deleteButton");
    var todoText = document.getElementById("todoText");
    var toDoListElements = document.getElementById("toDoListElements");

    addButton.onclick = addItem;
	deleteButton.onclick = deleteAllTodos;
	
	//---------------------------------------------------------------

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

	//---------------------------------------------------------------
	
    function addItem() {
        var el = document.getElementById("todoText");
		
				if (el.value!=""){
				todos.push({text:el.value,isDone:false,isRendered:false});
				el.value = "";
				el.focus();
				}
		
        render();
    }
	//---------------------------------------------------------------

	function deleteAllTodos () {
		[].concat(todos).forEach(function(todo){
			deleteItem(todo);
		});
		render();
		
	}
	//----------------------------------------------------------------
	function deleteItem(todo) {
		
		todo.element.remove();
		todos.splice(todos.indexOf(todo), 1);
	
		render();
}

	//-----------------------------------------------------------------
	function createButtons(item,todo){
		var div = document.createElement("div");
		div.style.display = 'inline';
		var btnRemove = document.createElement("input");
		btnRemove.type="Button";
		btnRemove.value = "delete";
		btnRemove.onclick=function(){
			deleteItem(todo);
		};
		div.appendChild(btnRemove);
		
		var btndone = document.createElement("input");
		btndone.type="Button";
		btndone.value = "Done";
		
		btndone.addEventListener("click", function() {
				//todo.isDone = todo.isDone ?false :true;
				todo.isDone = !todo.isDone ;
				item.style.color = todo.isDone ?'green':'gray';
				btndone.style.backgroundColor = todo.isDone ?'green':'gray';
				btndone.value = todo.isDone ? 'unDone' : 'done';
			
}, false);
		div.appendChild(btndone);
		
		
		return div;
	}

})();

