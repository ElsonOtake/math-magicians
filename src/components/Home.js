import React from 'react';
import './Home.css';

const Home = () => (
  <main>
    <header>Welcome to our page</header>
    <h4>Mathemagician (From Wikipedia, the free encyclopedia)</h4>
    <p>
      {
      `A mathemagician is a mathematician who is also a magician.
      The term "mathemagic" is believed to have been introduced by Royal
      Vale Heath with his 1933 book "Mathemagic".
      Diaconis has suggested that the reason so many mathematicians are magicians is that "inventing 
      a magic trick and inventing a theorem are very similar activities."
      A great number of self-working mentalism tricks rely on mathematical principles.
      The Mathemagician is the name of a character in the 1961 children's 
      book The Phantom Tollbooth. He is the ruler of Digitopolis, the kingdom of mathematics.`
      }
    </p>
  </main>
);

export default Home;
