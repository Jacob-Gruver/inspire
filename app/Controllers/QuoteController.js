import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"

function _drawQuotes() {
    document.getElementById('quote-temp').innerHTML = ProxyState.quotes.quoteTemplate;
    
}

//TODO Create methods for constructor, and rendering the quote to the page
export default class QuoteController {
    constructor() {
        ProxyState.on("quotes", _drawQuotes);
        this.getQuotes();
    }
    getQuotes() {
        try {
        quoteService.getQuotes();          
        } catch (error) {
            console.error(error);
        }
    }
 }