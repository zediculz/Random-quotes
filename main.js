//async function to fetch quotes and return a callback
async function RandomQuotes(cb) {
    let response = await fetch('qoutes.json')
    let quotes = await response.json()
    await cb(quotes)
}

//generate quote on first load
RandomQuotes((quotes) => {
    let rand = Math.floor(Math.random() * quotes.length)
    let quote = quotes[rand]
    let wrap = document.getElementById('app')
    let template = `
        <div class="card">
            <h3>${quote.quote} -<span>${quote.author}</span></h3>
        </div>
    `
    wrap.innerHTML = template
})

//generate quote on click
const btn = document.getElementById('btn')
btn.onclick = () => {
    RandomQuotes((quotes) => {
        let rand = Math.floor(Math.random() * quotes.length)
        let quote = quotes[rand]
        let wrap = document.getElementById('app')
        let template = `
        <div class="card">
            <h3>${quote.quote} -<span>${quote.author}</span></h3>
        </div>
    `
        wrap.innerHTML = template
    })
}
