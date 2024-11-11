import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Map, Plus, Save } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { useApp } from '../../../context/AppContext';
import { toast } from '../../ui/use-toast';

export default function JourneyBuilder() {
  const navigate = useNavigate();
  const { addJourney } = useApp();
  const [loading, setLoading] = useState(false);
  const [journey, setJourney] = useState({
    name: '',
    description: '',
    stages: [
      { id: '1', name: 'Before', touchpoints: [] },
      { id: '2', name: 'During', touchpoints: [] },
      { id: '3', name: 'After', touchpoints: [] }
    ],
    personaIds: [],
    status: 'draft' as const
  });

  const handleSave = async () => {
    if (!journey.name) {
      toast({
        title: "Error",
        description: "Please enter a journey name",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      await addJourney({
        ...journey,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        coverImage: null
      });
      toast({
        title: "Success",
        description: "Journey created successfully"
      });
      navigate('/app/journeys');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create journey",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/app/journeys')}
          icon={ChevronLeft}
        >
          Back to Journeys
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create Journey</h1>
          <p className="text-gray-600 dark:text-gray-300">Map out your customer's journey</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={loading}
          icon={Save}
          className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white"
        >
          {loading ? 'Saving...' : 'Save Journey'}
        </Button>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Journey Name
              </label>
              <Input
                value={journey.name}
                onChange={(e) => setJourney({ ...journey, name: e.target.value })}
                placeholder="Enter journey name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <Textarea
                value={journey.description}
                onChange={(e) => setJourney({ ...journey, description: e.target.value })}
                placeholder="Describe the purpose of this journey"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {journey.stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {stage.name} Stage
              </h3>
              {stage.touchpoints.length === 0 ? (
                <div className="text-center py-8">
                  <Map className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">No touchpoints yet</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Plus}
                    className="mt-2"
                    onClick={() => {
                      // Add touchpoint logic here
                    }}
                  >
                    Add Touchpoint
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}