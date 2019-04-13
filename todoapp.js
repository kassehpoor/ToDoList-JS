(function() {

    var todos = [];
	
    var addButton = document.getElementById("addButton");
	var deleteButton = document.getElementById("deleteButton");
    var todoText = document.getElementById("todoText");
    var todoList = document.getElementById("todoList");

    addButton.onclick = addItem;
	deleteButton.onclick=deleteAllTodos;
	
	
//---------------------------------------------------------------

    function renderTodos() {
		todoList.innerHTML = "";
        todos.forEach(function(todo)  {
			var item  = document.createElement("li");
			
            item.innerHTML = todo.text;
						
			todoList.appendChild(item);
			var itemIndex = todos.indexOf(todo);
			item.appendChild(createButtons(item,itemIndex,todo));
			
         });
    }

//---------------------------------------------------------------
    function addItem() {
        var el = document.getElementById("todoText");
		
				if (el.value!=""){
				todos.push({text:el.value,isDone:false});
				el.value = "";
				el.focus();
				}
		
        renderTodos();
    }
//-----------------------------------------------------------

	function deleteAllTodos () {
		todos = [];
		renderTodos();
		
	}
//----------------------------------------------------------------
	function deleteItem(itemIndex) {
		
		todos.splice(itemIndex, 1);
	

		renderTodos();
}

//---------------------------------------------------------------
	function createButtons(item,itemIndex,todo){
		var div = document.createElement("div");
		div.style.display = 'inline';
		var btnRemove = document.createElement("input");
		btnRemove.type="Button";
		btnRemove.value = "delete";
		btnRemove.onclick=function(){deleteItem(itemIndex);};
		div.appendChild(btnRemove);
		
		var btndone = document.createElement("input");
		btndone.type="Button";
		btndone.value = "Done";
		
		btndone.addEventListener("click", function() {
           	/*	 
			if (!todo.isDone){
				todo.isDone = true;
				item.style.color= 'green';
				btndone.style.backgroundColor = 'green';
				btndone.value = 'unDone';

			}else
			{
				todo.isDone = false;
				item.style.color= 'black';
				btndone.style.backgroundColor = 'gray';
				btndone.value = 'done';
				
			};
			*/
				//-------------edited by afshin khan-------------------
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

