import clsx from "clsx";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import useCountdown from "../../hooks/use-countdown";

const DateTimeDisplay = dynamic(() => import("./date-time-display"), {
    ssr: false,
});


const Countdown = ({ date, className }) => {
    const [days, hours, minutes, seconds] = useCountdown(date);

    return (
        <div className={clsx("timer timer-style", className)}>
            <DateTimeDisplay value={days} type="days" />
            <DateTimeDisplay value={hours} type="hours" />
            <DateTimeDisplay value={minutes} type="minutes" />
            <DateTimeDisplay value={seconds} type="seconds" />
        </div>
    );
};

Countdown.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string,
}


export default Countdown;