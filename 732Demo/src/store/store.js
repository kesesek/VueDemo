import { reactive } from 'vue';

export const store = reactive({
    isUserLogin: false,
    isModalOpen: false,
    username: ''
})