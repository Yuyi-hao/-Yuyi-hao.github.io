const emojis_text = {
    "😘": "Did you like it?",
    "😀": "Happy you visited here!",
    "😁": "You made my day!",
    "😅": "It's a lil silly site.",
    "😅": "Looks like someone's smiling at this silly page.",
    "😚": "Here is your reward for visiting this site.",
    "🫣": "I'm too shy to see something precious.",
    "🤔": "Let me think, were you bored and finding something to waste your time?",
    "🤤": "I see some tasty thing.",
    "😴": "Shhhh... I'm sleeping.",
    "🥹": "Lost in the emoji world.",
    "😌": "Finding peace in the emoji silence.",
    "🤭": "Caught in the act of silent laughter.",
    "😋": "Tasting the joy of this moment.",
};

const emojis = [ "😘", "😀", "😁", "😅", "😅", "😚", "🫣", "🤔", "🤤", "😴", "🥹", "😌", "🤭", "😋"];

const emoji_div = document.querySelector('.emoji');
const emoji_text = document.querySelector('.text');
emoji_div.addEventListener('mouseover', () => {
    let emoji = emojis[Math.floor(Math.random()*emojis.length)]
    emoji_div.innerText = emoji;
    emoji_text.innerHTML = emojis_text[emoji];

})

