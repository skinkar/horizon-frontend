import { useState } from "react"
import Stepper from "./Stepper"
import SuccessPopup from "./SuccessPopup"

export default function GiftCardModal({ card, onClose }) {

  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState(2000)
  const [receiver, setReceiver] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    // Later call backend API
    setSuccess(true)
  }

  if (success) return <SuccessPopup onClose={onClose} />

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="bg-white w-[700px] rounded-xl p-8">

        <Stepper currentStep={step} />

        {step === 1 && (
          <div>
            <h3>Select Amount</h3>
            <div className="flex gap-4 mt-4">
              {[1000, 2000, 5000].map(val => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`px-4 py-2 border rounded ${
                    amount === val ? "bg-orange-500 text-white" : ""
                  }`}
                >
                  ₹{val}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-6 bg-black text-white px-6 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Enter Receiver Details</h3>

            <input
              placeholder="Receiver Name"
              className="border p-2 w-full mt-4"
              onChange={(e) =>
                setReceiver({ ...receiver, name: e.target.value })
              }
            />

            <input
              placeholder="Receiver Email"
              className="border p-2 w-full mt-3"
              onChange={(e) =>
                setReceiver({ ...receiver, email: e.target.value })
              }
            />

            <textarea
              placeholder="Message"
              className="border p-2 w-full mt-3"
              onChange={(e) =>
                setReceiver({ ...receiver, message: e.target.value })
              }
            />

            <button
              onClick={() => setStep(3)}
              className="mt-6 bg-black text-white px-6 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Confirm Details</h3>
            <p>Amount: ₹{amount}</p>
            <p>Receiver: {receiver.name}</p>

            <button
              onClick={handleSubmit}
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded"
            >
              Send Gift Card
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
