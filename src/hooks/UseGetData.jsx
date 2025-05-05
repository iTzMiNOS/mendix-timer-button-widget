import React from 'react';
import { createElement } from "react";
import { useState, useEffect } from "react";

const UseGetData = ({ duration, executeFlag, timerAction }) => {
    const [timer, setTimer] = useState(duration);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (timer === 0 && executeFlag && timerAction && timerAction.canExecute) {
            timerAction.execute();
        }
    }, [timer, executeFlag, timerAction, duration]);

    return {
        timer,
        isButtonActive: timer === 0,
        resetTimer: () => setTimer(duration) // Provide a function to reset the timer
    };
};

export default UseGetData;