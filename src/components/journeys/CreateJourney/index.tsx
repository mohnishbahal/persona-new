import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { toast } from '../../ui/use-toast';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select } from '../../ui/select';
import { PersonaSelector } from '../shared/PersonaSelector';

const steps = [
  { 
    number: 1, 
    title: 'Journey Details',
    description: 'Set up your journey basics'
  },
  { 
    number: 2, 
    title: 'Before Stage',
    description: 'Map pre-interaction touchpoints'
  },
  { 
    number: 3, 
    title: 'During Stage',
    description: 'Define core experience touchpoints'
  },
  { 
    number: 4, 
    title: 'After Stage',
    description: 'Plan post-interaction touchpoints'
  },
  { 
    number: 5, 
    title: 'Review',
    description: 'Preview and finalize your journey'
  }
];

export default function CreateJourney() {
  const { addJourney } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [journey, setJourney] = useState({
    name: '',
    description: '',
    coverImage: null as string | null,
    personaIds: [] as string[],
    state: 'draft' as const,
    stages: [
      {
        id: '1',
        name: 'Before',
        touchpoints: []
      },
      {
        id: '2',
        name: 'During',
        touchpoints: []
      },
      {
        id: '3',
        name: 'After',
        touchpoints: []
      }
    ]
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = async () => {
    try {
      await addJourney({
        ...journey,
        id: crypto.randomUUID(),
        status: 'draft',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      toast({
        title: "Success",
        description: "Journey created successfully"
      });
      window.location.href = '/app/journeys';
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create journey",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Link 
            to="/app/journeys"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Back to Journeys
          </Link>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create Journey
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => {}}
          >
            Show Preview
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white"
          >
            Save Journey
          </Button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-5xl mx-auto pt-8 px-4">
        <div className="flex justify-between mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col items-center ${
                index < steps.length - 1 ? 'w-1/4' : ''
              }`}
            >
              <div className="relative flex items-center justify-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep === step.number 
                    ? 'bg-[#6C47FF] text-white'
                    : currentStep > step.number
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }
                `}>
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    absolute left-10 w-full h-0.5
                    ${currentStep > step.number
                      ? 'bg-[#6C47FF]'
                      : 'bg-gray-200 dark:bg-gray-700'
                    }
                  `} />
                )}
              </div>
              <div className="mt-2 text-center">
                <div className={`
                  text-sm font-medium
                  ${currentStep === step.number
                    ? 'text-[#6C47FF]'
                    : 'text-gray-500 dark:text-gray-400'
                  }
                `}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Journey Name
                </label>
                <Input
                  value={journey.name}
                  onChange={(e) => setJourney(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter journey name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <Textarea
                  value={journey.description}
                  onChange={(e) => setJourney(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the purpose of this journey"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Associated Personas
                </label>
                <PersonaSelector
                  selectedIds={journey.personaIds}
                  onChange={(ids) => setJourney(prev => ({ ...prev, personaIds: ids }))}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Before Stage</h2>
              {/* Before stage touchpoints */}
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">During Stage</h2>
              {/* During stage touchpoints */}
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">After Stage</h2>
              {/* After stage touchpoints */}
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Review Journey</h2>
              {/* Journey review */}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            onClick={currentStep === steps.length ? handleSave : handleNext}
            className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white"
          >
            {currentStep === steps.length ? 'Create Journey' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}