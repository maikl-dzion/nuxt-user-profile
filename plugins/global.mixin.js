import Vue from 'vue'

import ApiService from '~/api/api.service';
const api = new ApiService();

Vue.mixin({
  methods: {

      async send (url, method = 'get', data = null) {

          const response = await api.send(url, data, method);

          // const _url = this.apiUrl + url
          // const token = this.getToken()
          // axios.defaults.headers[HEADER_JWT_TOKEN_NAME] = token
          // const response = await axios[method](_url, data)

          return response
      },

      getStore(namespace = null, field = null) {
            let state = this.$store.state;
            if(!namespace && !field)
               return state;

            if(namespace && !field) {
                if(state[namespace])
                  return state[namespace]
                return state;
            }

            if(field && !namespace) {
              if(state[field])
                return state[field]
              return state;
            }

            if(namespace && field) {
              if(state[namespace] && state[namespace][field])
                return state[namespace][field]
              return state;
            }

            return state;
      },

      setInputValue(model, resp) {
          const name  = resp.name;
          const value = resp.value;
          this[model][name] = value;
      }

  }, // --- Methods
})
