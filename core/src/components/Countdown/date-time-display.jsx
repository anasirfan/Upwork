import PropTypes from "prop-types";

const DateTimeDisplay = ({ value, type }) => {
    return (
        <span className="single-countdown">
            <span className="single-countdown__time">{value}</span>
            <span className="single-countdown__text">{type}</span>
        </span>
    );
};

DateTimeDisplay.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}

export default DateTimeDisplay;