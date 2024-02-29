const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tasks: [],
            newTask: '',
        }
    },
});

app.mount('#app');