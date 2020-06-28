
async function RandomQuotes(cb) {
    let response = await fetch('src/qoutes.json')
    let quotes = await response.json()
    await cb(quotes)
}

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