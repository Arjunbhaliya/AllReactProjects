import { useEffect } from "react";
import PrrogressBar from "./ProgressBar";

const TIME = 3000

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm()
      console.log("set time")
    }, TIME)

    return () => {
      console.log("clear")
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <PrrogressBar timer={TIME} />
    </div>
  );
}
