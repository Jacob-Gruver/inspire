import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  console.log("Drawing Todos");
  let template = '';
  ProxyState.todos.forEach(todo => {
    template += todo.todoTemplate 
  })
  document.getElementById("todo-temp").innerHTML = template;
 }

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos);
    this.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    console.log("Hello From Add Todo!");
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form['description'].value
    };
    console.log(todo);
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    // @ts-ignore
    form.reset();
    // @ts-ignore
    $("#todo-modal").modal('hide');
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}