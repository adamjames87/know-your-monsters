<script>
  import MonsterCard from "../MonsterCard.svelte";
  const monsters = [
    {
      name: 'Blarg',
      rating: 5,
      description: 'A big purple monster from the last kids on Earth',
      video: '/videos/blarg.mp4',
      feature: '40 Feet Tall',
      feedsOn: 'Discarded buildings',
      funnyFact: 'He does purple poos'
    },
    {
      name: 'Kulipari Frog',
      rating: 4,
      description: 'Fights against the forces of Pico',
      video: '/videos/frog.mp4',
      feature: 'Long extractable arms',
      feedsOn: 'Members of the Pico army',
      funnyFact: 'Sometimes his poo looks like the solidiers of Pico\'s army'
    },
    {
      name: 'Evil Santa',
      rating: 3,
      description: 'A terrifying evil santa',
      video: '/videos/santa.mp4',
      feature: 'Huge gaping jaws',
      feedsOn: 'Lovely presents',
      funnyFact: 'His poos are wrapped in wrapping paper'
    },
    {
      name: 'Hug Slug',
      rating: 2,
      description: 'A gentle hugging slug. Of course',
      video: '/videos/hugslug.mp4',
      feature: 'When he sees something he cannot stop hugging it',
      feedsOn: 'The warmth of the thing he is hugging',
      funnyFact: 'His poos come alive, turning into other slimy slugs'
    },
    {
      name: 'Alattin',
      rating: 3,
      description: 'A water monster that shoots out love to control people',
      video: '/videos/alattin.mp4',
      feature: 'Could turn into a giant wave',
      feedsOn: 'People who are immune to its power',
      funnyFact: 'Turned from a handsome prince into a giant sea monster'
    },
    {
      name: 'Hug Slug Supercharged',
      rating: 4,
      description: 'A gentle hugging slug. Supercharged of course',
      video: '/videos/hugslugsuper.mp4',
      feature: 'Can activate a super-powerful team of slime beasts',
      feedsOn: 'Orginal Hug Slug',
      funnyFact: 'Loves to overthrow the original Hug Slug'
    },
    {
      name: 'Snuggle Chops',
      rating: 4,
      description: 'Many-tusked monster',
      video: '/videos/snugglechops.mp4',
      feature: 'Loves to nuzzle but his nuzzling is uncomfortable',
      feedsOn: 'Cushions. Just cushions',
      funnyFact: 'Once he ate a cushion with a picture of a poo on and then threw up'
    },
    {
      name: 'The Nose King',
      rating: 3,
      description: 'A once lovely nose inhabited by an evil spirit',
      video: '/videos/noseking.mp4',
      feature: 'Can turn back into a nose whenever he wants',
      feedsOn: 'The smell of poop',
      funnyFact: 'His sneezes can blow down a house'
    },
    {
      name: 'Gobble-In',
      rating: 5,
      description: 'A horrifying goblin, crossed with a horrifying spider',
      video: '/videos/goblin.mp4',
      feature: 'Long spidery arms',
      feedsOn: 'Other creatures from its dungeon',
      funnyFact: 'Its poos have scary faces on'
    },
    {
      name: 'Old Chomper Jack',
      rating: 6,
      description: 'A big squid turned into a monster by a Blarg',
      video: '/videos/oldchomperjack.mp4',
      feature: 'Can shoot pink fire from its mouths',
      feedsOn: 'Fear',
      funnyFact: 'Since this creature is so dangerous when it does a poo it turns back into a regular old squid'
    },
    {
      name: 'Eye of Flames',
      rating: 4,
      description: 'One speck of power turned into a giant bone-crushing beast',
      video: '/videos/eyofflames.mp4',
      feature: 'Powerful of king of the beasts',
      feedsOn: 'Misbehaving army soldiers',
      funnyFact: 'Its poos are so powerful they can take out 1000 men'
    },
    {
      name: 'Skull Serpent',
      rating: 4,
      description: 'A giant snake with a skull for a head',
      video: '/videos/skullserpent.mp4',
      feature: 'Giant skull for a head',
      feedsOn: 'Even more giant creatures to get even bigger skulls',
      funnyFact: 'Its poos out of the eye sockets of its skull'
    },
    {
      name: 'Constellation of Terror',
      rating: 6,
      description: 'A constellation of stars for in its shadows lurks the greatest enemy of the beast king',
      video: '/videos/constellation.mp4',
      feature: 'Can put on a powerful light show',
      feedsOn: 'Stars',
      funnyFact: 'Its poos are so powerful they can destroy a planet'
    },
    {
      name: 'Paraloticus',
      description: 'A fallen parrot now rises filled with magic',
      rating: 3,
      video: '/videos/paraloticus.mp4',
      feature: 'Powerful beam eyes',
      feedsOn: 'Great power',
      funnyFact: 'Its poos are so powerful they can turn a person into a parrot'
    },
    {
      name: 'Invisible Beast',
      rating: 7,
      description: 'This thing may look like nothing, but things are not what they seem.',
      video: '/videos/invisiblebeast.mp4',
      feature: 'Can turn invisible',
      feedsOn: 'Nobody knows. Whatever it touches disappears',
      funnyFact: 'Some people believe that the invisible beast was a giant monstrous poo'
    },
    {
      name: 'Night Light Terrors',
      rating: 4,
      description: 'A group of monsters that come out at night',
      video: '/videos/nightlightterrors.mp4',
      feature: 'Got hit by the poos of the great constellation of terror and got turned into these great beats. Their powers include flying.',
      feedsOn: 'Power and light',
      funnyFact: 'They were turned into statues made of poo by the great beast king'
    },
    {
      name: 'Light of the Undergrowth',
      rating: 4,
      description: 'Absolutely cuteable',
      video: '/videos/lightofundergrowth.mp4',
      feature: 'Can hug you to death',
      feedsOn: 'Plants mostly',
      funnyFact: 'Poos out trees and undergrowth'
    },
    {
      name: 'Flamezilla',
      rating: 4,
      description: 'A giant spike covered flame creature',
      video: '/videos/flamezilla.mp4',
      feature: 'Beastly servant to the beast king, Eye of Flames',
      feedsOn: 'Fire',
      funnyFact: 'The brother of Godzilla and other related monsters'
    },
    {
      name: 'The Ice King',
      rating: 3,
      description: 'A giant four-armed snowman',
      video: '/videos/iceking.mp4',
      feature: 'Biggest ice creature in the land',
      feedsOn: 'Stars',
      funnyFact: 'This creature is not funny. At all.'
    },
    {
      name: 'Lemschkin',
      rating: 3,
      description: 'The Lemschkin\'s skin getting light, was created by using capacity going down',
      video: '/videos/lemschkin.mp4',
      feature: 'Total bummer to have around. (Bummer means good)',
      feedsOn: 'Hug Slug relatives',
      funnyFact: 'The Lemschkin, like Ice King, is 0 funny'
    },
    {
      name: 'Goat-e-Bum',
      rating: 10,
      description: 'The Goat-e-Bum is a goat-like 3-eyed monster',
      video: '/videos/goatebum.mp4',
      feature: 'Poisonous horns',
      feedsOn: 'Total bummers',
      funnyFact: 'Total bummers are actually good (not in real life)'
    },
    {
      name: 'Wormungulous',
      rating: 12,
      description: 'One of the total bummer family.',
      video: '/videos/wormungulous.mp4',
      feature: 'Enormous worm-like mouth',
      feedsOn: 'Other wormungulouses',
      funnyFact: 'One of its favourite foods is its own poo'
    },
    {
      name: 'Know-em-all',
      rating: 100,
      description: 'Part of the entire system of Know Your Monsters',
      video: '/videos/knowemall.mp4',
      feature: 'Combination of all the monsters',
      feedsOn: 'Everything',
      funnyFact: 'Most of these monsters funny facts are about poo'
    },
    {
      name: 'Eye-Ballicus',
      rating: 20,
      description: 'Monster made of eyeballs',
      video: '/videos/eyeguy.mp4',
      feature: 'Bigger than cities',
      feedsOn: 'Pudgy Pig (see below)',
      funnyFact: 'They eyeball monster is featured in beast fight war videos (see later in Know Your Monsters)'
    },
  ]
</script>

<h1 class="font-bold px-6 mt-6 text-6xl text-center text-purple-900 font-amatic
">Welcome to Know your Monsters</h1>
<p class="text-gray-500 text-center mb-4 mt-2 text-sm mb-2">A collection of monsters curated by world famous monster hunter Henry James</p>

<div class="grid grid-cols-1 gap-12">
{#each monsters as monster}
    <MonsterCard {monster} />
  {/each}
</div>
<div class="mt-12 border-t border-gray-200 pt-8 ">
  <p class="text-base text-gray-400 xl:text-center">&copy; 2022 Dad &amp; Dopes Inc. All rights reserved.</p>
</div>

