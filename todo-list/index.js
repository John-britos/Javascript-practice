const todoList = [];

function addTodo() {
	const inputElement = document.querySelector('.todoInput');
	const userTodo = inputElement.value;

	todoList.push(userTodo);
	console.log(todoList);

	inputElement.value = '';
}
