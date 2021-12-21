fetch(
'https://api.nasa.gov/insight_weather/?api_key=nfU3RVhrltBaoTez42hpvcMK2wkCCjk4cNf6fLIL&feedtype=json&ver=1.0',
).then(response => response.json())
.then(data => console.log(data['1081']))
.catch(err => console.log(err));