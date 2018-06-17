Vue.component('select2', {
  props: ['options', 'value'],
  template: '#select2-template',
  mounted: function(){
    var vm = this
    $(this.$el)
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      .on('change', function () {
        vm.$emit('input', this.value)
      })
  },
  watch: {
    value: function(value){
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options: function(options){
      $(this.$el).empty().select2({ data: options })
    }
  },
  destroyed: function(){
    $(this.$el).off().select2('destroy')
  }
})

var vm = new Vue({
  el: "#el",
  template: "#demo-template",
  data: {
    selected: 2,
    options: [
      {id: 1, text: 'Hello'},
      {id: 2, text: "World"},
    ]
  }
})
// select2との連携が出来ていないのであとで導入予定
