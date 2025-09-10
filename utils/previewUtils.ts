// Simple preview generation utility for transformation effects
import { Transformation } from '../types';

export const getTransformationPreview = (transformation: Transformation): string => {
  // This is a placeholder function that would generate or return preview images
  // In a real implementation, this would use pre-generated thumbnails or AI to create previews
  
  const previewMap: Record<string, string> = {
    '3D Figurine': '🦄',
    'Hair Cut': '💇‍♀️', 
    'Polaroid photo': '📷',
    'Funko Pop Figure': '📦',
    'LEGO Minifigure': '🧱',
    'Crochet Doll': '🧶',
    'Anime to Cosplay': '🎭',
    'Cute Plushie': '🧸',
    'Acrylic Keychain': '🔑',
    'HD Enhance': '🔍',
    'Pose Reference': '💃',
    'To Photorealistic': '🪄',
    'Fashion Magazine': '📸',
    'Hyper-realistic': '✨',
    'Architecture Model': '🏗️',
    'Product Render': '💡',
    'Soda Can Design': '🥤',
    'Industrial Design Render': '🛋️',
    'Color Palette Swap': '🎨',
    'Line Art Drawing': '✍🏻',
    'Painting Process': '🖼️',
    'Marker Sketch': '🖊️',
    'Add Illustration': '🧑‍🎨',
    'Cyberpunk': '🤖',
    'Van Gogh Style': '🌌',
    'Isolate & Enhance': '🎯',
    '3D Screen Effect': '📺',
    'Makeup Analysis': '💄',
    'Change Background': '🪩',
    'Custom Prompt': '✍️'
  };

  return previewMap[transformation.title] || transformation.emoji;
};

export const hasPreview = (transformation: Transformation): boolean => {
  // For now, we'll use emoji as previews. In production, this would check for actual image previews
  return true;
};