import ApiService from '~/api/api.service';
const api = new ApiService();

export const state =  {
    userId : 0,
}

export const mutations = {
    abstractSetter(state, param) {
        state[param.field] = param.data
    },
}

export const actions = {
    async abstractFetch ({ commit }, param) {
        const funcName = (param.fn) ? param.fn : 'abstractSetter';
        const data  = await api.get(param.url);
        const field = param.field;
        commit(funcName, { data, field });
    },
}

export const getters = {

}
