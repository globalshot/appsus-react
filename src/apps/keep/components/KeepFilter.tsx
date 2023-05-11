import { useEffect, useState } from "react"
import { FilterBy } from "../../../interfaces/keep.store";

type FilterProps = {
  onFilterChange: (filterBy: FilterBy) => void;
}

export function KeepFilter(props: FilterProps) {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      props.onFilterChange({ title: filter });
    }, 500);

    return () => {
      clearTimeout(debounce);
    }
  }, [filter]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className='keep-filter'>
      <input type='text' placeholder='Search' onChange={handleInputChange} value={filter} />
    </div>
  );
}
