import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  // this is an actual file service
  auth: service(),
  // this is a module; the way we use it is we use it
  // as a service; this is specific to this ember module
  // tho; it's in the docs
  flashMessages: service(),
  // ^^ short hand for: flashMessages: service('flashMessages')
  // ^^ bringing in and storing on this key
  // service is a method that takes what service you want and brings it in

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
        .then(() => this.get('auth').signIn(credentials))
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.get('flashMessages')
            .success('Successfully signed-up! You have also been signed-in.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
