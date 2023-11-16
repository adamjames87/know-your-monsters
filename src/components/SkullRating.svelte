<script>
  export let skulls=1
</script>
<div class="flex flex-row">
  {#if skulls > 20}
    <div>{skulls}</div>
    {:else }
  {#each Array(skulls) as _, i}
    <svg class="w-6 h-6 text-gray-600  hover:animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>
  {/each}
    {/if}
</div>
