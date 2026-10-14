function color(newColor) {
document.body.style.backgroundColor = newColor;
localStorage.setItem("color", newColor); 
}
color("#A7F3D0")