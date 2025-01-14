const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';
	for (let i = 0; i < todoList.length; i++) {
		//this is a for loop
		// that goes through the todoList
		// array and creates a new p tag for each item in the array
		const todo = todoList[i];
		const html = `<p>${todo}</p>`;
		todoListHTML += html;

		document.querySelector('.todoList').innerHTML = todoListHTML;
	}
}

function addTodo() {
	const inputElement = document.querySelector('.todoInput');
	const userTodo = inputElement.value;

	todoList.push(userTodo);
	console.log(todoList);

	inputElement.value = '';
	renderTodoList();
}
