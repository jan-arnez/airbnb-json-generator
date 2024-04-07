import { useState } from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Button from './Button';

const UrlForm = () => {
  const navigate = useNavigate();
  const { setData } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;

    try {
      setIsLoading(true);
      const response = await fetch(`${backendUrl}/get-links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      navigate('/links');
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
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 mx-auto max-w-[800px] w-full "
        >
          <input
            name="url"
            className="h-12 w-full px-4 rounded-md border focus:outline-primary text-stone-700 font-medium"
            placeholder="https://www.airbnb.com/"
            pattern="^(https?://)?(www\.)?airbnb\.com(/.*)?$"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      )}
    </>
  );
};

export default UrlForm;
