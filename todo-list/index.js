const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHTML = '';
	for (let i = 0; i < todoList.length; i++) {
		const todo = todoList[i];
		const html = `
			<p>
				${todo}
				<button onclick="
				todoList.splice(${i}, 1);
				renderTodoList();
				">delete</button>
			</p>`;
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