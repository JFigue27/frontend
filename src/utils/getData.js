const URL = 'https://google.com';

function getData(URL) {
  fetch(URL)
    .then(data => data.json())
    .then(data => console.log(data));

  return data;
}

module.exports = getData(URL);
