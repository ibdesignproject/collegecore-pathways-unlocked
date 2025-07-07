
import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemover';

interface LogoProcessorProps {
  originalSrc: string;
  alt: string;
  className: string;
}

const LogoProcessor = ({ originalSrc, alt, className }: LogoProcessorProps) => {
  const [processedLogoSrc, setProcessedLogoSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoSrc(processedUrl);
        
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original image
        setProcessedLogoSrc(originalSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalSrc]);

  if (isProcessing) {
    return (
      <div className={className}>
        <div className="animate-pulse bg-gray-200 rounded h-12 w-32"></div>
      </div>
    );
  }

  return (
    <img 
      src={processedLogoSrc || originalSrc} 
      alt={alt} 
      className={className}
    />
  );
};

export default LogoProcessor;
