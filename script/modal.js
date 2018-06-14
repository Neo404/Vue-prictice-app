Vue.component('modal', {
  template: '#modal-template'
})

// クリックでモーダルコンポーネントの非表示を変更
// デフォルトはオフ
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})
