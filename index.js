let prompts = [
    "Who's most likely to blackout tonight",
    "Who's most likely to go home with someone tonight",
    'Who peed the bed way too late in life',
    'Who needs to get tucked in tonight',
    "Who's had the most partners",
    "Who's hooked up with the most people in this group",
    'Who was the last to fart',
    "Who's most likely to have 100+ unread texts",
    '"Can I hit your vape?"',
    "Who's most likely to commit tax fraud",
    "Who's most likely to get some tonight",
    "Who's most likely to cheat",
    "Who's most likely to sleep through something important",
    "Who's most likely to lie to their significant other",
    "Who's most likely to get kicked out of a lease",
    "Who's most likely to take it up the butt",
    "Who's most most likely to know all the gossip",
    "Who's most likely to throw up tonight",
    "Who's most likely to throw up tomorrow",
    'Who most likely has a hickey right now',
    "Who's most likely to become a nun",
    "Who's most likely to become a priest",
    "Who's most likely to throw up taking a shot",
    "Who's most likely to catch an STD",
    "Who's most likely to get lost while driving",
    "Who's most likely to have a shattered phone screen",
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
