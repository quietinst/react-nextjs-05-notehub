import styles from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      defaultValue={value}
      onChange={onChange}
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
