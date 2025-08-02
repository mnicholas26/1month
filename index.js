let card = document.getElementById('card');
let cover = document.getElementById('cover');
let insideCover = document.getElementById('insideCover');
let openBtn = document.getElementById('openBtn');

let audio1 = new Audio('./audio/clack-01.mp3');
let audio2 = new Audio('./audio/clack-02.mp3');
let audio3 = new Audio('./audio/clack-03.mp3');
let audio4 = new Audio('./audio/clack-04.mp3');
let audio5 = new Audio('./audio/clack-05.mp3');
let audio6 = new Audio('./audio/clack-06.mp3');
let audio7 = new Audio('./audio/clack-07.mp3');
let audio8 = new Audio('./audio/clack-08.mp3');
let audio9 = new Audio('./audio/clack-09.mp3');
let audio10 = new Audio('./audio/clack-10.mp3');
let audio11 = new Audio('./audio/clack-11.mp3');
let audio12 = new Audio('./audio/clack-12.mp3');

let clacks = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    audio7,
    audio8,
    audio9,
    audio10,
    audio11,
    audio12,
];

let audioGae1 = new Audio('./audio/gae-01.mp3');
let audioGae2 = new Audio('./audio/gae-02.mp3');

let gaeAudio = [audioGae1, audioGae2];
let gaeAudioCounter = 0;

let neighbours = {
    q: ['w', 'a'],
    w: ['q', 'e', 's', 'a'],
    e: ['w', 'w', 'd', 'r'],
    r: ['e', 't', 'f'],
    t: ['r', 'y', 'g'],
    y: ['t', 'u', 'h'],
    u: ['y', 'i', 'j'],
    i: ['u', 'o', 'k'],
    o: ['i', 'p', 'k', 'l'],
    p: ['o', '0', 'l', ';', '['],
    a: ['q', 'w', 's', 'z'],
    s: ['a', 'w', 's', 'z', 'x'],
    d: ['e', 'r', 's', 'x', 'f', 'c'],
    f: ['r', 'd', 'c', 'v', 'g'],
    g: ['t', 'f', 'h', 'v', 'b'],
    h: ['y', 'g', 'j', 'b', 'n'],
    j: ['u', 'h', 'k', 'n', 'm'],
    k: ['i', 'j', 'l', 'm', ','],
    l: ['o', 'p', 'k', ';', ',', '.'],
    z: ['a', 's', 'x'],
    x: ['z', 's', 'd', 'c'],
    c: ['x', 'd', 'f', 'v'],
    v: ['c', 'f', 'g', 'b'],
    b: ['v', 'g', 'h', 'n'],
    n: ['b', 'h', 'j', 'm'],
    m: ['n', 'j', 'k', ','],
};

let errorChance = 11; //out of 1000
let errorContinueChance = 800;
let slowline = false;

function genErrors(str) {
    let out = '';
    for (let i = 0, max = str.length; i < max; i++) {
        let c = str[i];
        if (c === '@') slowline = true;
        if (c === '\n') slowline = false;
        let error = slowline ? false : randomBetween(1000) < errorChance;
        let errorCounter = 0;
        while (error) {
            c = str[i + errorCounter];
            let neighbour = neighbours[c];
            if (neighbour === undefined) {
                if (!errorCounter) break;
                else out += c;
            } else {
                let newc = neighbour[randomBetween(neighbour.length - 1)];
                if (errorCounter && randomBetween(2) === 1) newc = c;
                if (c.toUpperCase() === c) newc = newc.toUpperCase();
                out += newc;
            }
            error =
                randomBetween(1000) <
                Math.pow(errorContinueChance / 1000, ++errorCounter) * 1000;
        }
        for (let i = 0; i < errorCounter; i++) {
            out += '{';
        }
        if (errorCounter) console.log(errorCounter);
        c = str[i];
        out += c;
    }
    return out;
}

