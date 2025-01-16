const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';
	todoList.forEach(function (todo, index){
		const html = `
				<div>${todo}</div>
				<button class="remove-todo" onclick="
				todoList.splice(${index}, 1);
				renderTodoList();
				">delete</button>
			`;
		todoListHTML += html;
	});
	
	document.querySelector('.todoList').innerHTML = todoListHTML;
}

function addTodo() {
	const inputElement = document.querySelector('.todoInput');
	const userTodo = inputElement.value;

	todoList.push(userTodo);
	console.log(todoList);

	inputElement.value = '';
	renderTodoList();
}