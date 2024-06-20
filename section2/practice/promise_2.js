function background(color) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res((document.body.style.backgroundColor = color));
        }, 1000);
    });
}

async function backgroundColor() {
    try {
        await background("red");
        await background("orange");
        await background("yellow");
        await background("green");
    } catch (err) {
        console.log(err);
    }
}

backgroundColor();

// function delay(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(res, ms);
//     });
// }

// async function changeBackground() {
//     await delay(1000);
//     document.body.style.backgroundColor = "red";
//     await delay(1000);
//     document.body.style.backgroundColor = "orange";
//     await delay(1000);
//     document.body.style.backgroundColor = "yellow";
//     await delay(1000);
//     document.body.style.backgroundColor = "green";
// }

// changeBackground();
