import Route from '@ember/routing/route';
import RSVP from 'rsvp'

export default Route.extend({
  model () {
    return RSVP.Promise.resolve({})
  },
  actions: {
    generateExample (examplePojo) {
      const example = this.get('store').createRecord('example', examplePojo)
      return example.save()
    }
  }
})
