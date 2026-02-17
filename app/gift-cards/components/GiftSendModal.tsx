"use client";

import { useState } from "react";
import { GiftCard } from "../type";

interface Props {
  selectedCard: GiftCard | null;
  onClose: () => void;
}

export default function GiftSendModal({ selectedCard, onClose }: Props) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    amount: "",
    occasion: "",
    receiverFirstName: "",
    receiverLastName: "",
    receiverEmail: "",
    receiverPhone: "",
    message: "",
    senderFirstName: "",
    senderLastName: "",
    senderEmail: "",
    senderPhone: "",
  });

  if (!selectedCard) return null;

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[1130px] h-[780px] bg-white rounded-[20px] p-10 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        {/* Step Indicator */}
        {step <= 3 && <Stepper step={step} />}

        {/* Step Content */}
        {step === 1 && (
          <StepOne
            selectedCard={selectedCard}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            selectedCard={selectedCard}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <StepThree
            selectedCard={selectedCard}
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 4 && (
          <FinalStep
            formData={formData}
            selectedCard={selectedCard}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
function Stepper({ step }: { step: number }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="ml-96 w-[510px] flex items-center">
        {[1, 2, 3].map((num, index) => (
          <div key={num} className="flex items-center w-full">
            <div
              className={`
            w-[48px] h-[48px]
            rounded-full
            flex items-center justify-center
            text-[18px] font-medium
            border-2
            ${
              step >= num
                ? "border-[#FF6A00] text-[#FF6A00]"
                : "border-gray-300 text-gray-400"
            }
          `}
            >
              {num}
            </div>

            {index !== 2 && (
              <div
                className={`
              flex-1 h-[2px]
              ${step > num ? "bg-[#FF6A00]" : "bg-gray-300"}
            `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function StepOne({ selectedCard, formData, setFormData, nextStep }: any) {
  const isCustom = selectedCard.type === "custom";

  return (
    <div className="flex gap-12 mt-6">
      {/* ================= LEFT PANEL ================= */}
      <div className="w-[360px]">
        <p className="text-sm text-gray-500 mb-4">Your Selected Card</p>

        {/* Card Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={selectedCard.image}
            className="w-full h-[210px] object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xl font-semibold">
              ₹ {formData.amount || "2,000"}
            </p>
            <p className="text-sm opacity-90">Happy Holidays!</p>
          </div>
        </div>

        {/* Savings Badge */}
        <div className="bg-[#DFF5F2] text-[#16242A] text-sm px-4 py-3 rounded-xl mt-4 mb-6">
          You just saved ₹100 on your gift card 🎉
        </div>

        <h3 className="text-lg font-semibold mb-1">{selectedCard.title}</h3>

        <p className="text-sm text-gray-500">{selectedCard.subtitle}</p>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-200" />

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 mb-1">Step 1 of 3</p>

        <h2 className="text-2xl font-semibold mb-8">
          {isCustom ? "Enter Occasion & Gift Amount" : "Enter Gift Amount"}
        </h2>

        {/* Custom Card Fields */}
        {isCustom && (
          <>
            <input
              placeholder="Enter Occasion"
              className="w-[420px] border border-gray-200 px-5 py-4 rounded-2xl mb-4 focus:border-[#FF6A00] outline-none"
              value={formData.occasion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  occasion: e.target.value,
                })
              }
            />

            <div className="w-[420px] border border-dashed border-gray-300 p-6 rounded-2xl text-center text-gray-400 mb-6">
              Upload Custom Image (Optional)
            </div>
          </>
        )}

        {/* Amount Input */}
        <input
          placeholder="Enter Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({
              ...formData,
              amount: e.target.value,
            })
          }
          className="w-[420px] border border-gray-200 px-5 py-4 rounded-2xl mb-6 focus:border-[#FF6A00] outline-none"
        />

        {/* Preset Buttons */}
        <div className="flex gap-4 mb-12">
          {[1000, 10000, 25000, 50000].map((amt) => (
            <button
              key={amt}
              onClick={() =>
                setFormData({
                  ...formData,
                  amount: amt.toString(),
                })
              }
              className="px-6 py-3 border border-gray-200 rounded-2xl text-sm hover:border-[#FF6A00] transition"
            >
              {amt.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextStep}
          className="bg-[#16242A] text-white px-12 py-3 rounded-2xl text-sm hover:opacity-90 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function StepTwo({
  selectedCard,
  formData,
  setFormData,
  nextStep,
  prevStep,
}: any) {
  return (
    <div className="flex gap-12 mt-6">
      {/* ================= LEFT PANEL ================= */}
      <div className="w-[360px]">
        <p className="text-sm text-gray-500 mb-4">Your Selected Card</p>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={selectedCard.image}
            className="w-full h-[210px] object-cover"
          />

          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xl font-semibold">
              ₹ {formData.amount || "2,000"}
            </p>
            <p className="text-sm opacity-90">{selectedCard.title}</p>
          </div>
        </div>

        <div className="bg-[#DFF5F2] text-[#16242A] text-sm px-4 py-3 rounded-xl mt-4 mb-6">
          You just saved ₹100 on your gift card 🎉
        </div>

        <h3 className="text-lg font-semibold mb-1">{selectedCard.title}</h3>

        <p className="text-sm text-gray-500">{selectedCard.subtitle}</p>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-200" />

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex-1 flex flex-col items-center">
        <p className="text-sm text-gray-500 mb-1">Step 2 of 3</p>

        <h2 className="text-2xl font-semibold mb-8">Enter Receiver Details</h2>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 w-[420px] mb-4">
          <input
            placeholder="First Name"
            className="border border-gray-200 px-5 py-4 rounded-2xl focus:border-[#FF6A00] outline-none"
            value={formData.receiverFirstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                receiverFirstName: e.target.value,
              })
            }
          />
          <input
            placeholder="Last Name"
            className="border border-gray-200 px-5 py-4 rounded-2xl focus:border-[#FF6A00] outline-none"
            value={formData.receiverLastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                receiverLastName: e.target.value,
              })
            }
          />
        </div>

        {/* Email */}
        <input
          placeholder="Receiver's Email"
          className="w-[420px] border border-gray-200 px-5 py-4 rounded-2xl mb-4 focus:border-[#FF6A00] outline-none"
          value={formData.receiverEmail}
          onChange={(e) =>
            setFormData({
              ...formData,
              receiverEmail: e.target.value,
            })
          }
        />

        {/* Phone with Flag */}
        <div className="w-[420px] flex items-center border border-gray-200 rounded-2xl mb-4 overflow-hidden">
          <div className="flex items-center px-4 gap-2 border-r border-gray-200">
            <img src="https://flagcdn.com/w40/in.png" className="w-5" />
            <span className="text-sm">+91</span>
          </div>
          <input
            placeholder="Receiver's Phone Number"
            className="flex-1 px-4 py-4 outline-none"
            value={formData.receiverPhone}
            onChange={(e) =>
              setFormData({
                ...formData,
                receiverPhone: e.target.value,
              })
            }
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Write your message (Max limit 250 words)"
          rows={4}
          className="w-[420px] border border-gray-200 px-5 py-4 rounded-2xl mb-10 resize-none focus:border-[#FF6A00] outline-none"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevStep}
            className="px-8 py-3 border border-gray-300 rounded-2xl text-sm"
          >
            Back
          </button>

          <button
            onClick={nextStep}
            className="bg-[#16242A] text-white px-12 py-3 rounded-2xl text-sm hover:opacity-90 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function StepThree({
  selectedCard,
  formData,
  setFormData,
  nextStep,
  prevStep,
}: any) {
  if (!selectedCard) return null;

  return (
    <div className="flex gap-12 mt-6 h-[600px]">
      {/* LEFT PANEL */}
      <div className="w-[360px]">
        <p className="text-sm text-gray-500 mb-4">Your Selected Card</p>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={selectedCard.image}
            className="w-full h-[210px] object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xl font-semibold">
              ₹ {formData.amount || "2,000"}
            </p>
            <p className="text-sm opacity-90">Happy Holidays!</p>
          </div>
        </div>

        <div className="bg-[#DFF5F2] text-[#16242A] text-sm px-4 py-3 rounded-xl mt-4 mb-6">
          You just saved ₹100 on your gift card 🎉
        </div>

        <h3 className="text-lg font-semibold mb-1">Happy Holidays Gift Card</h3>

        <p className="text-sm text-gray-500">
          Wrap up the season with the gift of travel.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-200" />

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 mb-1">Step 3 of 3</p>

        <h2 className="text-2xl font-semibold mb-8">Enter Sender Details</h2>

        <div className="w-[420px] space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First Name"
              className="border border-gray-200 px-4 py-3 rounded-2xl"
              value={formData.senderFirstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  senderFirstName: e.target.value,
                })
              }
            />
            <input
              placeholder="Last Name"
              className="border border-gray-200 px-4 py-3 rounded-2xl"
              value={formData.senderLastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  senderLastName: e.target.value,
                })
              }
            />
          </div>

          {/* Email */}
          <input
            placeholder="Sender Email"
            className="border border-gray-200 px-4 py-3 rounded-2xl w-full"
            value={formData.senderEmail}
            onChange={(e) =>
              setFormData({
                ...formData,
                senderEmail: e.target.value,
              })
            }
          />

          {/* Phone */}
          <input
            placeholder="Sender Phone Number"
            className="border border-gray-200 px-4 py-3 rounded-2xl w-full"
            value={formData.senderPhone}
            onChange={(e) =>
              setFormData({
                ...formData,
                senderPhone: e.target.value,
              })
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button onClick={prevStep} className="px-6 py-3 border rounded-2xl">
            Back
          </button>

          <button
            onClick={nextStep}
            className="bg-[#16242A] text-white px-8 py-3 rounded-2xl hover:opacity-90"
          >
            final Login & Send Gift Card
          </button>
        </div>
      </div>
    </div>
  );
}

function FinalStep({ formData, selectedCard, onClose }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] text-center">
      <img src={selectedCard.image} className="w-[260px] rounded-2xl mb-8" />

      <h2 className="text-2xl font-semibold text-[#FF6A00] mb-3">
        Gift Card Ready To Send!
      </h2>

      <p className="text-lg mb-2">Amount To Be Paid: ₹{formData.amount}</p>

      <p className="text-sm text-gray-500 max-w-[400px] mb-8">
        Our team representative will promptly reach out to you to confirm the
        details and assist with the payment.
      </p>

      <button
        onClick={onClose}
        className="bg-[#16242A] text-white px-10 py-3 rounded-2xl hover:opacity-90"
      >
        Go To Home
      </button>
    </div>
  );
}
