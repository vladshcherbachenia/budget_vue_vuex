import Vue from 'vue';

const budgetStore = {
    namespaced: true,
    state: {
        list: {
        }
    },
    getters: {
        listTasks: ({ list }) => Object.values(list),
    },
    mutations: {
        ADD_USER(state, user) {
            Vue.set(state.list, user.id, user);
        },
        DELETE_TASK_BUDGET(state, id) {
            Vue.delete(state.list, id);
        },
        ADD_TASK_BUDGET(state, budget) {
            Vue.set(state.list, budget.id, budget);
        }
    },
    actions: {
        addNewUser({ commit }, user) {
            const newUser = { ...user, id: String(Math.random()) };
            commit('ADD_USER', newUser);
        },
        addTaskBudget({ commit }, budgetNew) {
            const newTaskBudget = { ...budgetNew, id: String(Math.random()) };
            commit('ADD_TASK_BUDGET', newTaskBudget);
        },
        deleteTaskBudget({ commit }, id) {
            commit('DELETE_TASK_BUDGET', id);
        }
    },
}

export default budgetStore;
