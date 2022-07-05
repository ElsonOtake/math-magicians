import React from 'react';

const Quote = () => {
  const quotes = [
    {
      quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      author: 'Albert Einstein, German theoretical physicist',
    },
    {
      quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      author: 'Stefan Banach, Polish mathematician',
    },
    {
      quote: 'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.',
      author: 'Shakuntala Devi',
    },
    {
      quote: 'Mathematics is the music of reason.',
      author: 'James Joseph Sylvester, English mathematician',
    },
    {
      quote: '"Obvious" is the most dangerous word in mathematics.',
      author: 'Eric Temple Bell, Scottish mathematician',
    },
    {
      quote: 'Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.',
      author: 'Joseph Fourier, French mathematician and physicist',
    },
    {
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      author: 'William Paul Thurston, American mathematician',
    },
    {
      quote: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
      author: 'Georg Cantor, German mathematician',
    },
    {
      quote: 'Go down deep enough into anything and you will find mathematics.',
      author: 'Dean Schlicter',
    },
    {
      quote: 'Nature is written in mathematical language.',
      author: 'Galileo Galilei, Italian astronomer, physicist and engineer',
    },
  ];

  const quoteNumber = Math.floor(Math.random() * 10);

  return (
    <>
      <h1>
        {quotes[quoteNumber].quote}
      </h1>
      <h2>
        {quotes[quoteNumber].author}
      </h2>
    </>

  );
};

export default Quote;
