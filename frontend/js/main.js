const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [],
            newTask: '',
            endpoint: '../../backend/api/',
        }
    },
    methods: {
        fetchTasks() {

            axios.get( this.endpoint + 'get-tasks.php' ).then((res) => {
                this.tasks = res.data;
            });

        },
        addTask() {

            const data =  {
                newTask: this.newTask,
            };

            axios.post( this.endpoint + 'add-task.php', data, 
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((res) => {
                console.log(res);
            })

        },
    },
    mounted() {
        this.fetchTasks();
    },
});

app.mount('#app');