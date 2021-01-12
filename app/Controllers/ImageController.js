import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

function _drawImage() {
    document.body.style.backgroundImage = ProxyState.images.imageBackround;
    
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
    constructor() {
        ProxyState.on("images", _drawImage);
        this.getImage();
    }
    getImage() {
        try {
            imageService.getImage();
        } catch (error) {
            console.error(error);
        }
    }
    
 }