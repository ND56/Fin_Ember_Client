import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  example: {},
  actions: {
    submitExample () {
      this.sendAction('submitExample', this.get('example'))
      this.set('example', {})
    }
  }
})
