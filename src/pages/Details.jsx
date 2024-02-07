import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { loadOneCountry, resetCountry } from '../store/countries/countries-actions';
import { selectOneCountry, selectCountriesInfo } from '../store/countries/countries-selectors';

import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector(selectCountriesInfo)

  useEffect(() => {
    dispatch(loadOneCountry(name))
  }, []);

  const currentCountry = useSelector(selectOneCountry);

  console.log(currentCountry);

  return (
    <div>
      <Button onClick={() => {
        navigate(-1);
        dispatch(resetCountry())
      }}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry &&
        <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
