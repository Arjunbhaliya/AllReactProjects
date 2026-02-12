import { useState } from "react";
import Field from "./Field";

export default function UserInput({ userInput, onChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p><Field lable={'initialInvestment'}
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} /></p>

                <p><Field lable={'annualInvestment'}
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} /></p>
            </div>
            
            <div className="input-group">
                <p><Field lable={'expectedReturn'}
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} /></p>

                <p><Field lable={'duration'}
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} /></p>
            </div>
        </section>
    );
}