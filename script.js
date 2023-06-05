const circle = document.querySelector(".circle") 
document.addEventListener("click", clickmays);
const circleBoundaries = circle.getBoundingClientRect();
function clickmays(event) {

    new Promise(res => {
        setTimeout(() => {
            circle.style.left = event.x - circleBoundaries.width/2 + 'px';
            circle.style.top = event.y - circleBoundaries.height/2 + 'px';
        }, 1000)
    })
        

}

// const moves = [];
// function clickmays(event) {
//     const move = {
//         x: event.x - circleBoundaries.width/2 + 'px',
//         y: event.y - circleBoundaries.height/2 + 'px'
//     }
//     moves.unshift(move);

// }
// setInterval(() => {
//     if(moves.length > 0) {
//         circle.style.left =  moves[moves.length -1].x;
//         circle.style.top =  moves[moves.length -1].y;
//         moves.pop()
//     }
// }, 1000)
