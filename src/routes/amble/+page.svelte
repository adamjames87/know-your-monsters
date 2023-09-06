<script>


    let question_index = 0;
    let questions = [
        `What is the monster with a danger rating of 3 and distinguishing feature of
    huge gaping jaws?`,
        `What is the danger rating of the purple oozer?`,
        `How did I defeat the blood beast?`,
    ]
    let choices = [
        {
            'a': 'The blood beast',
            'b': 'Evil Santa',
            'c': 'The purple oozer'
        },
        {
            'a': '20',
            'b': '50',
            'c': '1'
        },
        {
            'a': 'I threw concrete',
            'b': 'I used a sword to slice them in half',
            'c': 'I turned my cat into a blood beast and they fought to the death'
        }
    ]
    let answers = [
        'b',
        'a',
        'c'
    ]
    let answer = '';
    let success = true
    $: success = question_index > questions.length - 1;

    const handleAnswer = () => {
        if (answer.toLowerCase() === answers[question_index]) {
            alert('Correct!');
            answer = '';
            question_index++;
        } else {
            alert('Incorrect!');
        }
    }

</script>
<div>
    {#if success}
        <div class=" p-12 border-2 my-4 shadow-xl border-green-400 bg-gradient-to-b from-green-100 to-green-300 rounded-xl text-center font-amatic text-3xl text-green-800 font-semibold">
            Congratulations. You have completed the first part of the quiz
        </div>
        <div class="flex justify-center">
            <div class="w-1/3">
                <div class="font-amatic">
                    The tale of the Amble
                </div>
                <p>
                    Once upon a time I was having a special party at Christmas. I ha invited everything round and I opened
                    one of my presents. It was a strange box with yellow markings on it.
                    Whatever you thought it printed it. I decided to call it the "imagination box". One day I had the
                    imagination box plugged into my head. I was trying to think up cool monster friends. Pow, pow, pow,
                    they all came printed out. A suprisingly friendly Grundor came up to my father , "do you want a cup
                    of tea master?" it asked. I still had my imagination box plugged in when I went to sleep.
                    I had a dream  about a non-friendly vicious monster chasing me up an endless staircase. It's name
                    was Amble. It has a green glow all over its body. Amble continued to chase me up the staircase
                    and then nine crabs came out of nowhere. They were very vicious and purple too. Their blue eyes
                    swirled and their teeth looked spoons. They started to pull me in towards the amble and then
                    'Grrrrh'. With that noise I woke up. I wondered what the noise could have been. Like something had
                    slowly clawed its way out of the imagination box, that is what it sounded like. The imagination box
                    sometimes made that sound when some of its thoughts were too much. And then I saw. The imagine box
                    was battered, and covered in see-through slime. That see-through slime had been dripping from the
                    Amble in my dream. Just then the door opened and a green flash of spiky skin leapt out...
                </p>
            </div>
            <video controls class="text-center h-[500px]">
                <source src="/videos/part_1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="flex justify-center">

            <a href="/amble2" class="text-center text-3xl font-semibold font-amatic underline mt-12">Continue the Quiz</a>
        </div>

    {:else}
        <div>
            {questions[question_index]}
        </div>
        <ul class="space-y-2 mb-2">
            <li>
                a) {choices[question_index]['a']}
            </li>
            <li>
                b) {choices[question_index]['b']}
            </li>
            <li>
                c) {choices[question_index]['c']}
            </li>
        </ul>
        <form on:submit={handleAnswer}>
            <input type="text" placeholder="Answer here..." bind:value={answer}/>
            <div>
                <button class="rounded bg-red-400 p-2">Answer</button>
            </div>
        </form>
    {/if}

</div>