function randomBetween(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function clack() {
    let aud = clacks[randomBetween(clacks.length - 1)];
    aud.volume = 0.18;
    aud.play();
}

function randomTime(max, min = 0) {
    let n1 = randomBetween(min / 2, max / 2);
    let n2 = randomBetween(min / 2, max / 2);
    return n1 + n2;
}

let textArea;
let currentp;
let inputText = `Our 1 month Official™ anniversary.

What a month it's been!

Emily I've told you that I don't really remember my dreams. I wake up and bosh; whatever was in my head evaporates.
But that doesn't mean I don't dream.
I do this thing I call half dream. It's like a daydream but more vivid and tactile.
When I wake up, just before I fully awaken and when I'm not too tired that I just go back to sleep, when I know I don't need to get out of bed.
I can turn on my side, close my eyes and drift off into whatever world I want.
These aren't full dreams, I'm very much concious, but they can feel very strong and unlike full dreams I have a good amount of autonomy on what I'm dreaming about.
Doing this I feel like I have lived my life 10000x over.
I've seen so many alternate versions of me in all sorts of paths through life.
A footballer, a politician, a billionaire.
Every nice future I wanted to ponder I already have multiple times.
But any time I wanted to feel really happy I always ended up in the same place.
Telling you I love you and living happily ever after.

In reality I've told you my feelings 3 times, and even then the first time wasn't with my full chest.
But in my half dreams I have told you thousands of times.
In Waverly, in Bellevue, in Balloon Court, in Germany, in Malaga, in London, in your parents house. Wherever I thought our next encounter would/might be.
Usually I wouldn't get much further than that, even with my frothing imagination, I had no real comprehension of what would follow, of what happily ever after would entail.
I just knew how happy it made me.
For the longest time I was resigned to this just being a happy place I would go into and would stay firmly in my head.

This past month has blown every single one of those dreams out of the water.
The happiness I get to feel every single day far exceeds even what, with almost full control of my dreams, I had ever anticipated.

I cannot express, no matter how good I am with my words and feelings, no matter how much time I have, just how much you mean to me.
How happy I am, how much I love you, how determined you make me, how amazing you are.
Now, I'm still gonna try, at every opportunity I get, to tell you and to show you just how much I appreciate you.
But until the day comes where I can take my brain and my memories and my feelings and inject them into yours, I will probably not be able to ever communicate it completely.

@This has been the best month of my life.
@This is the best I have ever felt.
@You are the best person I have ever met.

I don't care that the calendar says August now.
I won't care when the season turns to autumn, and then winter.
I won't care when the year ticks over to 2026 or 2030 or 2100.

I have no intention of this month ever ending.

@From here on out, I'm staying in our magical July forever.
@@Happily~ ever~ after.~~~`;
let textCounter = 0;
let slower = [180, 90];
let slow = [140, 60];
let normal = [60, 40];
let current = normal;
let error = [50, 45];
let instant = [21, 17];

let wordPause = [150, 90];
let sentencePause = [300, 120];
let linePause = [500, 250];
let paragraphPause = [1000, 600];
let errorPause = [800, 150];

async function randomClack() {
    let c = inputText[textCounter++];
    if (c === '#') {
        if (inputText[textCounter] === '\n' || textCounter === 1) {
            currentp?.classList.toggle('active');
            currentp = document.createElement('p');
            currentp.classList.toggle('active');
            textArea.appendChild(currentp);
        }
    }
    let [min, max] = [0, 0];
    if (c === '{') {
        [max, min] = error;
        if (inputText[textCounter - 2] !== '{')
            await new Promise((resolve) =>
                setTimeout(resolve, randomBetween(600, 100))
            );
    } else if (c === '~')
        await new Promise((resolve) => setTimeout(resolve, 400));
    else if (c === ' ') [max, min] = wordPause;
    else if (c === '.') [max, min] = sentencePause;
    else if (c === '#') {
        if (inputText[textCounter] === '@') {
            if (inputText[++textCounter] === '@') {
                current = slower;
                textCounter++;
            } else current = slow;
        } else current = normal;
        if (inputText[textCounter] === '\n') [max, min] = instant;
        else if (textCounter < 3 || inputText[textCounter - 3] !== '.')
            [max, min] = paragraphPause;
        else [max, min] = linePause;
    } else [max, min] = current;

    if (inputText.length > textCounter)
        setTimeout(randomClack, randomTime(max, min));
    else {
        currentp.classList.remove('active');
        await new Promise((resolve) => setTimeout(resolve, 10));
        currentp.classList.toggle('finished');
    }

    if (c === '{') {
        clack();
        currentp.textContent = currentp.textContent.slice(0, -1);
    } else if (c === '#') return;
    else if (c === '~') return;
    else {
        clack();
        currentp.textContent += c;
        // currentp.scrollIntoView(false);
        textArea.scroll({ top: textArea.scrollHeight });
    }
}

function addHashtags(str) {
    let out = '#';
    for (const c of str) {
        out += c === '\n' ? c + '#' : c;
    }
    return out;
}

async function load() {
    textArea = document.getElementById('main');
    textArea.classList.add('logged');
    inputText = genErrors(inputText);
    inputText = addHashtags(inputText);
    console.log(inputText);
    randomClack();
}

async function setupLogin() {
    let unloaded = true;
    while (unloaded) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        let submitBtn = document.getElementById('submit');
        if (submitBtn) {
            let input = document.getElementById('input');
            submitBtn.addEventListener('click', () => {
                if (input.value.toLowerCase() === 'qingdao') load();
                else {
                    input.value = '';
                    input.focus();
                    gaeAudio[gaeAudioCounter].play();
                    gaeAudioCounter = 1 - gaeAudioCounter;
                }
            });
            break;
        }
    }
}

setupLogin();
