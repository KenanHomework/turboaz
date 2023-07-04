import SearchInput from "../search-input/index.js";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = ({ value = "" }) => {
  const lastListingCount = 1198;
  const [searchValue, setSearchValue] = useState(value);
  const isSearchValueEmpty = searchValue.length <= 0;
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/autos?query=${searchValue}`);
  };
  const resetInput = () => {
    setSearchValue("");
  };

  const handleReset = () => {
    resetInput();
    searchValue.current.focus();
  };

  return (
    <div>
      <div className={"tz-container bg-secondary-light-bg"}>
        <div className={"tz-inner-container flex-col py-5 "}>
          {/*Search & Filter*/}
          <div className={" w-full"}>
            <SearchInput
              value={searchValue}
              onChange={handleInputChange}
              onEnter={handleSearch}
              placeHolder={"Axtardığınız avtomobili bura yazın"}
            />
          </div>
          {/*Footer*/}
          <div className={"flex items-center justify-between mt-2 w-full"}>
            {/*Statistic*/}
            <div className={"flex gap-2"}>
              <span className={"text-second-text"}>Bu gün:</span>
              <Link to="/autos">
                <span className={"text-blue-400 underline-animation"}>
                  {lastListingCount} yeni elan
                </span>
              </Link>
            </div>
            {/*Action*/}
            <div className={"flex items-center gap-4"}>
              {/*Reset*/}
              <button
                onClick={handleReset}
                disabled={isSearchValueEmpty}
                className={` ${
                  !isSearchValueEmpty && "underline-animation"
                } text-tz-red-text h-fit disabled:text-second-text`}
              >
                Sıfırla
              </button>
              {/*Search*/}
              <Link
                to={
                  isSearchValueEmpty ? "/autos" : `/autos?query=${searchValue}`
                }
                className={
                  "py-[15px] px-10 bg-tz-red hover:bg-tz-red-hover-dark rounded-lg text-sm transition-all duration-150"
                }
              >
                Elanları göstər
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
};

export default Search;
