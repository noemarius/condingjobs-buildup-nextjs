import { useEffect, useState } from "react";
import styled from "styled-components";

const ClockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: palevioletred;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    align-items: center;
    flex: 0 0 20%;
    gap: 12px;
`;

const ClockButton = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export function Clock() {
    let [time, setTime] = useState(0);
    let [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (isRunning) {
            const iterTime = setInterval(function () {
                setTime((previous) => previous + 1);
            }, 1000);
            return function () {
                clearInterval(iterTime);
            };
        }
    }, [isRunning]);

    return (
        <>
            <ClockWrapper>
                <span>{new Date(time * 1000).toISOString().slice(11, 19)}</span>
                <button
                    className="pauseButton"
                    onClick={() => {
                        setIsRunning((prev) => !prev);
                    }}
                >
                    Pause
                </button>
            </ClockWrapper>

            <style jsx>{`
                span {
                    font-size: 46px;
                }
            `}</style>
        </>
    );
}
