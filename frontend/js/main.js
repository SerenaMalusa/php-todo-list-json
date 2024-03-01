const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [],
            newTask: '',
            endpoint: '../backend/api/',
            // endpoint: 'http://localhost/php-todo-list-json/backend/api/',
        }
    },
    methods: {
        // function that gets the taks from the db
        fetchTasks() {
            //axios call to the get-tasks.php file
            axios.get( this.endpoint + 'get-tasks.php' ).then((res) => {
                // then prints the response in the tasks array
                this.tasks = res.data;
            });

        },
        // function that adds a new task to the db
        addTask() {
            // save the new task text in the data parameter
            const data =  {
                newTask: this.newTask,
            };
            // axios call POST
            axios.post( this.endpoint + 'add-task.php', data, 
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((res) => {
                // then prints the response in the tasks array
                this.tasks = res.data;
            })
            // empty the input 
            this.newTask = '';

        },
    },
    mounted() {
        this.fetchTasks();
    },
});

app.mount('#app');