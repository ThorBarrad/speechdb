const categories = {
  1: '幼儿发音',
  2: '少年口才',
  3: '播音主持',
  4: '职场情商',
}
const infocategories = {
  1:'教育资讯',
  2:'品牌资讯',
}
const state = {
  categories: categories,
  infocategories: infocategories,
}

const mutations = {
  // CHANGE_SETTING: (state, { key, value }) => {
  //   // eslint-disable-next-line no-prototype-builtins
  //   if (state.hasOwnProperty(key)) {
  //     state[key] = value
  //   }
  // }
}

const actions = {
  // changeSetting({ commit }, data) {
  //   commit('CHANGE_SETTING', data)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

