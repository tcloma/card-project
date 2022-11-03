<script lang="ts">
   import { onMount } from 'svelte'
   import { drawCard, getNewDeck } from './api/cardsApi'
   import Card from './lib/Card.svelte'

   let deck
   let hand = []

   onMount(async () => {
      deck = await getNewDeck()
      console.log(deck)
   })

   const handleDrawClick = async () => {
      let response = await drawCard(deck.deck_id)
      hand.push(response.cards[0])
      hand = hand
      console.log(hand)
   }
</script>

<main
   class="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white gap-4"
>
   <h1 class="text-5xl font-bold">Card Project</h1>
   <button
      class="py-2 px-4 bg-white text-black rounded-md"
      on:click={handleDrawClick}
   >
      Draw Card
   </button>
   <div
      class="w-full bg-green-600 min-h-[80vh] h-fit flex flex-row gap-4 flex-wrap p-4"
   >
      {#each hand as card}
         <Card cardData={card} />
      {/each}
   </div>
</main>
