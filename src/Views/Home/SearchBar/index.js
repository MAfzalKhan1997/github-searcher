/* eslint-disable react-hooks/exhaustive-deps */
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GitDropdown from "../../../Components/Dropdown";
import GitInput from "../../../Components/Input";
import {
  getUsers,
  getRepositories,
  emptyArrays,
  setInputVal,
} from "../../../redux/actions/app";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { repositories, users, selectedEntity, inputVal } = useSelector(
    (state) => state.app
  );
  const [inputValue, setInputValue] = useState(inputVal);
  const [selected, setSelected] = useState(selectedEntity);

  const fetchData = useCallback(
    debounce((query, selectedEntity) => {
      dispatch(
        selectedEntity === "users"
          ? getUsers(query, selectedEntity)
          : getRepositories(query, selectedEntity)
      );
    }, 800),
    []
  );

  useEffect(() => {
    if (inputValue.length >= 3) {
      fetchData(inputValue, selected);
    } else {
      dispatch(emptyArrays());
    }
  }, [inputValue, selected, fetchData]);

  useEffect(() => {
    if ((users.length || repositories.length) && inputValue.length < 3) {
      dispatch(emptyArrays());
    }
  }, [users, repositories, inputValue]);

  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setInputVal(value));
  };

  const onSelect = (e) => {
    const value = e.target.value;
    setSelected(value);
  };

  return (
    <div className="search-elements">
      <GitInput
        value={inputValue}
        onChange={onChange}
        placeholder="Start typing to search .."
      />
      <GitDropdown value={selected} onChange={onSelect} />
    </div>
  );
};

export default SearchBar;
