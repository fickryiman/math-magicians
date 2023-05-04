import './Quote.css';
import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const category = ['amazing', 'anger', 'attitude', 'communications', 'computers', 'cool',
    'dreams', 'education', 'environmental', 'experience', 'failure', 'family', 'fear', 'forgiveness',
    'freedom', 'friendship', 'funny', 'great', 'history', 'humor', 'inspirational', 'intelligence', 'knowledge',
    'learning', 'life', 'love', 'money', 'morning', 'movies', 'success'];

  const random = Math.floor(Math.random() * 10) * 3;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category[random]}`;
      const params = {
        method: 'GET',
        headers: {
          'X-Api-Key': 'c5cFywTgJ2lZOt0YMl8FPw==e4WI89mcjpo3tZZW',
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await fetch(url, params);
        const result = await response.json();
        setQuote(result[0].quote);
        setAuthor(result[0].author);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category[random]}`;
      const params = {
        method: 'GET',
        headers: {
          'X-Api-Key': 'c5cFywTgJ2lZOt0YMl8FPw==e4WI89mcjpo3tZZW',
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await fetch(url, params);
        const result = await response.json();
        setQuote(result[0].quote);
        setAuthor(result[0].author);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error);
      }
    };
    fetchData();
  };

  return (
    <div className="quote-container">
      <h2>
        {!errorMessage ? (
          <>
            {quote}
            <p className="author">
              ~
              { author}
            </p>
          </>
        ) : (
          <>
            Apologize there is an error when retrieved from API.
            {/* {errorMessage} */}
          </>
        )}
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
