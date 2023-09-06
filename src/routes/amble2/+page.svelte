<script>


    import {onMount} from "svelte";

    let question_index = 0;
    let questions = [
        `What day did I get the imagination box?`,
        `What is the danger rating of the purple oozer?`,
        `How did I defeat the blood beast?`,
    ]
    let choices = [
        {
            'a': 'My birthday which is in January',
            'b': 'Christmas',
            'c': 'My birthday which is in April'
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

    const qrcode = [[1,1,1,1,1,1,1,-1,1,1,-1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,],[1,-1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,],[1,-1,1,1,1,-1,1,-1,1,1,-1,1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,],[1,-1,1,1,1,-1,1,-1,1,-1,-1,1,1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,],[1,-1,1,1,1,-1,1,-1,1,1,-1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,],[1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,-1,1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,1,],[1,1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,],[-1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,1,-1,1,-1,1,1,1,1,-1,1,],[-1,1,-1,-1,1,1,-1,1,-1,-1,-1,1,1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,],[-1,1,-1,-1,-1,1,1,-1,1,-1,1,1,-1,-1,-1,1,1,1,1,-1,-1,-1,1,-1,1,],[1,-1,1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,-1,-1,-1,-1,-1,1,1,1,],[-1,-1,1,-1,-1,1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,],[-1,-1,-1,1,-1,-1,-1,-1,1,-1,1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,-1,-1,-1,],[1,1,1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,],[-1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,1,-1,1,-1,-1,1,-1,-1,1,1,1,1,-1,],[-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,1,-1,],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,-1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,],[1,1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1,1,],[1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,-1,1,-1,1,1,-1,-1,-1,1,-1,1,1,1,],[1,-1,1,1,1,-1,1,-1,1,-1,1,1,1,-1,-1,1,1,1,1,1,1,1,-1,1,1,],[1,-1,1,1,1,-1,1,-1,1,-1,1,-1,-1,1,1,1,-1,1,1,1,1,-1,-1,1,1,],[1,-1,1,1,1,-1,1,-1,1,-1,-1,-1,1,-1,-1,-1,1,1,1,-1,1,1,1,-1,1,],[1,-1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,1,1,-1,-1,-1,1,1,1,1,-1,-1,1,],[1,1,1,1,1,1,1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,1,1,1,1,1,],]
    const drawQRCode = (canvas, qrcode) => {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const cellWidth = width / qrcode.length;
        const cellHeight = height / qrcode.length;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'black';
        qrcode.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell === 1) {
                    ctx.fillRect(cellIndex * cellWidth, rowIndex * cellHeight, cellWidth, cellHeight);
                }
            });
        });
    }

    let canvas;
    onMount( () => {
        drawQRCode(canvas, qrcode);
    })


</script>
<div>
    <div class="p-4">
        <canvas bind:this={canvas} width="256" height="256">
        </canvas>
    </div>
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

                </p>
            </div>
            <video controls class="text-center h-[500px]">
                <source src="/videos/part_1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="flex justify-center">

            <a href="/amble2" class="text-center text-3xl font-semibold font-amatic underline mt-12">Continue the
                Quiz</a>
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
