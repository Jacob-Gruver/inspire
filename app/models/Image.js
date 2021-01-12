export default class Image {
    constructor(data) {
        this.url = data.url
    }

    get imageBackround() {
        return `
        url('${this.url}')
        `
    }

}