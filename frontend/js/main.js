const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [],
            newTask: '',
            isInputEmpty: false,
            message: '',
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

            if(!this.newTask) {

                // set the switch variable to true
                this.isInputEmpty = true;
                // show the tag for the "error" message
                this.message = 'error';
                // cancel the message and reset input style after 30sec
                this.cancelMessage();
                // stop everything
                return;

            } else {
                
                // set the switch variable to false
                this.isInputEmpty = false;
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
                // show the tag for the "done" message
                this.message = 'done';
                // cancel the message after 30sec
                this.cancelMessage();

            }

        },
        // cancel the message and reset input style after 15sec
        cancelMessage() {
            setTimeout(() => {
                this.isInputEmpty = false;
                this.message = '';
            }, 1000 * 15);
        },
        // function to toggle the status of a task
        toggleDone(task,index) {
            // prepare the data to send
            const data = {
                index,
                taskText: task.text,
                taskDone: !task.done
            };
            // call the function to do the axios call to change a task
            this.changeTask(data);
        },
        // function that changes the data of a specific task
        changeTask(data) {

            // axios call POST
            axios.post( this.endpoint + 'change-task.php', data, 
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((res) => {
                // then prints the response in the tasks array
                this.tasks = res.data;
            })

        },
    },
    mounted() {
        this.fetchTasks();
    },
});

app.mount('#app');