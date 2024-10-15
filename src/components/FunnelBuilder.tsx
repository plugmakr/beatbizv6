import React, { useState } from 'react'
import { PlusCircle, ArrowDown } from 'lucide-react'

const FunnelBuilder = () => {
  const [funnel, setFunnel] = useState([
    { id: 1, type: 'Landing Page', title: 'Beat Showcase' },
    { id: 2, type: 'Email Opt-in', title: 'Free Beat Pack' },
    { id: 3, type: 'Sales Page', title: 'Premium Beat Collection' },
  ])

  const addStep = () => {
    const newStep = { id: Date.now(), type: 'New Step', title: 'Untitled' }
    setFunnel([...funnel, newStep])
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Funnel Builder</h1>
      <div className="space-y-4">
        {funnel.map((step, index) => (
          <React.Fragment key={step.id}>
            <FunnelStep step={step} />
            {index < funnel.length - 1 && (
              <div className="flex justify-center">
                <ArrowDown size={24} className="text-gray-400" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={addStep}
        className="mt-6 flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        <PlusCircle size={20} />
        <span>Add Step</span>
      </button>
    </div>
  )
}

const FunnelStep = ({ step }: { step: { type: string; title: string } }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{step.title}</h3>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">{step.type}</span>
      </div>
      <div className="space-y-2">
        <button className="text-indigo-600 hover:underline">Edit</button>
        <button className="text-indigo-600 hover:underline ml-4">Preview</button>
      </div>
    </div>
  )
}

export default FunnelBuilder