export default function TodoFilter({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value="all">All</option>
      <option value="complete">Complete only</option>
      <option value="incomplete">Incomplete only</option>
    </select>
  );
}
