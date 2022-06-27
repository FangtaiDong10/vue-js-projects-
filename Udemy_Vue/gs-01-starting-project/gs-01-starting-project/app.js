
// //just vanilla JavaScript

// const buttonEl= document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal(){
//     const enteredValue = inputEl.value;
//     // create DOM element programming
//     const listItemEl = document.createElement('li'); 
//     // set textContent as input value
//     listItemEl.textContent = enteredValue;

//     listEl.appendChild(listItemEl);
//     // clear the value
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

Vue.createApp({
    // configure this Vue App

    // approperty of data which has a function as a value
    data() {
        return {
            // return object value
            goals: [],
            enteredValue: ""
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    },
}).mount('#app');
