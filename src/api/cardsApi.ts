export const getNewDeck = async () => {
   const response = await fetch('https://deckofcardsapi.com/api/deck/new/')
   return response.json()
}

export const drawCard = async (deckId) => {
   const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)
   return response.json()
}