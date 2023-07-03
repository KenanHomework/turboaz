import "./header.css";

const Header = () => {
  return (
    <div className={" ts-container bg-tz-red"}>
      {/* Main Container*/}
      <div className={"tz-inner-container h-[60px]"}>
        {/*Brand Area*/}
        <div className={"flex items-center "}>
          <a className="w-[120px]  float-left" href={"/"}>
            <img
              width="94"
              height="14"
              alt="turbo.az"
              src="https://turbo.azstatic.com/assets/logo-67bbb214ce91649f92ed6036eba7e52c29f3e56614a8d1404283b4c23c5878d6.svg"
            />
          </a>
          <a href="/autos" className={"underline-animation"}>
            Bütün Elanlar
          </a>
        </div>
        {/*New Car*/}
        <a
          href={"/autos/new"}
          className="flex items-center  content-center hover:bg-btn-hover-green hover:text-white bg-btn-green h-[40px] px-2 rounded-lg cursor-pointer text-slate-200 transition-all duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            className={"mr-[7px] "}
            viewBox="0 0 25 25"
          >
            <path
              fill="currentColor"
              d="M13.75 6.25h-2.5v5h-5v2.5h5v5h2.5v-5h5v-2.5h-5v-5zM12.5 0C5.625 0 0 5.625 0 12.5S5.625 25 12.5 25 25 19.375 25 12.5 19.375 0 12.5 0zm0 22.5c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
            />
          </svg>
          Yeni elan
        </a>
      </div>
    </div>
  );
};

export default Header;
