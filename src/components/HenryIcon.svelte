<script>
    export let rating=1
</script>
<div class="flex flex-row">
    {#if rating > 20}
        <div>{rating}</div>
    {:else }
        {#each Array(rating) as _, i}
            <img src="henry-icon.png" class="w-6 h-6 text-gray-600  hover:animate-spin" alt="monster-icon">
        {/each}
    {/if}
</div>
