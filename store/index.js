import axios from "~/plugins/axios";

export const state = () => ({
	items: []
})
export const mutations = {
	setItems(state, items) {
		state.items =  items
	}
}
export const actions = {
	async load_items( {commit} , url) {
		const { data } = await axios.get(url)
		commit('setItems', data)
	}
}