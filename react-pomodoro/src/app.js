import React from "react";
import Timer from "./components/timer";
import Button from "./components/button";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            notRunning: true,
            play: false,
            finished: false,
            seconds: 1500,
            maxValue: 1500,
            cpt: 0,
        };

        this.timerReset = this.timerReset.bind(this);
        this.timerEnd = this.timerEnd.bind(this);
        this.timerChange = this.timerChange.bind(this);

        this.timerIncrement = this.timerIncrement.bind(this);
        this.timerDecrement = this.timerDecrement.bind(this);
    }

    ticTac() {
        this.setState(state => {
            if (state.seconds > 0 && state.play === true) {
                return {
                    seconds: state.seconds - 1,
                };
            }
            return state;
        });

        if (this.state.seconds === 0) {
            const audio = new Audio(
                "https://www.trekcore.com/audio/redalertandklaxons/tng_red_alert2.mp3",
            );
            audio.play();

            if (this.state.finished === false) {
                this.setState(previousState => ({
                    cpt: previousState.cpt,
                }));
                this.timerEnd();
            } else {
                this.timerReset();
            }
        }
    }

    timerIncrement() {
        this.setState(previousState => ({
            seconds: previousState.seconds + 60,
            maxValue: previousState.seconds + 60,
        }));
    }

    timerDecrement() {
        if (this.state.seconds >= 60) {
            this.setState(previousState => ({
                seconds: previousState.seconds - 60,
                maxValue: previousState.seconds - 60,
            }));
        }
    }

    timerChange() {
        if (this.state.play === false) {
            this.interval = setInterval(() => this.ticTac(), 1000);

            this.setState({
                play: true,
                notRunning: false,
            });
        } else {
            clearInterval(this.interval);

            this.setState({
                play: false,
            });
        }
    }

    timerEnd() {
        this.setState({
            play: false,
            finished: true,
        });

        if (this.state.cpt % 5 === 0) {
            this.setState({
                seconds: 1500,
                maxValue: 1500,
            });
        } else {
            this.setState({
                seconds: 300,
                maxValue: 300,
            });
        }
    }

    timerReset() {
        clearInterval(this.interval);
        this.setState({
            seconds: 1500,
            maxValue: 1500,
            play: false,
            notRunning: true,
            finished: false,
        });
    }

    render() {
        return (
            <div className={"main"}>
                <div className={"title-container"}>
                    <h1 className={"title"}>{"Pomodoro"}</h1>
                </div>

                <div className={"timer-container"}>
                    {this.state.finished === true ? (
                        <h3>{"Time to take a break!"}</h3>
                    ) : (
                        <Timer
                            seconds={this.state.seconds}
                            maxValue={this.state.maxValue}
                            className={"timer"}
                        />
                    )}

                    <div className={"flex-container"}>
                        <div className={"round-button"}>
                            {this.state.finished || this.state.play === true ? (
                                ""
                            ) : (
                                <Button
                                    handleClick={this.timerDecrement}
                                    label={" - "}
                                />
                            )}
                        </div>

                        {this.state.finished ? (
                            ""
                        ) : (
                            <Button
                                handleClick={this.timerChange}
                                label={
                                    this.state.play === true ? "Stop" : "Start"
                                }
                            />
                        )}

                        <Button handleClick={this.timerReset} label={"Reset"} />

                        <div className={"round-button"}>
                            {this.state.finished || this.state.play === true ? (
                                ""
                            ) : (
                                <Button
                                    handleClick={this.timerIncrement}
                                    label={"+"}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
