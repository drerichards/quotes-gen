const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')
const quoteButton = document.getElementById('new-button')
const twitterButton = document.getElementById('twitter-button')


// to persist
let apiQuotes = []

// show new quote
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote')
  quoteText.textContent = quote.text
  quoteAuthor.textContent = !quote.author ? 'Unknown' : quote.author
}

quoteButton.addEventListener('click', newQuote)

// fetch from the api
async function getQuotes() {
  const proxyURL = 'https://quiet-fjord-23740.herokuapp.com/'
  // const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&formnat=json'
  const apiURL = `https://type.fit/api/quotes`

  try {
    const response = await fetch(proxyURL + apiURL)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    console.log(error)
  }
}

getQuotes()