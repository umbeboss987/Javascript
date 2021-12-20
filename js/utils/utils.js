export default function setStyle(element, objProps) {
    Object.keys(objProps).forEach(function(key) {
        element.style[key] = objProps[key];
    });
}


