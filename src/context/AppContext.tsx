import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Journey, Stage, Touchpoint } from '../types/journey';

interface Persona {
  id: string;
  name: string;
  age: string;
  occupation: string;
  goals: string[];
  painPoints: string[];
  customSections?: {
    title: string;
    items: string[];
  }[];
  avatar: string;
}

interface AppContextType {
  personas: Persona[];
  journeys: Journey[];
  addPersona: (persona: Persona) => Promise<void>;
  updatePersona: (persona: Persona) => Promise<void>;
  removePersona: (id: string) => Promise<void>;
  duplicatePersona: (id: string) => Promise<void>;
  addJourney: (journey: Journey) => Promise<void>;
  updateJourney: (journey: Journey) => Promise<void>;
  removeJourney: (id: string) => Promise<void>;
  duplicateJourney: (id: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [journeys, setJourneys] = useState<Journey[]>([]);

  const addPersona = async (persona: Persona) => {
    try {
      setPersonas(prev => [...prev, persona]);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const updatePersona = async (persona: Persona) => {
    try {
      setPersonas(prev => prev.map(p => p.id === persona.id ? persona : p));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const removePersona = async (id: string) => {
    try {
      setPersonas(prev => prev.filter(p => p.id !== id));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const duplicatePersona = async (id: string) => {
    try {
      const persona = personas.find(p => p.id === id);
      if (persona) {
        const duplicate = {
          ...persona,
          id: crypto.randomUUID(),
          name: `${persona.name} (Copy)`,
          avatar: `${persona.avatar.split('?')[0]}?${Math.random()}`
        };
        setPersonas(prev => [...prev, duplicate]);
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const addJourney = async (journey: Journey) => {
    try {
      setJourneys(prev => [...prev, journey]);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const updateJourney = async (journey: Journey) => {
    try {
      setJourneys(prev => prev.map(j => j.id === journey.id ? journey : j));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const removeJourney = async (id: string) => {
    try {
      setJourneys(prev => prev.filter(j => j.id !== id));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const duplicateJourney = async (id: string) => {
    try {
      const journey = journeys.find(j => j.id === id);
      if (journey) {
        const duplicate = {
          ...journey,
          id: crypto.randomUUID(),
          name: `${journey.name} (Copy)`,
          status: 'draft' as const,
          stages: journey.stages.map(stage => ({
            ...stage,
            id: crypto.randomUUID(),
            touchpoints: stage.touchpoints.map(touchpoint => ({
              ...touchpoint,
              id: crypto.randomUUID()
            }))
          }))
        };
        setJourneys(prev => [...prev, duplicate]);
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <AppContext.Provider value={{
      personas,
      journeys,
      addPersona,
      updatePersona,
      removePersona,
      duplicatePersona,
      addJourney,
      updateJourney,
      removeJourney,
      duplicateJourney
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}