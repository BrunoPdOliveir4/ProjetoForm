import { useEffect, useState } from 'react';
import * as Style from './RandomDog.style';

const RandomDog = () => {
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);

  const url = 'https://dog.ceo/api/breeds/image/random';
  const options = {
    method: 'GET',
  };

  const handleResponse = async (response) => {
    const data = await response.json();
    const { message } = data;
    setCurrentImage(message);
  };

  const handleError = () => {
    setLoading(false);
  };

  const handleOnLoad = () => {
    setLoading(false);
  };

  const requestDog = () => {
    setLoading(true);
    const request = fetch(url, options);
    request.then(handleResponse);
    request.catch(handleError);
  };

  const handleClick = () => {
    if (loading) {
      return;
    }
    requestDog();
  };

  useEffect(() => {
    requestDog();
  }, []);

  return (
    <Style.Wrapper>
      <Style.Title>Random Dog</Style.Title>
      <Style.Container>
        <Style.Image alt="dog" src={currentImage} loading={loading} onLoad={handleOnLoad} />
        <Style.LoadingText loading={loading}>Loading...</Style.LoadingText>
      </Style.Container>
      <Style.Button type="button" onClick={handleClick} disabled={loading}>Load</Style.Button>
    </Style.Wrapper>
  );
};

export default RandomDog;
