<script>
    import RatingRow from "./RatingRow.svelte";
    import SkullRating from "./SkullRating.svelte";
    export let monster = {
        name: 'Goblin',
        colours: "red",
        radar: 10,
        dangerRating: 5,
        description: 'A small, green, ugly creature',
        speed: 4,
        poisonous: "yes",
        feedsOn: "anything",
        powerRating: 4,
        fossilsDiscovered: "Sometime",
        funnyFact: "They are very smelly",
        video: '',
    };

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
                <SkullRating skulls={monster.dangerRating} />
            </RatingRow>
            <RatingRow key="Colours Feature">
                {monster.colours}
            </RatingRow>
            <RatingRow key="Radar">{monster.radar}</RatingRow>
            <RatingRow key="Power">{monster.powerRating}</RatingRow>
            <RatingRow key="Speed">{monster.speed}</RatingRow>
            <RatingRow key="Feeds On">{monster.feedsOn}</RatingRow>
            <RatingRow key="Fossils Discovered">{monster.fossilsDiscovered}</RatingRow>
            <RatingRow key="Poisonous">{monster.poisonous}</RatingRow>
            <RatingRow key="Funny Fact">{monster.funnyFact}</RatingRow>
        </div>
    </div>
</div>
