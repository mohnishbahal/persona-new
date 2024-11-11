import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { PersonaSelector } from '../shared/PersonaSelector';
import { cn } from '@/lib/utils';

interface JourneyFormProps {
  form: {
    name: string;
    description: string;
    coverImage: string | null;
    personaIds: string[];
  };
  onChange: (updates: Partial<JourneyFormProps['form']>) => void;
}

export function JourneyForm({ form, onChange }: JourneyFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Cover Image
        </label>
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="relative group cursor-pointer"
        >
          <div className={cn(
            "aspect-video rounded-lg overflow-hidden border-2 border-dashed",
            "transition-colors duration-200",
            form.coverImage ? 'border-transparent' : 'border-muted hover:border-muted-foreground'
          )}>
            {form.coverImage ? (
              <>
                <img 
                  src={form.coverImage} 
                  alt="Journey cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-muted-foreground">
                  Add a cover image
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Recommended size: 1280x360px
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Journey Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Journey Name
        </label>
        <Input
          value={form.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Enter journey name"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <Textarea
          value={form.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="Describe the purpose of this journey"
          rows={3}
        />
      </div>

      {/* Associated Personas */}
      <PersonaSelector
        selectedIds={form.personaIds}
        onChange={(ids) => onChange({ personaIds: ids })}
      />
    </div>
  );
}