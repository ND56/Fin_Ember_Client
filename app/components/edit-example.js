import Component from '@ember/component'

export default Component.extend({
  actions: {
    editExample () {
      this.sendAction('editExample', this.get('example'))
    }
  }
})
