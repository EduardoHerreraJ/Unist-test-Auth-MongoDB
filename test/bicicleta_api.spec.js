const axios = require('axios')
const assert = require('assert')
const BASE_URL = 'http://localhost:3000/api/bicicletas/'


describe('Bicicletas API', ()=> {
    describe('GET-Bicis /', ()=>{
        it('Status-code: 200 OK', () =>{
            axios.get(BASE_URL).then(function(response) {
                const res = JSON.parse(response.data)
                assert.equal(response.status, 200)
                const bikeCount = res.bicicletas.length
                assert.equal(bikeCount, 0)
            }).catch(function(err) {
                //console.log(err)
            })
        })
    })

    describe('POST-Bicis', ()=>{
        it('Status-code: 200 OK', ()=> {
            const bici = {
                code: 3,
                color: 'Blue',
                modelo: 'Sanchez',
                lat: 19.284368350950857,
                lon: -99.1363553306844
            }
            axios.post(BASE_URL+'create', bici).then(function(response) {
                assert.equal(response.status, 200)
            }).catch(function(err) {})
        })
    })
})









    


