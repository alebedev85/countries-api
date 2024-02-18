import styled from 'styled-components';
import { useAppSelector as useSelector} from '../store';
import { useAppDispatch as useDispatch} from '../store';
import { setRegion, setCountryName, selectFiltersName, selectFiltersRegion } from '../store/slices/filtersSlice';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import RegionOptionData from '../data/RegionOptionData';
import { RegionOptionKeyType } from '../store/Types';

const options = Object.values(RegionOptionData);

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

function getOption(key: RegionOptionKeyType) {
  if (key) {
    return RegionOptionData[key]
  }
}

export default function Controls() {
  const dispatch = useDispatch();
  const name = useSelector(selectFiltersName)
  const region = useSelector(selectFiltersRegion)

  const handelSearch = (name: string) => {
    dispatch(setCountryName(name))
  }

  const handelSetRegion = (value: RegionOptionKeyType) => {
    dispatch(setRegion(value))
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
