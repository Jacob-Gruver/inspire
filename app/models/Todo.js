export default class Todo {
  constructor({ id, completed,  description, }) {
    this.id = id
    this.completed = completed 
    this.description = description
  }

  

  get todoTemplate() {
    var isDone = '';
    if (this.completed == true) {
      isDone = 'checked';
    }

    return   `
    <div class="col-md-4 col-6 mt-3"
    <div class="card">
                            <div class="card-body bg-light">
                              <h4 class="card-title text-warning">${this.description}</h4>
                              <p>Finished: ${this.completed}</p>
                              <input ${isDone} type="checkbox" id="checkBox" name="done" onclick="app.todoController.toggleTodoStatus('${this.id}')">
                              <p class="card-text">Gotta Do This!</p>
                              <button type="button" class="btn btn-danger" onclick="app.todoController.removeTodo('${this.id}')">Remove</button>
                            </div>
                        </div>
    </div>
    `
  }
}