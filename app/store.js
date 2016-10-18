import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

Vue
.use(VueResource)
.use(Vuex);

var ListResource = Vue.resource('http://ac-onsg2j7w.clouddn.com/33e911a97630d768.json')
var getList = ({commit}) => {
	commit('REQUEST_LIST');
	ListResource.get({}).then(response => {
		const json = response.data
		commit('GET_LIST', {
			items: json['What can i do']['List']
		});
	}, response => {
		commit('GET_LIST', {
            items: []
        })
	});
}

var state = {
    isFetching: false,
    items: [],
}

var mutations = {
	REQUEST_LIST (state) {
		state.isFetching = true
	},
	GET_LIST (state, action) {
		state.isFetching = false;
		state.items = action.items
	}
};

var actions = {
    getList
};

var getters = {
    isFetching: state => state.isFetching,
    items: state => state.items
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;