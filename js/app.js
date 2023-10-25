const { createApp } = Vue

createApp({
    data(){
        return{
            isActive: true,
            hasError: false,
            currentIndex: 0,
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
    },

    mounted(){

    },

}).mount('#app');