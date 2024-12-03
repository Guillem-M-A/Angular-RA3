export function yellowsubmarine(){
    document.getElementById("groc").style.color = "yellow";
}
export function changeSize(){
document.getElementById("taula").style.width = "100px";
document.getElementById("taula").style.border = "5px solid red";
}

export function countWord(){
    let count = 1;
    let text =document.getElementById("text").innerHTML;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " "){
            count++;
        }
    }return console.log(count);
}

export function imagen(){
    let imagen = document.getElementById("imagen");
    imagen.src = "https://www.w3schools.com/css/img_fjords.jpg";
    imagen.alt = "fjords";
    imagen.width = "200";
    imagen.height = "200";
}
