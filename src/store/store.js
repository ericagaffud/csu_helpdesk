import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        name: '',
        email: '',
        college: '',
        coyear: '',
        phone: '',
        selectProblem: '',
        systemSub: '',
        academicSub: '',
        responseSub: '',
        description: '' 
    },

    mutations:{
      homeStore(state, payload){
        state.name = payload.name
        state.email = payload.email
        state.college = payload.college
        state.coyear = payload.coyear
        state.phone = payload.phone
        state.selectProblem = payload.selectProblem
      },

      systemStore(state, payload){
        state.systemSub = payload.systemSub
      },

      academicStore(state, payload){
        state.academicSub = payload.academicSub
      },

      responseStore(state, payload){
        state.responseSub = payload.responseSub
      },

      subStore(state, payload){
        state.description = payload.description
      }
      
    }
  });