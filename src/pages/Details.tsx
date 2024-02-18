import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useAppSelector as useSelector } from '../store';
import { useAppDispatch as useDispatch } from '../store';
import { loadCountryByName, resetCountry } from '../store/slices/detailsSlice';
import { selectCountryByName } from '../store/slices/detailsSlice';

import { Button } from '../components/Button';
import Info from '../components/Info';


export default function Details() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector(state => state.details)

  useEffect(() => {
    if (name) {
      dispatch(loadCountryByName(name))
    }
    return () => {
      dispatch(resetCountry())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const currentCountry = useSelector(selectCountryByName);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry &&
        <Info push={navigate} countryInfo={currentCountry} />}
    </div>
  );
};
