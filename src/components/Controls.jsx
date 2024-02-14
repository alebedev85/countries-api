import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setCountryName } from '../store/filters/filters-actions';
import { selectFiltersName, selectFiltersRegion } from '../store/filters/filters-selectors';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const dispatch = useDispatch();
  // const name = useSelector(selectFiltersName)
  // const region = useSelector(selectFiltersRegion)

  const handelSearch = (name) => {
    dispatch(setCountryName(name))
  }

  const handelSetRegion = (e) => {
    dispatch(setRegion(e?.value || ''))
  }
  return (
    <Wrapper>
      <Search
        // search={name}
        setSearch={handelSearch}
      />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        // value={optionsMap[region]}
        onChange={handelSetRegion}
      />
    </Wrapper>
  );
};
