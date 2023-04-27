import './Quote.css';
import React, { useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const category = ['amazing', 'anger', 'attitude', 'best', 'business', 'change', 'communications', 'computers', 'cool',
    'courage', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 'fear', 'forgiveness',
    'freedom', 'friendship', 'funny', 'great', 'happiness', 'history', 'humor', 'imagination', 'inspirational', 'intelligence', 'knowledge',
    'leadership', 'learning', 'life', 'love', 'marriage', 'money', 'morning', 'movies', 'success'];

  const random = Math.floor(Math.random() * 10) * 4;

  const getQuotes = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category[random]}`;
    try {
      setLoading(true);
      fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'c5cFywTgJ2lZOt0YMl8FPw==e4WI89mcjpo3tZZW',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      console.error(errorMessage);
    }
  };

  useState(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div className="quote-container">
      <h2>
        {quote}
        <span className="author">
          &nbsp;(
          { author}
          )
        </span>
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="quote-button"
      >
        {loading ? 'Loading..' : 'New Quote'}
      </button>
    </div>
  );
}

export default Quote;
