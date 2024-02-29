const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [],
            newTask: '',
            endpoint: 'http://localhost/php-todo-list-json/backend/api/',
        }
    },
    methods: {
        fetchTasks() {

            axios.get( this.endpoint + 'get-tasks.php' ).then((res) => {
                this.tasks = res.data;
            })

        },
    },
    mounted() {
        this.fetchTasks();
    },
});

app.mount('#app');