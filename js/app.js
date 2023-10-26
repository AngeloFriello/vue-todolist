const { createApp } = Vue

createApp({
    data(){
        return{
            errore: '',
            newTextTodo: '',
            isActive: true,
            hasError: false,
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: true
                }
            ],
        }
    },

    methods:{
        removeTodo(todoIndex){
            this.todos.splice(todoIndex,1)
        },
        addTodo(){
            if(this.newTextTodo.length >= 5){
                let newTodo = {text: this.newTextTodo, done: false}
                newTodo = this.todos.unshift(newTodo)
                this.errore = ''
            }else{
                this.errore = 'devi inserire almeno 5 caratteri'
            }

        },
        changeBoolean(todoIndex){
            if(this.todos[todoIndex].done === true){
                this.todos[todoIndex].done = false
            } else {
                this.todos[todoIndex].done = true
            }

            // this.todos[todoIndex].done === true ? this.todos[todoIndex].done = false :this.todos[todoIndex].done = true;

            // this.todos[todoIndex].done = !this.todos[todoIndex].done;
        },
    },

    mounted(){
        console.log(this.todos)
        let lengthTodo = this.newTextTodo.length
    },
}).mount('#app');