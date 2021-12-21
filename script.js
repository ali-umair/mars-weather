fetch(
'https://api.nasa.gov/insight_weather/?api_key=nfU3RVhrltBaoTez42hpvcMK2wkCCjk4cNf6fLIL&feedtype=json&ver=1.0',
).then(response => response.json())
.then(data => {

    console.log(data['1081'].AT.av);
    const at = data['1081'].AT.av;
    // console.log(template);
    const template = document.querySelector('#template')
    const div = document.querySelector('body')
    // console.log(template.textContent);
    let resulthtml = template.innerHTML
    let result = swig.compile(resulthtml);
    // console.log(result({ data: data }));
    div.innerHTML = result({data: data});
})
.catch(err => console.log(err));






// const users = [
//     {
//         name: 'Sandeep',
//         age: 24,
//         address: 'jabalpur MP'
//     },
//     {
//         name: 'Sandeep',
//         age: 24,
//         address: 'jabalpur MP'
//     },
//     {
//         name: 'Sandeep',
//         age: 26,
//         address: 'jabalpur MP'
//     },
//     {
//         name: 'Sandeep',
//         age: 25,
//         address: 'jabalpur MP'
//     },
//     {
//         name: 'Harsh',
//         age: 27,
//         address: 'jabalpur MP'
//     }
//     ,
//     {
//         name: 'Virendra',
//         age: 30,
//         address: 'jabalpur MP'
//     }
//     ,
//     {
//         name: 'Harsh',
//         age: 23,
//         address: 'jabalpur MP'
//     }
//     ,
//     {
//         name: 'Virendra',
//         age: 23,
//         address: 'jabalpur MP'
//     }


// ]
// window.onload = () => {
//     console.log("Window is loaded...")

//     const info = document.querySelector("#info")

//     const templateElement = document.querySelector("#template")
//     const templateHtml = templateElement.innerHTML
//     console.log({ templateHtml, swig })
//     const template = swig.compile(templateHtml)
//     const html = template({ persons: users })
//     console.log(html);


//     info.innerHTML = html

//     console.log(html);

    // const name = document.createElement("h1")
    // const age = document.createElement("h2")
    // const address = document.createElement("p")

    // name.innerHTML = user.name
    // age.innerHTML = user.age
    // address.innerHTML = user.address

    // const info = document.querySelector("#info")
    // info.appendChild(name)
    // info.appendChild(age)
    // info.appendChild(address)

// }