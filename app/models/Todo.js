export default class Todo {
  constructor({ id, description}) {
    this.id = id
    this.description = description
    this.status = "Unfinished"
  }

  

  get todoTemplate() {
    return `
    <div class="card bg-transparent">
                            <div class="card-body">
                              <h4 class="card-title text-warning">${this.description}</h4>
                              <p>Status: ${this.status}</p>
                              <input type="checkbox" name="done" onclick="app.todoController.toggleTodoStatus(${this.id})">
                              <p class="card-text">Gotta Do This!</p>
                            </div>
                        </div>
    
    `
  }
}