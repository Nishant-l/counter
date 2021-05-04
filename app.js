const Counter={
    count: 0,
    element:'#app',
    init:function(){
       this.cashDom();
       this.addListeners();
       this.render(); 
       this.count=0;
    },
    cashDom:function(){
        this.rootElement=document.querySelector(this.element);
        this.increaseButton=this.rootElement.querySelector('.increment');
        this.decrementButton=this.rootElement.querySelector('.decr');
        this.display=this.rootElement.querySelector('.display');
    },
    addListeners:function(){
        this.increaseButton.addEventListener('click',this.inc.bind(this));
        this.decrementButton.addEventListener('click',this.dec.bind(this));
    },
    render:function(){
        this.display.textContent=this.count;
    },
    inc:function(){
        this.count+=1;
        this.render();
    },
    dec:function(){
        this.count-=1;
        this.render();
    }
};
const secondCounter=Object.create(Counter);
Counter.init();
secondCounter.element='#secCou';
secondCounter.init();
// // veriables
// let count=0;
// const element='#app';

// // Cashing and retreving element from DOM
// const rootElement=document.querySelector('#app');
// const increaseButton=document.querySelector('#increment');
// const decrementButton=document.querySelector('#decr');
// const display=document.querySelector('#display');

// // setup
// increaseButton.addEventListener('click',inc);
// decrementButton.addEventListener('click',dec);
// render();
// //functions
// function inc(){
//     count+=1;
//     render();
// }
// function dec(){
//     count-=1;
//     render();
// }
// function render(){
//     display.textContent=count;
// }