<script>
  import RatingRow from "./components/RatingRow.svelte";
  import SkullRating from "./components/SkullRating.svelte";
  import LightningBoltRow from "./components/LightningBoltRow.svelte";
  import EyeRating from "./components/EyeRating.svelte";
  import { enhance} from '$app/forms';

  export let monster = {
    name: 'Goblin',
    rating: 1,
    description: 'A small, green, ugly creature',
    video: '',
    feature: 'A feature',
    feedsOn: 'Feeds on',
    funnyFact: 'A funny fact',
    tale: undefined,

  };
  export let hearts = 0;

</script>
<div class="p-2 border-4 border-teal-400 rounded-lg p-4" id={monster.name}>
  <h3 class="font-semibold text-4xl text-center my-2 font-amatic underline">
    {monster.name}
  </h3>
  <div class="text-center text-gray-500 py-3">
    {monster.description}
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 ">
    <div >
      <video controls>
        <source src={monster.video} type="video/mp4">
      </video>

    </div>
    <div class="p-6 flex flex-col space-y-2 rounded-xl">
      <RatingRow key="Danger Rating">
        <EyeRating skulls={monster.rating} />
      </RatingRow>
      <RatingRow key="Distinguishing Feature">
        {monster.feature}
      </RatingRow>
      <RatingRow key="Feeds On">{monster.feedsOn}</RatingRow>
      <RatingRow key="Funny Fact">{monster.funnyFact}</RatingRow>
      {#if monster.powerRating}
      <RatingRow key="Power Rating">
        <LightningBoltRow rating={monster.powerRating} />
      </RatingRow>
      {/if}
      {#if monster.tale}
      <RatingRow key="Tale">{monster.tale}</RatingRow>
        {/if}
    </div>
  </div>
  <div class="flex space-x-2">
    <div>
      <form method="POST" use:enhance>
        <input name="monster" value={monster.name} type="hidden">
        <button class="bg-red-300 p-2 rounded-xl border flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
          ({hearts})</button>
      </form>
    </div>
    <div>
      <form method="POST" use:enhance>
        <input name="monster" value={monster.name} type="hidden">
        <button class="bg-red-300 p-2 rounded-xl border flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
          ({hearts})</button>
      </form>
    </div>
  </div>
</div>
