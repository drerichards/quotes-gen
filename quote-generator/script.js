// get quote
async function getQuote() {
  const proxyURL = 'https://quiet-fjord-23740.herokuapp.com/'
  const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&formnat=json'

  try {
    const response = await fetch(proxyURL + apiURL)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getQuote()