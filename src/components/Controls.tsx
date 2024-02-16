import styled from 'styled-components';
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setCountryName, selectFiltersName, selectFiltersRegion } from '../store/slices/filtersSlice';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}

type OptionTupe = typeof optionsMap
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

function getOption(key: keyof OptionTupe) {
  return optionsMap[key]
}

export default function Controls() {
  const dispatch = useDispatch();
  const name = useSelector(selectFiltersName)
  const region = useSelector(selectFiltersRegion) || ''

  const handelSearch = (name: string) => {
    dispatch(setCountryName(name))
  }

  const handelSetRegion = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegion(e.target.value || ''))
  }
  return (
    <Wrapper>
      <Search
        search={name}
        setSearch={handelSearch}
      />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={getOption(region)}
        onChange={() => handelSetRegion}
      />
    </Wrapper>
  );
};
