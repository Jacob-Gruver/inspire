export default class Image {
    constructor(data) {
        this.url = data.url
        debugger
    }

    get imageBackround() {
        return `
        url('${this.url}')
        `
    }

}