const PORT = 3000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const app = express();
const cors = require('cors')
app.use(cors())

const url = 'https://en.wikipedia.org/wiki/List_of_programming_languages';

app.get('/', function (req, res) { 
})

app.get('/results', (req, res) => {
    axios(url).then(response => {
        const html = response.data
        const links = cheerio.load(html)
        const languages =[]
    
        links('li', html).each(function() { 
            const language = links(this).text()
            const url = links(this).find('a').attr('href')
            languages.push({ 
                language,
                url
            })
        })
       res.json(languages)
    
    }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`Working ${PORT}`))