import { ProxyState } from "../AppState.js"
import Quote from "../models/Quote.js"
import { api } from "../Services/AxiosService.js"

//TODO create methods to retrieve data and update the State
class QuoteService {
    async getQuotes() {
    let res = await api.get('quotes');
    console.log(res.data.quote);
    ProxyState.quotes = new Quote(res.data);
    }
}

const quoteService = new QuoteService();
export default quoteService;