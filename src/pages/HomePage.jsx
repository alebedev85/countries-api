import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { selectCountries, selectCountriesInfo, selectFilteredCountries } from '../store/countries/countries-selectors';
import { selectAllFilters } from '../store/filters/filters-selectors';
import { loadCountries } from '../store/countries/countries-actions';

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectCountriesInfo)

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  const filters = useSelector(selectAllFilters);
  const countries = useSelector(state => selectFilteredCountries(state, filters));

  return (
    <>
      <Controls />

      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
        <List>
          {countries.map((c) => {
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
        </List>
      )}
    </>
  );
};
