<script lang="ts">
   import { onMount } from 'svelte'

   export let cardData

   onMount(() => {
      console.log(cardData)
   })

   const { image, value, suit } = cardData
</script>

<div class="h-44 w-32 bg-white rounded-lg">
   <img src={image} alt={`${value} of ${suit}`} />
</div>
