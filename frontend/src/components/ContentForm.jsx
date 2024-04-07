import { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Button from './Button';

const ContentForm = () => {
  const navigate = useNavigate();
  const { data, setData } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(`${backendUrl}/get-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ links: data.links }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newData = await response.json();
      setData(newData);
      navigate('/content');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      navigate('/error');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <Button type="submit" disabled={data.links.length <= 0}>
            {data.links.length <= 0 ? 'Disabled' : 'Continue'}
          </Button>
        </form>
      )}
    </>
  );
};

export default ContentForm;
