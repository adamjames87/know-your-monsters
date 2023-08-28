<script>
  import RatingRow from "./components/RatingRow.svelte";
  import SkullRating from "./components/SkullRating.svelte";
  import LightningBoltRow from "./components/LightningBoltRow.svelte";
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

</script>
<div class="p-2 border-4 border-teal-400 rounded-lg p-4">
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
        <SkullRating skulls={monster.rating} />
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
</div>
