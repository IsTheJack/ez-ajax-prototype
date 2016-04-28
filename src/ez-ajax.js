// XMLHttpRequest and Promises
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const Promise = require('promise');

const ezAjax = (...args) => {
  const requestStatus = {
    NOT_INITIALIZED: 0,
    CONNECTED: 1,
    REQUEST_RECEIVED: 2,
    PROCESSING: 3,
    DONE: 4,
  };

  // Geting data
  if (Object.prototype.toString.call(args[0]) === '[object Object]') {
    console.log('ENTROU NO OBJETO');
    var {method, uri, headers, data} = args[0];
  } else {
    console.log('ENTROU NA ARRAY');
    console.log(args);
    var [method, uri, data] = args;
  }

  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, uri, true);

    if (headers) {
      Object.keys(headers).forEach(key => { ajax.setRequestHeader(key, headers[key]); });
    }

    ajax.onreadystatechange = () => {
      if(ajax.readyState === requestStatus.DONE) {
        if(ajax.status >= 200 && ajax.status <= 300) {
          const responseText = String(ajax.responseText);
          const wantJson = !!headers.Accept.match(/json/i);
          console.log(headers.Accept);
          console.log("Quer json? " + wantJson);
          resolve(wantJson ? JSON.parse(responseText) : responseText);
        } else {
          reject(ajax.status);
        }
      }
    };

    ajax.send();
 });
};

module.exports = ezAjax;
