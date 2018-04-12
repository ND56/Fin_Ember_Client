import Route from '@ember/routing/route'
// testing
// import io from 'npm:socket.io'

export default Route.extend({
  model () {
    const examples = this.get('store').findAll('example')
    console.log(examples)
    return examples
  }
  // socket io(apiUrl)
})
