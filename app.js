// veriables
let count=0;
const element='#app';

// Cashing and retreving element from DOM
const rootElement=document.querySelector('#app');
const increaseButton=document.querySelector('#increment');
const decrementButton=document.querySelector('#decr');
const display=document.querySelector('#display');

// setup
increaseButton.addEventListener('click',inc);
decrementButton.addEventListener('click',dec);
render();
//functions
function inc(){
    count+=1;
    render();
}
function dec(){
    count-=1;
    render();
}
function render(){
    display.textContent=count;
}