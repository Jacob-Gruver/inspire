import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Jacob/todos/'

//bcw-sandbox.herokuapp.com/api/Jacob/todos/


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.map(todo => new Todo(todo));
  }

  async addTodo(todo) {
    debugger
    // ProxyState.todos = [...ProxyState.todos, new Todo(todo)]
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    console.log(res);
    // Got a CORS error at line 22
    this.getTodos();
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    todo.status = "Finished"; 
    let res = await api.put(url + todoId, todo);

    //TODO how do you trigger this change
    
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await url.delete(todoId);
    console.log(res);
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id != todoId);
  }
}

const todoService = new TodoService();
export default todoService;