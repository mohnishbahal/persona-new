import React, { useRef } from 'react';
import { Camera, X } from 'lucide-react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { toast } from '../../ui/use-toast';
import { cn } from '@/lib/utils';

interface TouchpointFormProps {
  touchpoint: {
    name: string;
    description: string;
    customerAction: string;
    image?: string;
  };
  onChange: (updates: Partial<TouchpointFormProps['touchpoint']>) => void;
}

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export function TouchpointForm({ touchpoint, onChange }: TouchpointFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateImage = (file: File): string | null => {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return 'Invalid file type. Please upload a JPEG, PNG, or WebP image.';
    }
    if (file.size > MAX_IMAGE_SIZE) {
      return 'Image size should be less than 5MB.';
    }
    return null;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateImage(file);
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onChange({ image: undefined });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Touchpoint Image
        </label>
        <div className="relative">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "relative group cursor-pointer",
              "aspect-video rounded-lg overflow-hidden border-2 border-dashed",
              "transition-colors duration-200",
              touchpoint.image ? 'border-transparent' : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
            )}
          >
            {touchpoint.image ? (
              <>
                <img 
                  src={touchpoint.image} 
                  alt="Touchpoint visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage();
                  }}
                  className="absolute top-2 right-2 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" />
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Click to add an image
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  JPEG, PNG, or WebP, max 5MB
                </p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={ALLOWED_IMAGE_TYPES.join(',')}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Touchpoint Name
        </label>
        <Input
          value={touchpoint.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Name this touchpoint"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <Textarea
          value={touchpoint.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="Describe what happens at this touchpoint"
          rows={3}
        />
      </div>

      {/* Customer Action */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Customer Action
        </label>
        <Textarea
          value={touchpoint.customerAction}
          onChange={(e) => onChange({ customerAction: e.target.value })}
          placeholder="What action does the customer take?"
          rows={3}
        />
      </div>
    </div>
  );
}