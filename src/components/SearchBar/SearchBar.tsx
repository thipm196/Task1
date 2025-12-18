import { type ChangeEvent, } from 'react';
interface Props {
  value?: string,
  placeholder?: string,
  onChange?: (event:ChangeEvent<HTMLInputElement>) => void
  onSelectChange?:(event:ChangeEvent<HTMLSelectElement>) => void
  categories?: string[],
  category?: string,
}

const SearchBar = ( { placeholder ='Search...', value, onChange, onSelectChange, category, categories = [] }: Props) =>{
  return <>
     <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='search-input'
      />
      {
        categories.length && <select
        value={category}
        onChange={onSelectChange}
        className='search-select'
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      }
  </>;
}

export default SearchBar
