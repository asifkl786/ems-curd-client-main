const FilterSearchBar = ({ departments, selected, onChangeDept, onSearch }) => (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <select
        value={selected}
        onChange={(e) => onChangeDept(e.target.value)}
        className="p-2 rounded border w-full sm:w-auto"
      >
        {departments.map(dep => (
          <option key={dep} value={dep}>{dep}</option>
        ))}
      </select>
  
      <input
        type="text"
        placeholder="Search by name or email..."
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 rounded border w-full sm:w-1/2"
      />
    </div>
  );
  export default FilterSearchBar;
  