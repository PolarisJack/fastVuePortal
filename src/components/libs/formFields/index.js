export default vue => {
  require('./fields').default(vue);
  vue.component('formfields',require('./index.vue').default)
}
