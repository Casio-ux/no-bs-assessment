let counter = 0 
const button = document.querySelector(".btn");
 button.addEventListener ('click', () => {
     console.log(" first button click");
});
 button.addEventListener ('click', () => {
     console.log(" second button click");
});

// text content 
let text = document.getElementById("demo").textContent;


function chetoclicker()
{
    counter=counter+1
    document.getElementById("button").textContent = counter;

}
document.getElementById('button')
