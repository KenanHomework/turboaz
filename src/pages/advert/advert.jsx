import { motion } from "framer-motion";
import SectionTitle from "../../components/section-title/index.js";
import { Link } from "react-router-dom";

const Advert = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { translateY: 20, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={"tz-container bg-component-bg  flex-col"}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <SectionTitle title={"SAYTDA REKLAM"} />
      <div className={"tz-inner-container"}>
        <div className={"w-full my-6 flex flex-col gap-4"}>
          <motion.span variants={item}>
            <Link
              className={"underline-animation text-blue-400 select-none"}
              to={"/"}
            >
              Turbo.az
            </Link>{" "}
            - Azərbaycanın ən məşhur və stabil artan internet resurslarından
            biridir və avtomobil alqı-satqısında şübhəsiz lider olan bir
            saytdır. Hər ay bu saytı 1 milyondan artıq istifadəçi ziyarət edir!
          </motion.span>
          <motion.span variants={item}>
            <Link
              className={"underline-animation text-blue-400 select-none"}
              to={"/"}
            >
              Turbo.az
            </Link>{" "}
            saytında reklam sizin brendləriniz, məhsullarınız, xidmətləriniz,
            aksiyalarınız və əhəmiyyətli hadisələriniz barədə məlumatı çox geniş
            auditoriyaya çatdırmaq üçün ən gözəl üsüllarından biridir!
          </motion.span>

          <motion.span variants={item}>
            saytında reklam sizin brendləriniz, məhsullarınız, xidmətləriniz,
            aksiyalarınız və əhəmiyyətli hadisələriniz barədə məlumatı çox geniş
            auditoriyaya çatdırmaq üçün ən gözəl üsüllarından biridir!
          </motion.span>

          <motion.span variants={item}>
            Sizinlə əməkdaşlığa şad olardıq!
          </motion.span>

          <motion.a
            variants={item}
            className={"w-fit text-blue-400 underline-animation"}
            href="mailto:info@digit.az"
          >
            info@digit.az
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Advert;
