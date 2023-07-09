import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={" flex-col"}>
      {/*Footer Contact*/}
      <div
        className={
          "tz-container bg-secondary-bg border-t-[1px] border-t-tz-border"
        }
      >
        <div className={"tz-inner-container h-[60px] "}>
          <Link
            to="/advert"
            className={"hover:text-tz-red-hover text-second-text"}
          >
            Reklam yerləşdirin
          </Link>
          {/*Footer Contact Container*/}
          <div className={"flex items-center"}>
            {/*Email*/}
            <div className={"flex  text-second-text mr-5"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a
                href="mailto:turbo@turbo.az"
                className={"text-second-text hover:text-tz-red-hover ml-2"}
              >
                turbo@turbo.az
              </a>
            </div>
            {/*Phone Number*/}
            <div className={"flex h-[60px] items-center justify-center "}>
              {/*Icon*/}
              <div className={"text-second-text mr-3"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/*Numbers*/}
              <div
                className={"flex flex-col items-center justify-center h-full "}
              >
                <a
                  href="tel:(012) 599-08-01"
                  className={
                    "text-second-text hover:text-tz-red-hover  text-sm"
                  }
                >
                  (012) 599-08-01
                </a>
                <a
                  href="tel:(012) 505-77-55"
                  className={"text-second-text hover:text-tz-red-hover text-sm"}
                >
                  (012) 505-77-55
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Info*/}
      <div className={"tz-container bg-tz-red "}>
        <div className={"h-14  tz-inner-container"}>
          {/*Disclaimer*/}
          <div className={"w-[430px] h-fit   items-center"}>
            <span className={"leading-3 text-sm"}>
              Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş
              elanların məzmununa görə məsuliyyət daşımır.
            </span>
          </div>
          {/*Trademark*/}
          <span className={"leading-3 text-sm"}>
            2006-{new Date().getFullYear()}© Wolf Digital MMC. VÖEN: 1405631661
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
