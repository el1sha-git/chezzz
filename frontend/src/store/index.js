import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game_state: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR",
    figure_unicode:{
      r: "&#9814;",
      n: "&#9816;",
      b: "&#9815;",
      q: "&#9813;",
      k: "&#9812;",
      p: "&#9817;",

      R: "&#9820;",
      N: "&#9822;",
      B: "&#9821;",
      Q: "&#9819;",
      K: "&#9818;",
      P: "&#9823;",
    }
  },
  mutations: {

  },
  actions: {},
  modules: {},
});
