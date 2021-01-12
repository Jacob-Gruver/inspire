export default class Quote {
    constructor(data) {
        this.author = data.quote.author,
        this.body = data.quote.body
    }

    get quoteTemplate() {
        return `
        <div class="bg-transparent">
        <div>
          <h4 class="card-title text-light font-italic">${this.body}</h4>
          <nav class="navbar navbar-expand-sm bg-transparent navbar-transparent">
                    <a class="navbar-brand" href="#">
                        <i class="fa fa-code-fork"></i>
                    </a>
                    <div>
                    <p class="card-text text-light font-italic">${this.author}</p>
                    </div>
                </nav>
        </div>
    </div>
        `
    }

}