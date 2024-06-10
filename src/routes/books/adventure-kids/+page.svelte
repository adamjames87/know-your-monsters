<script>
	import {enhance} from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;

</script>
<div>
	<h1 class="text-center text-2xl">Adventure Kids</h1>

	<img class="mx-auto"	src="/adeventure-kids-cover.png" />
	<h1 class="text-center text-2xl">Characters</h1>
	<div class="border-green-600 border p-2">
		<img src="/baxy.png"  class="h-48"/>
		<ul>
			<li>
				Name: Baxy
			</li>
			<li>
				Gender: Female
			</li>
			<li>
				Habitat: Glacido Mountains, The dungeons
			</li>
			<li>
				Known Info: Baxi is an Artibax that Scarlet and Blitz met in an avalance.
				He has the power to glow and do horse kicks
			</li>
			<li>
				Weapon of Choice: Ferocious Claws, Deadly Tail, An Icy Sharp Beak
			</li>
		</ul>
	</div>
	<div class="border-amber-600 border mt-4 p-2">
		<img src="/blitz.png"  class="h-48"/>
		<ul>
			<li>
				Name: Blitz
			</li>
			<li>
				Gender: Male
			</li>
			<li>
				Habitat: None really
			</li>
			<li>
				Known Info: Blitz is a kind happy adventure kid although he was
				put on a dangerous job to investigate the dungeons. Scarlet often
				gets annoyed with him but he normally does keep everybody's
				spirits up.
			</li>
			<li>
				Weapon of Choice: Toad Cannon
			</li>
		</ul>

	</div>
	<div class="border-amber-600 border mt-4 p-2">
		<img src="/scarlet.png"  class="h-48"/>
		<ul>
			<li>
				Name: Scarlet
			</li>
			<li>
				Gender: Male
			</li>
			<li>
				Habitat: Dark stormy nights mainly
			</li>
			<li>
				Known Info: Even when Scarlet was very young he tended
				to go exploring for monsters he saw in a guide book
				he had found when an explosion blew his school up.
				This book has taught him everything he knows and now
				that his is in the main habitat of beasts (the dungeons)
				he wants nothing more than to see a hundred of each
				monster. Maybe even an Enderbeast.
			</li>
			<li>
				Weapon of Choice: He is basically entirely weapons
			</li>
		</ul>

	</div>

	<div class=" flex flex-col space-y-4">
		<h2 class="font-semibold">Chapter 1</h2>
		<div>
			Scarlet stepped through the old damp corridors of the prison.
			"Where are all the Gunderthors, this is just the boring stuff" he said.
			"We did see a few Demogorgons and Lavnkators in dungeons though" Blitz replied.
			"Well, still not as good as a Gunderthor" Scarlet said, "I heard that
			if you puch them hard enough they barf up Herba Mystica". "I have no intention
			of punching beasts" said Blitz. "I've heard if beasts eat Herba Mystica they become titans"
			."I wonder what would happen if humans ate it" said Scarlet, looking at his book.
			"Have you heard that in Glacido Mountain you can see the legenedary Baxcalibur, or if you venture
			into the Dark Crater you might see Great Tusk or Samalance?". "Why are you called Scarlet again
			anyway?" asked Blitz. "Because of this, the Blazing Egg" replied Scarlet.
		</div>
		<div>
			RUUUUMBLE went the dungeon
		</div>
		<p>
			"It's an avalanche" called Blitz. "Great, we might be able to see an Arctobax or two" said
			Scarlet, overjoyed. And they did see and Arctobax or two. A whole herd of them in fact. But they
			didn't look very friendly. The biggest one did a backwards kick on them. "Horse Kick" said Scarlet.
			"Not cool". The lead Arctobax started to glow with a golden light. "What is happening?!" said
			Blitz and Scarlet.
		</p>
		<h2 class="font-semibold">Chapter 2</h2>
	</div>
	<div class="border-t mt-12 py-6 bg-green-50 p-2">
		<h3 class="text-2xl text-center border-b border-green-300 pb-2">Comments</h3>
		<div class="divide-y divide-green-300 bg-green-50">
			{#each data.comments as comment}
				<div class="py-4">
					<span class="font-semibold">
					{comment.user} says...
					</span>
					<div>
						{comment.comment}
					</div>
				</div>
				{/each}
		</div>
		<div class="mt-4 border-t pt-4">
			<form method="POST" use:enhance>
				<input type="hidden" value="adventure-kids" name="story">
				<div class="flex flex-col space-y-2">
					<label for="" class="text-sm font-semibold">Username</label>
					<input type="text" name="username" class="border rounded w-full" >
				</div>
				<div class="flex flex-col space-y-2">
					<label for="" class="text-sm font-semibold">Comment</label>
					<textarea  name="comment" class="border rounded w-full" />
				</div>
				<button class="bg-green-200 p-2 rounded border-green-600 py-2">Add comment</button>

			</form>
		</div>
	</div>
</div>