import { inject as service } from '@ember/service'
import { computed } from '@ember/object'
import AjaxService from 'ember-ajax/services/ajax'

import ENV from 'Fin_Ember_Client/config/environment'

export default AjaxService.extend({
  host: ENV.apiHost,

  auth: service(),
  // stting up a service to be used ^^ in a file
  headers: computed('auth.credentials.token', {
    get () {
      const headers = {}
      // create header object
      const token = this.get('auth.credentials.token')
      if (token) {
        headers.Authorization = `Token token=${token}`
      }
      // only creating auth header if we have a token
      return headers
    }
  })
})
