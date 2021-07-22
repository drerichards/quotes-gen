// to persist
let apiQuotes = []

// show new quote
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote)
}

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