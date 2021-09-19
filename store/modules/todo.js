const state = () => ({
    todo_list: [{ "key": 0, "value": "Create add page in TODO App" }, { "key": 1, "value": "Create delete page in TODO App" }]
})

const getters = {
    todoList: state => state.todo_list,
};

const actions = {
    getToDoList({ commit }, payload) {
        commit('SET_TODOLIST', payload);
    },
    deleteToDoList({ commit }, payload) {
        commit('DEL_TODOLIST', payload);
    }
}

const mutations = {
    SET_TODOLIST(state, todo_data) {
        state.todo_list.push(todo_data);
        console.log('added permanently')
    },
    DEL_TODOLIST(state, index) {
        state.todo_list.splice(index, 1);
        console.log('dele permanently')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};