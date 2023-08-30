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
    {
      name: 'Pudgy Pig',
      rating: 3,
      description: 'Giant food-loving pig monster',
      video: '/videos/pudgypig.mp4',
      feature: 'Total bummer, and not in a good way',
      feedsOn: 'Everything',
      funnyFact: 'Cannot stop his appetite',
      powerRating: 1
    },
    {
      name: 'Gunderthor',
      rating: 30,
      description: 'Hi my name is a Gundorthor and I live in the mountains of Kropea, great servant of Pico (see earlier in Know Your Monsters)',
      video: '/videos/gunderthor.mp4',
      feature: 'I asked these authors not to call me a total bummer so they called me a total annoyance instead. Now it is worse.',
      feedsOn: 'Donuts and burgers and stuff like that',
      funnyFact: 'Most dangerous ever to step into know your monsters so far',
      powerRating: 20
    },
    {
      name: 'Mosho Splosh',
      rating: 20,
      description: 'Hello, I\'m MoshoSplosh. Cousin of MoshoGoth the giant tentancled monster. It\'s MoshoSplosh because I live in water unlike my cousin.',
      video: '/videos/moshisplosh.mp4',
      feature: 'Long eyes that come out of my back',
      feedsOn: 'I would like to eat sweets, biscuits and cakes, but since I live in the water there\'s no chance of that',
      funnyFact: 'My author\'s accidentally put my in the wrong way round in the video',
      powerRating: 20
    },
    {
      name: 'Alien Zombies',
      rating: 30,
      description: 'Big, deadly, furry, three-eyed monsters.',
      video: '/videos/alienzombies.mp4',
      feature: 'Mostly come out in the dark or at night',
      feedsOn: 'Alien zombies come out in the middle of the night to feed on your sweets and biscuits',
      funnyFact: 'Alien Zombies are extremely disgusted by lovely music',
      powerRating: 50
    },
      {
          name: 'Purple Oozer',
          rating: 20,
          description: 'My first know your monset in season 3. This one is the one I was talking about in my letters.' +
              'I found it on a beach in Wales. I call it the Purple Oozer because it drips slime from little holes in its head ' +
              'that nobody can see',
          video: '/videos/purple-oozer.mp4',
          feature: 'Seems to like something on the beaches of Wales. I think it is something strange like a reef. Later did I find' +
              'that this creature is attracted to goop on the reef. I had to jump on its head several time to get it to come' +
              'away from the reef',
          feedsOn: 'Strange purple goo on clams dipped in mayonnaise',
          funnyFact: 'About twice the size of a grizzy bear and has bums on the end of its tongue',
          powerRating: 3,
          tale: `Once upon a time when I was having fun at the beach then I heard a wailing sound. I came along and it was
              'something going 'moma, moma, moma'. I had found my next know your monster. I tried to shove it  in my suitcase,
               'grmm grmm' it wouldn't move. I tried again, it wouldn't move. I grabbed it by its tentacles and its skin,
               and tried to pull it into my sack. Still it wouldn't budge. I finally had to do it the hard way. I pulled
               out my sword just as the monster turned and grunted. 'Wwwwaaaaah' it wailed, and thrust its first tentacle
               towards me. I leapt back and threw my suitcase towards the tentance pinning it to the grouns. 'Wwwwwaaaaah' it
               went as  I shoved it into my sack. Then I went home and we had pancakes for lunch. After that I shoved him
               into my ipad and put him on the internet for everyone to see.`
      },
      {
          name: 'Bloody Beasties',
          rating: 30,
          description: `
          Bloody throwing monsters that I accidentally created.
          `,
          video: '/videos/bloody-beasts.mp4',
          feature: 'Made up of little bits of dead monsters',
          feedsOn: 'Literally anything it can find',
          funnyFact: 'I accidentally created the blood monsters by giving one of my inventions too much speed',
          powerRating: 20,
          tale: `Along time ago when I just started making monsters, I made an invention called the Chipper-Up 2000. It was
          designed to  cut up bits of monsters so they could fit on the screen. When I put up the speed up to 100 then it
          accidentally turned the dead monsters into bloody, vicious blood beasts. Luckily blood is dissolved by my super
          fart spray, made from the worst farts ever found. It dissolved the beasts right up, but it did smell really bad, and
          it wasn't wort it because one of the blood beasts managed to run out of the way. I ran desperately for the blood beast but
          it ran faster, I got my sword out but it was no use, when I sliced at it it just went straight through. Just then I
          had an idea. I put the chipper on to an even higher speed, and then put my cat inside... It started to cut up my cat
           and turned the cat into an even more vicious blood beasts. My cat swallowed the other blood beasts
          and went down to the toilet. I managed to flush my cat down the toilet and into the sewers, never to return again.
          Or were they...`
      },
      {
          name: 'Bad Kitty',
          rating: 90,
          description: `
          A hypno-singing cat monster from the sewers
          `,
          video: '/videos/bad-kitty.mp4',
          feature: 'Smells like year-old barf',
          feedsOn: 'Wants to feed on humans, but cannot find any down in the sewers',
          funnyFact: 'When it transformed, one if its head turned into the head of a bunny',
          powerRating: 3,
          tale: `Once upon a time I went for a walk down in the sewers. I was looking around to see
          if there were any odd sewer sclichers. Then I heard a 'meeeeeoooooooow', and turned around. I said
          ' oh it is a cat, goood kiiiiiity'. The cat reared up, it looked like my cat only drenched in sewer water,
          red, and had a little tiny bunny beast on its back. 'You will be a barbeque by 2024' sang the cat. 'But it will
          be much shorter, like you never wear short-wear' sang the cat again. 'Now become a tasty stew' he also sang. I tried
          of it, and run away, but the trance was just too holding. I was almost trapped in then. Just then someone came in
          with a house, and sprayed the creature into smitherines. I was saved. The problem one was it was very big. The
          giant creature toppled down and a giant wave of red sludge came towards me. I was saved from the hypno-singing
          but not this. I tried to run but my feet were stuck in the goop. The wave was approaching. I checked on my watch
          and set a timer. There was only one minute before the wave hit me. At the brink of death I was grabbed up by
          something violently. It was my dad. He said "I suppose being on that sewer adventure means you don't want those pancakes then".
          "Nope" I said. "I still want those pancakes". And that is the end of the story of the bad kitty. Hope you check
          in for the next Know-Your-Monsters tale`
      },
      {
          name: 'Gruesome Dogface',
          rating: 20,
          description: 'Even though incredibly gruesome, has an hilarious name',
          video: '/videos/gruesome-dogface.mp4',
          feature: 'Grim cloak and purple skin',
          feedsOn: 'Creatures that his has killed before and then poisoned',
          funnyFact: 'Gruesome dogface is zero funny',
          tale: 'He has no tale. But the authors say this: Gruesome dogface will eventually be made into ' +
              'a toy in the next few years.',
          powerRating: 3
      },
  ]
</script>

<h1 class="font-bold px-6 mt-6 text-6xl text-center text-purple-900 font-amatic
">Welcome to Know your Monsters</h1>
<p class="text-gray-500 text-center mb-4 mt-2 text-sm mb-2">A collection of monsters curated by world famous monster hunter Henry James</p>
<div class="flex flex-row items-center justify-around">
    <a href="/letters" class="text-3xl font-amatic text-green-600 font-bold underline py-6">Letters</a>
</div>

<div class="grid grid-cols-1 gap-12">
{#each monsters as monster}
    <MonsterCard {monster} />
  {/each}
</div>
<div class="mt-12 border-t border-gray-200 pt-8 ">
  <p class="text-base text-gray-400 xl:text-center">&copy; 2023 Dad &amp; Dopes Inc. All rights reserved.</p>
</div>

