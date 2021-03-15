import ApiService from '~/api/api.service';
const api = new ApiService();

export const state =  {
    userId   : 22,
    userInfo : {},
    selectedUser : {},
    users : [],
}

export const mutations = {

  useSetting(state, param) {
    state[param.field] = param.data
  },

  setUsers(state, data) {
       state.users = data
  },

}

export const actions = {

  async useFetching ({ commit }, param) {
      const funcName = (param.fn) ? param.fn : 'useSetting';
      const data  = await api.get(param.url);
      const field = param.field;
      commit(funcName, { data, field });
  },

  async fetchUsers ({ dispatch, commit }, param = null) {
       const url   = '/get/users';
       const field = 'users';
       dispatch('useFetching', { url, field });
  },

}

export const getters = {

  getUsers (state) {
      return state.users;
  },

  useGetting : state => fieldName => {
     return state[fieldName];
  },
  

}
