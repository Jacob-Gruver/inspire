export default class Quote {
    constructor(data) {
        this.author = data.quote.author,
        this.body = data.quote.body
    }

    get quoteTemplate() {
        return `
        <div class="bg-transparent">
        <div>
          <h4 class="card-title text-light">Quote: ${this.body}</h4>
          <p class="card-text text-light">Author: ${this.author}</p>
        </div>
    </div>
        `
    }

}