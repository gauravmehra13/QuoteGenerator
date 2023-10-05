let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"

    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"

    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron"

    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey"

    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"

    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs"

    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        person: "Robert Louis Stevenson"

    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        person: "Maya Angelou"

    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        person: "Thomas A. Edison"

    },
    {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        person: "Oscar Wilde"

    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        person: "Albert Einstein"

    },
]


btn.addEventListener("click" , function(){

    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    person.innerText= quotes[random].person
})