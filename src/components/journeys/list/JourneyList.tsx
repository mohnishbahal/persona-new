import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Plus, Search } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { PageHeader } from '../../ui/PageHeader';
import { toast } from '../../ui/use-toast';

export default function JourneyList() {
  const navigate = useNavigate();
  const { journeys } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJourneys = journeys.filter(journey =>
    journey.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    journey.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateJourney = () => {
    navigate('/app/journeys/new');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Journey Maps"
        description="Create and manage your customer journey maps"
        action={
          <Button
            onClick={handleCreateJourney}
            icon={Plus}
            className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white"
          >
            New Journey
          </Button>
        }
      />

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <Input
          type="text"
          placeholder="Search journeys..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {filteredJourneys.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <Map className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No journeys found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {searchTerm ? 'Try adjusting your search terms' : 'Start by creating your first journey map'}
          </p>
          <Button
            onClick={handleCreateJourney}
            icon={Plus}
            className="bg-[#6C47FF] hover:bg-[#5A3CD7] text-white"
          >
            Create Journey
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJourneys.map((journey) => (
            <div
              key={journey.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-700">
                {journey.coverImage ? (
                  <img
                    src={journey.coverImage}
                    alt={journey.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Map className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {journey.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {journey.description}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    journey.status === 'draft'
                      ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      : journey.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                  }`}>
                    {journey.status.charAt(0).toUpperCase() + journey.status.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(journey.updatedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {journey.personaIds.map((id, index) => (
                      <div
                        key={id}
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center"
                      >
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                          P{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {journey.stages.length} stages
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}