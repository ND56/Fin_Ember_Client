import Route from '@ember/routing/route'
// ran npm install --save-dev ember-browserify
// apparently you need to use ember-browserify to include node packages
import toast from 'npm:jquery-toast-plugin'

export default Route.extend({
  model (params) {
    // console.log('params is', params)
    // an object with list_id and whatever came after the slash
    return this.get('store').findRecord('example', params.list_id)
  },
  actions: {
    deleteExample (params) {
      // const example = this.get('store').findRecord('example', params.list_id)
      // console.log(params)
      params.destroyRecord()
        .then(() => this.transitionTo('view-examples'))
    },
    updateExample (example) {
      example.save()
        .then(() => $.toast('Example successfully edited!'))
      // this.toast.success('Text')
    }
  }
})
