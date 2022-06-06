const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:3000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(languages => {
            const language = `<h2>` + languages.language + `</h2>`
            feedDisplay.insertAdjacentHTML("beforeend", language)
        })
    })
    .catch(err => console.log(err))