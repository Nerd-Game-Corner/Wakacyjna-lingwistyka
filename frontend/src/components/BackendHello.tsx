import { useEffect, useState } from 'react';
import { fetchHello } from '../services/api';

export default function Greeting() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHello()
      .then(setMessage)
      .catch(() => setError('Could not fetch greeting'));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!message) return <div>Loading...</div>;

  return <div>{message}</div>;
}
