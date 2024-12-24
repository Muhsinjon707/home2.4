import "./index.css"
import WeekDay from "../WeekDay";

function WeekDays() {
    return (
        <ul className="nav">
            <WeekDay day="Monday"/>
            <WeekDay day="Tuesday"/>
            <WeekDay day="Wednesday"/>
            <WeekDay day="Thursday"/>
            <WeekDay day="Friday"/>
            <WeekDay day="Saturday"/>
            <WeekDay day="Sunday"/>
        </ul>
    );
}

export default WeekDays;