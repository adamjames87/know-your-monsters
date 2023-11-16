<script>
  export let rating = 0;
</script>
<div class="flex flex-row">
  {#if rating > 20}
    <div>{rating}</div>
  {:else }
    {#each Array(rating) as _, i}
      <svg class="w-6 h-6 text-yellow-400 fill-current hover:animate-ping" fill="solid" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    {/each}
  {/if}
</div>
