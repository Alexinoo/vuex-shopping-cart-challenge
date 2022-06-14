
import { createStore } from 'vuex';

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({

    modules : {
        prods : productsModule ,
        cart: cartModule
    },

    state(){
        return {
            isLoggedIn : false ,
        }
    },

    mutations : {  },

    actions : {  } ,

    getters : {  }

})

export default store;