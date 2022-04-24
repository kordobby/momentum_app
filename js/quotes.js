const quotes = [
  {
    quote: "Do not pity the dead, Harry. Pity the living, and above all those who live without love.",
    author: "Albus Dumbledore"
  },
  {
    quote: "It is impossible to manufacture or imitate love.",
    author: "Horace Slughorn"
  },
  {
    quote:
      "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
    author: "Albus Dumbledore"
  },
  {
    quote: "Books! And cleverness! There are more important things — friendship and bravery.",
    author: "Hermione Granger"
  },
  {
    quote: "We're with you whatever happens.",
    author: "Ron Weasley"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "Sirius Black"
  },
  {
    quote: "It does not dwell on dreams and forget to live.",
    author: "Albus Dumbledore"
  },
  {
    quote: "Numbing the pain for a while will make it worse when you finally feel it.",
    author: "Albus Dumbledore"
  },
  {
    quote: "No good sittin' worryin' abou' it. What's comin' will come, and we'll meet it when it does.",
    author: "Rubeus Hagrid"
  },
  {
    quote: "Harry, you're an Wizard.",
    author: "Rubeus Hagrid"
  },
  {
    quote: "Happiness can be found even at the darkest if one only remembers to turn on the light.",
    author: "Albus Dumbledore"
  },
  {
    quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore"
  },
  {
    quote: "Fifty points to Gryffindor!",
    author: "Albus Dumbledore"
  },
  {
    quote: "What would I get if I added powdered root of asphodel to an infusion of wormwood?",
    author: "Severus Snape"
  },
  {
    quote: "Look at me.. You have your mother's eyes..",
    author: "Severus Snape"
  },
  {
    quote: "After all this time? - Always.",
    author: "Severus Snape"
  },
  {
    quote: "Dobby is Free..!",
    author: "Dobby"
  },
  {
    quote: "The ones that love us never really leave us. And you can always find them. In here.",
    author: "Sirius Black"
  },
  {
    quote: "It's not our abilities that show what we truly are. It is our choices",
    author: "Albus Dumbledore"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;