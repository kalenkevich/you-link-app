export default {
  makeXhrRequest(method, url, data, options, done, error) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', options && options.contentType || 'application/json');

    xhr.onload = function () {
      try {
        let responseJSON = JSON.parse(xhr.response);

        done(responseJSON);
      } catch (e) {
        error(null);
      }
    };
    xhr.onerror = () => error(null);

    xhr.send(data);
  },

  sendRequest(method, url, data, options) {
    return new Promise((resolve, reject) => this.makeXhrRequest(method, url, data, options, resolve, reject));
  }
};
