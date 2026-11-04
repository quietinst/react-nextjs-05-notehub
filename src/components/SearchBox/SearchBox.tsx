import styles from './SearchBox.module.css';

interface SearchBoxProps {
  initialValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ initialValue, onChange }: SearchBoxProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      defaultValue={initialValue}
      onChange={onChange}
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
