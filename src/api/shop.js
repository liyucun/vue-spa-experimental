import * as Axios from 'axios'

export default {
  getProducts (cb) {
    Axios.get('http://localhost:5000', {withCredentials: true})
      .then(response => {
        cb(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
        ? cb()
        : errorCb()
    }, 100)
  }
}
