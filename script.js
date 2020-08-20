//written by April Tsai, 08/18/2020

const quoteBtn = document.querySelector('.quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', newQuote);

function newQuote() {
	let randomNum = Math.floor(Math.random()*quotes.length);
	quote.innerHTML = quotes[randomNum].quote;
	quoteAuthor.innerHTML = quotes[randomNum].name; 
}



const quotes = [
{
	id:1,
	name: "Charles Dickens",
	quote:"It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known."
},

{
	id:2,
	name: " J.R.R. Tolkein",
	quote:"All we have to decide is what to do with the time that is given us."
},

{
	id:3,
	name: "J.K. Rowling",
	quote:"It matters not what someone is born, but what they grow to be."
},

{
	id:4,
	name: "Emily Bronte",
	quote:"Whatever our souls are made of, his and mine are the same."
},

{
	id:5,
	name: "F. Scott Fitzgerald",
	quote:"Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had."
},

{
	id:6,
	name: "Harper Lee",
	quote:"Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what."
},

{
	id:7,
	name: " William Shakespeare",
	quote:"We are such stuff as dreams are made on, and our little life is rounded with a sleep."
},

{
	id:8,
	name: "Douglas Adams",
	quote:"The Answer to the ultimate question of Life, The Universe and Everything is…42!"
}
]