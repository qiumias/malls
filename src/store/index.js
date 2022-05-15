import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            state.cartList.push(payload)
                // let oldProduct = state.carTlist.find(function(item) {
                //     return item.iid === payload.iid
                // })

            // // 判断oldProduct
            // if (oldProduct) {
            //     oldProduct.count += 1
            // } else {
            //     payload.count = 1
            //     state.cartList.push(payload)
            // }
        }
    }
})

export default store