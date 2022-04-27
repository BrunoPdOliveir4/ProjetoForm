import { useEffect, useState } from 'react';

const ShowClients = () => {
  const [currentClients, setCurrentClients] = useState('');
  const [loading, setLoading] = useState(false);

  const url = '';
  const options = {
    method: 'GET',
  };

  const handleResponse = async (response) => {
    const data = await response.json();
    console.log(data);
    setCurrentClients(data);
  };

  const handleError = () => {
    console.log('erro!!!');
  };

  const requestClients = () => {
    setLoading(true);
    const request = fetch(url, options);
    request.then(handleResponse);
    request.catch(handleError);
  };

  const handleClick = () => {
    if (loading) {
      return;
    }
    requestClients();
  };

  useEffect(() => {
    requestClients();
  }, []);

  return (
    <>
      <div>
        <h1>Clientes</h1>
        <div>
          <div>{currentClients}</div>
        </div>
      </div>
      <button type="button" onClick={handleClick}>Carregar Clientes</button>
    </>
  );
};

export default ShowClients;
