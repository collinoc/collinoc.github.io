let prompts = [
    "Who's most likely to blackout tonight",
    "Who's most likely to go home with someone tonight",
    'Who peed the bed way too late in life',
    "Who's had the most partners",
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
    "Woh's least likely to know how to change a tire",
    "Who's most likely to catch an STD",
    "Who's most likely to get lost while driving",
    "Who's most likely to have a shattered phone screen",
    "Who most likely got sent to the principal's office in school",
    'Who took the most tries to pass their drivers test',
    "Who's least likely to get laid tonight",
    "Who's the worst liar",
    "Who's most likely to join a pyramid scheme",
    "Who's most likely to get a speeding ticket",
    'Who could beat up everyone else in the group',
    "Who's least likely to marry someone of another race",
    "Who's the pickiest eater",
    "Who's the hottest mess",
    "Who's most likely to win a reality TV dating show",
    'Who would die first on the front lines of a World War',
    'Who would have the dumbest death',
    "Who thinks they can beat up everyone else in the group when they can't",
    'Who has absolutely no tolerance',
    "Who's the group mom",
    "Who's the group dad",
    'Who is literally a baby',
    "Who's most likely to move to another country without telling anyone",
    "Who's addicted to their phone",
    'Who has the least amount of rizz',
    "Who's the rizziest rizzler",
    'Who would you choose to raise your child if you died (not your SO)',
    "Who's 💩'ed themselves as an adult",
    "Who's most likely to get caught Fortnite dancing",
    "Who's most likely to marry rich",
    "Who's most likely to change their profession to Farmer",
    "Who's most likely to have an accidental pregnancy",
    "Who's most likely to have a threesome",
    "Who's most likely to still get grounded by their parents",
    "Who's most likely to accidentally kill someone with their cooking",
    "Who's going to have the most kids",
    "Who's going to have kids first",
    "Who's most likely to get a public indecency charge",
    "Who's most likely to get fired for sleeping on the job",
    "Who's most likely to need Viagra",
    "Who's the worst plant mom/dad",
    "Who's most likely to come back to a boot on their car",
    "Who's the laziest in bed",
    "Who's the best liar",
    'Who would be the best pan handler',
    "Who's most likely to commit treason",
    "Who's most likely to catch their house on fire while baking",
    "Who's most likely to convert to another religion for their significant other",
    'Who believed in Santa the longest',
    "Who's most likely to run for President",
    'Who would eat a bug for the least amount of money',
    "Who's most likely to join a cult",
    "Who's most likely to hookup with a stranger tonight",
    "Who's most likely to start a bar fight",
    "Who's most likely to have their car stolen",
    "Who's most likely to throw up on a flight",
    "Who's most likely to get lost in the woods",
    "Who's most likely to be a cougar",
    "Who's most likely to get a golden shower",
];

let usedPrompts = [];

const randBoundedInt = (max) => {
    return Math.floor(Math.random() * max);
};

const newPrompt = () => {
    const promptTextEle = document.getElementById('prompt-text');

    if (promptTextEle) {
        if (!prompts.length) {
            prompts = usedPrompts;
            usedPrompts = [];

            document
                .getElementById('repeat-indicator')
                ?.classList.toggle('hidden');
        }

        let prompt, index;

        do {
            index = randBoundedInt(prompts.length);
            prompt = prompts[index];
        } while (prompt === promptTextEle.innerText);

        prompts.splice(index, 1);

        usedPrompts.push(prompt);

        promptTextEle.innerText = prompt;
    }
};

const init = () => {
    newPrompt();
    document.body?.addEventListener('click', newPrompt);
};

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('keypress', (event) => {
    if (event.key === ' ') newPrompt();
});
