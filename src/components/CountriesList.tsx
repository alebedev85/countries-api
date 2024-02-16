import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector as useSelector} from '../store';
import { useAppDispatch as useDispatch} from '../store';
import { CountryDataType } from '../store/Types';
import List from './List';
import Card from './Card';

import { selectFilteredCountries } from '../store/slices/countriesSlice';
import { selectAllFilters } from '../store/slices/filtersSlice';
import { loadCountries } from '../store/slices/countriesSlice';

export default function CountriesList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { status, error, list } = useSelector(state => state.countries)

  useEffect(() => {
    if (!list.length) {
      dispatch(loadCountries())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.length]);

  const filters = useSelector(selectAllFilters);
  const listCountries = useSelector(state => selectFilteredCountries(state, filters));

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        listCountries.length ?
          <List>
            {listCountries.map((c: CountryDataType) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List> : <h2>No countries found</h2>
      )}
    </>
  )
}
