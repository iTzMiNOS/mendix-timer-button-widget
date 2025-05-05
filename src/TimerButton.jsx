import React, { useState, useEffect, createElement } from "react";
import UseGetData from "./hooks/UseGetData";
import './ui/TimerButton.css';

export function TimerButton({ duration, onClickEvent, onClickName, executeFlag, timerAction }) {
    const { timer, isButtonActive, resetTimer } = UseGetData({ duration, executeFlag, timerAction });

    const handleClick = () => {
        if (isButtonActive && onClickEvent && onClickEvent.canExecute) {
            onClickEvent.execute();
            resetTimer(); // Reset the timer to the initial duration after the button is clicked
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            {!isButtonActive && (
                <div style={{ marginBottom: "10px", fontSize: "18px", color: "#fff" }}>
                    Please wait {timer} seconds to {onClickName}
                </div>
            )}
            {isButtonActive && (
            <button 
                disabled={!isButtonActive} 
                className={`btn btn-primary ${isButtonActive ? 'pulse-button' : ''}`} 
                onClick={handleClick}
                style={{ padding: "10px 20px", fontSize: "16px", cursor: isButtonActive ? "pointer" : "not-allowed", opacity: isButtonActive ? 1 : 0.6 }}
            >
                {onClickName}
            </button>)}
        </div>
    );
}