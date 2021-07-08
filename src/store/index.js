import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../service/index' 
import router from '../router/routes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        auth: {
            isAuthenticated: true
        },
        accountLogin: {
            email: '',
            password: ''
        },
        token: null,
        users: []
    },
    mutations: {
        CHECK_ACCOUNT_INCORRECT(state) {
            state.auth.isAuthenticated = false
        },
        CHECK_ACCOUNT_CORRECT(state) {
            state.auth.isAuthenticated = true
        },
        GET_TOKEN(state, token) {
            state.token = token
        },
        GET_EMAIL(state, email) {
            state.accountLogin.email = email
        },
        GET_ALL_USERS(state, users) {
            state.users = users
        }
    },
    actions: {
        async login({commit}, accountLogin) {
            try {
                var jsonRes = await auth.login(accountLogin)
                console.log(jsonRes)
                commit('GET_TOKEN', jsonRes.data.token)
                commit('GET_EMAIL', jsonRes.data.email) 
                router.push('/chat')
                commit('CHECK_ACCOUNT_CORRECT')
            } catch (error) {
                commit('CHECK_ACCOUNT_INCORRECT')
                console.log(error)
            }
        },
        async getAllUsers({commit}) {
            try {
                var jsonRes = await auth.getAllUsers()
                console.log(jsonRes)
                commit('GET_ALL_USERS')
                console.log(this.state.users)
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default store