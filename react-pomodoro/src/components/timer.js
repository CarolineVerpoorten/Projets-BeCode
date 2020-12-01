import React from "react";

export default class Timer extends React.Component {
    render() {
        function timer(number) {
            const timeNumber = `0${number}`.slice(-2);
            return timeNumber;
        }

        const time = {
            hours: Math.floor(this.props.seconds / (60 * 60)),
            minutes: Math.floor((this.props.seconds / 60) % 60),
            seconds: Math.floor(this.props.seconds % 60),
        };

        return (
            <div className={"timer"}>
                <p className={"timer-txt"}>
                    {`${timer(time.hours)}:${timer(time.minutes)}:${timer(
                        time.seconds,
                    )}`}
                </p>
            </div>
        );
    }
}
