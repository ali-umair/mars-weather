fetch(
'https://api.nasa.gov/insight_weather/?api_key=nfU3RVhrltBaoTez42hpvcMK2wkCCjk4cNf6fLIL&feedtype=json&ver=1.0',
).then(response => response.json())
.then(data => {
    const template = document.querySelector('#template')
    const div = document.querySelector('body')
    // console.log(template.textContent);
    let resulthtml = template.textContent
    let result = swig.compile(resulthtml);
    // console.log(result({ data: data }));
    div.innerHTML = result({data: data});
})
.catch(err => console.log(err));