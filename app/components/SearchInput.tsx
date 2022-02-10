import { ChangeEvent } from "react";
import SearchIcon from "../icons/SearchIcon";
import styles from "~/styles/search-input.css";
import { LinksFunction } from "remix";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface ISearchInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ label, id, value = "", onChange }: ISearchInputProps) => {
  return (
    <div className="searchInput">
      <label htmlFor={id}>{label}</label>
      <div className="inputContainer">
        <input type="search" id={id} value={value} onChange={onChange} />
        <SearchIcon width="20px" height="20px" color="var(--grey-600)" />
      </div>
    </div>
  );
};

export default SearchInput;
