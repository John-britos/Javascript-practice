const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';
	for (let i = 0; i < todoList.length; i++) {
		const todo = todoList[i];
		const html = `
				<div>${todo}</div>
				<button class="remove-todo" onclick="
				todoList.splice(${i}, 1);
				renderTodoList();
				">delete</button>
			`;
		todoListHTML += html;
	}
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