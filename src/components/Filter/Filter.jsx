export const Filter = ({ onChangeContactFilter, value }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input value={value} onChange={onChangeContactFilter}></input>
      </label>
    </div>
  );
};
