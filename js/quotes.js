const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller",
    },
    {
        quote: "Don't trust a woman's tears. Because it's a woman's nature to cry when things don't go her way",
        author: "Socrates",
    },
    {
        quote: "A woman's strength is obedience, and a man's virtue is",
        author: "Aristotle",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;