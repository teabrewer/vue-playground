import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todos: [],
    },
    getters: {},
    mutations: {},
    actions: {
        fetchTodos: () => axios.get('http://35.207.34.33:2403/todos'),
        setTodo: ({}, payload) => axios.post('http://35.207.34.33:2403/todos', payload),
        deleteTodo: ({}, id) => axios.delete('http://35.207.34.33:2403/todos', id),
        updateTodo: ({}, payload) => axios.put('http://35.207.34.33:2403/todos', payload),
    },
});
