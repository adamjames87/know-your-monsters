<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<div>
	{JSON.stringify(data)}
	<h1 class="text-center text-2xl">Adventure Kids</h1>

	<img class="mx-auto"	src="/adeventure-kids-cover.png" />
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
			<form method="POST">
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