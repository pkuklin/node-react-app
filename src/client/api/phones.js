import 'whatwg-fetch';

class PhonesApi {
  static getPhones() {
    return fetch('/api/phones', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(response => response.json(), (error) => {
      console.log(error);
    });
  }
}

export default PhonesApi;
