const dom = document.querySelector('.input')
const data = 'age'.split('')
let index = 0
function writing(index) {
    if (index < data.length) {
        dom.innerHTML += data[index]
        setTimeout(writing.bind(this), 200, ++index)
    }
}
    var div = document.getElementById("blue");
    var blue = div.getBoundingClientRect();
    console.log(blue.height);
    console.log(blue.width)
    console.log(blue.top)
