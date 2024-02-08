import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountryByName, resetCountry } from '../store/details/details-actions';
import { selectDetailsStatus, selectCountryByName } from '../store/details/details-selectors';

import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector(selectDetailsStatus)

  useEffect(() => {
    dispatch(loadCountryByName(name))
    return () => {
      dispatch(resetCountry())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const currentCountry = useSelector(selectCountryByName);

  return (
    <div>
      <Button onClick={() =>navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry &&
        <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
