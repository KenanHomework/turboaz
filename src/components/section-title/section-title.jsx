import PropTypes from "prop-types";

const SectionTitle = ({ title, linkTitle, link }) => {
  return (
    <div
      className={
        "tz-container border-y-tz-border bg-secondary-bg border-y-[1px] "
      }
    >
      <div className={"tz-inner-container h-[60px]"}>
        <span className={"font-bold uppercase text-second-text"}>{title}</span>
        <div>
          <a
            className={"cursor-pointer underline-animation text-blue-400 "}
            href={link}
          >
            {linkTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  linkTitle: PropTypes.string,
  link: PropTypes.string,
};

export default SectionTitle;
