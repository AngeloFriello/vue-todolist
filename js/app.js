const { createApp } = Vue

createApp({
    data(){
        return{
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
            this.todos.splice(todoIndex, 1)
        },
        addTodo(){
            let newTodo = {text: this.newTextTodo, done: false}
            newTodo = this.todos.unshift(newTodo)
            this.newTextTodo = ''
        },
        changeBoolean(todoIndex){
            if(this.todos[todoIndex].done === true){
                this.todos[todoIndex].done = false
            }else if(this.todos[todoIndex].done === false){
                this.todos[todoIndex].done = true
            }
        }
    },

    mounted(){
        console.log(this.todos)
    },
}).mount('#app');