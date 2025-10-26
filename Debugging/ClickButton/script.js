/* function createButton() {
    const buttons = []

    for(var i = 1; i <= 3; i++) {
        buttons.push(function () {
            console.log(`Button ${i} clicked`);
        });
    }

    return buttons;
} 
const [btn1, btn2, btn3] = createButton(); */


// Correct form
/* function createButton() {
    const buttons = []

    for(let i = 1; i <= 3; i++) {
        buttons.push(function () {
            console.log(`Button ${i} clicked`);
        });
    }

    return buttons;
}
const [btn1, btn2, btn3] = createButton(); */

btn1(); // ?  Button 4 clicked
btn2(); // ?  Button 4 clicked
btn3(); // ?  Button 4 clicked