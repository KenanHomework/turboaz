import CardContainer from "../card-container/index.js";
import PropTypes from "prop-types";
import SectionTitle from "../section-title/index.js";

const LastListings = ({
  carCount = 12,
  actionBarIsVisible,
  isVisibleSectionTitle,
  optionChange,
  currentOption,
}) => {
  const cars = [];
  for (let i = 0; i < carCount; i++) {
    cars.push({
      id: "7485580",
      price: 288000,
      hasVin: i % 2 === 0,
      title: "BMW XM",
      year: 2023,
      engineVolume: 2.2,
      mileage: 0,
      city: "Bakı",
      updateDate: "19.06.2023 20:14",
      imageLink:
        "https://turbo.azstatic.com/uploads/full/2023%2F06%2F19%2F19%2F52%2F40%2F60a0f564-ab10-4bd8-b816-8c4bd39bb3f1%2F40793_B2AeNymLfy1RrqY9h7F3IQ.jpg",
    });
  }
  return (
    <div className={"bg-primary-bg"}>
      {isVisibleSectionTitle && (
        <SectionTitle
          title={"Son Elanlar"}
          link={"/autos"}
          linkTitle={"Hamısını Göstər"}
        />
      )}
      <CardContainer
        cars={cars}
        actionBarIsVisible={actionBarIsVisible}
        optionChange={optionChange}
        currentOption={currentOption}
      />
    </div>
  );
};

LastListings.propTypes = {
  actionBarIsVisible: PropTypes.bool,
  carCount: PropTypes.number,
  isVisibleSectionTitle: PropTypes.bool,
  optionChange: PropTypes.func,
  currentOption: PropTypes.string,
};

export default LastListings;
