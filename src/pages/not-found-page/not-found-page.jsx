import "./not-found-page.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={"bg-notfound  w-[100vw] h-[100vh]"}
    >
      <div className={"tz-inner-container flex-col  h-fit"}>
        {/*Header*/}
        <div
          className={
            "w-full h-[200px] my-2 inline-flex items-center justify-center "
          }
        >
          <Link to={"/"}>
            <img
              src="https://turbo.azstatic.com/assets/application/errors/logo-8e859dbbbf48fd5fbe5a62ac6d766a9a0d3c9b539a03e198870607dba1dda9f9.svg"
              alt="logo "
            />
          </Link>
        </div>
        {/*Content*/}
        <div className={" w-full h-[350px] flex items-center justify-between "}>
          {/*Left Side*/}
          <div className={"flex flex-col w-fit h-fit gap-2 "}>
            <span className={"font-semibold text-[170px]"}>404</span>
            <span className={"font-semibold text-[30px]"}>
              Bu səhifə tapılmadı.
            </span>
            <Link
              to={"/"}
              className={
                "py-[15px] px-10 bg-tz-red hover:bg-tz-red-hover-dark rounded-lg font-bold   transition-all duration-150 text-center text-lg"
              }
            >
              Baş səhifəyə keçmək
            </Link>
          </div>
          {/*Right Side*/}
          <div>
            <img
              src="https://turbo.azstatic.com/assets/application/errors/not_found-d180a89249fe5583289c1e08cb3f8cfd7726885b18ea98d2c26a658a18fc2490.svg"
              alt="not-found-img"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
