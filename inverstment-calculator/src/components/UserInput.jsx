
import Field from "./Field";

export default function UserInput({ userInput, onChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p><Field label={'Initial Investment'}
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} /></p>

                <p><Field label={'annual Investment'}
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} /></p>
            </div>
            
            <div className="input-group">
                <p><Field label={'expected Return'}
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} /></p>

                <p><Field label={'duration'}
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} /></p>
            </div>
        </section>
    );
}