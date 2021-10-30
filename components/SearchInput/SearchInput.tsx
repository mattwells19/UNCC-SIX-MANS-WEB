import { ChangeEvent } from "react";
import SearchIcon from "../../icons/SearchIcon";
import styles from "./SearchInput.module.scss";

interface ISearchInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ label, id, value = "", onChange }: ISearchInputProps) => {
  return (
    <div className={styles.searchInput}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputContainer}>
        <input type="search" id={id} value={value} onChange={onChange} />
        <SearchIcon
          width="20px"
          height="20px"
          color="var(--grey-600)"
        />
      </div>
    </div>
  );
};

export default SearchInput;