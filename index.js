let prompts = [
    "Who's most likely to blackout tonight",
    "Who's most likely to go home with someone tonight",
    "Who peed the bed way too late in life",
];

let usedPrompts = [];

const randBoundedInt = (max) => {
    return Math.floor(Math.random() * max);
};

const newPrompt = () => {
    const promptTextEle = document.getElementById('prompt-text');
    let prompt = null;

    if (promptTextEle) {
        while (!prompt || prompt === promptTextEle.innerText) {
            if (prompts.length === 0) {
                prompts = usedPrompts;
                usedPrompts = [];
            }

            let index = randBoundedInt(prompts.length);
            [prompt] = prompts.splice(index, 1);
            usedPrompts.push(prompt);
        }

        promptTextEle.innerText = prompt;
    }
};

const init = () => {
    newPrompt();
    document.getElementById('main-view')?.addEventListener('click', newPrompt);
};

document.addEventListener('DOMContentLoaded', init);