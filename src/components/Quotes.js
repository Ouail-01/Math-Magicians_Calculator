import { useState, useEffect } from 'react';
import '../styles/Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: { 'X-Api-Key': 'Hok8eEYwimjC1BUoL7GDYQ==YyZhNbgCD7gq3zPY' },
          contentType: 'application/json',
        });
        const data = await response.json();

        if (data.length) {
          setQuote(data[0].quote);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  if (error) {
    return <h1 className="error">There was an error fetching the quote. Please try again.</h1>;
  }

  return (
    <h1 className="quotes">{quote}</h1>
  );
};

export default Quotes;
