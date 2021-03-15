import ApiService from '~/api/api.service';
const api = new ApiService();

export const state =  {
    tasks : []
}

export const mutations = {

  setTasks(state, data) {
    state.tasks = data
  },

}

export const actions = {

  async fetchTasks ({ commit }, param = null) {
    const data = await api.get('/task-board/list');
    commit('setTasks', data)
  },

}

export const getters = {

  getTasks (state) {
    return state.tasks;
  }

}
