"use client"

import { useState } from "react"
import CustomizationModal from "./CustomizationModal"
import { StateDataType } from "../stateData"

export default function StatePageClient({ stateData }: { stateData: StateDataType }) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative flex h-screen flex-col items-center justify-center text-center text-white">

        <p className="text-white/80 text-sm">
          Explore The Beauty Of {stateData.name}
        </p>

        <h1 className="text-[70px] md:text-[120px] font-bold uppercase">
          {stateData.name}
        </h1>

        <button
          style={{ background: stateData.theme.primary }}
          className="mt-6 px-8 py-4 rounded-xl font-semibold text-black"
        >
          Explore {stateData.name}
        </button>

        <button
          onClick={() => setOpen(true)}
          className="absolute bottom-12 text-sm underline"
        >
          Customize Now
        </button>

      </section>

      <CustomizationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        stateName={stateData.name}
        theme={stateData.theme}
      />
    </>
  )
}
