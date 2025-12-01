import type { ReactNode } from 'react';

// Gallery
export interface Photo {
  id: number;
  src: string;
  alt: string;
  description?: string;
  tags: string[];
}

// Magazine Section
export interface MagazineSectionProps {
  title: string;
  description: ReactNode;
  imagePosition: 'left' | 'right';
  aspectRatio: 'landscape' | 'square';
  gradientFrom: string;
  gradientTo: string;
  titleColor: string;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}

// Story Modal
export interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}

// Contact Section
export interface ContactSectionProps {
  titleColor: string;
  phone: string;
  phoneLink: string;
  linkColor: string;
  linkHoverColor: string;
  businessHours?: string;
}

// Button Props
export interface ButtonProps {
  onClick: () => void;
  bgColor: string;
  hoverColor: string;
}

// Location/Route Props
export interface RouteStopNodeProps {
  name: string;
  bgColor: string;
  textColor?: string;
  photoAreaColor: string;
  borderColor?: string;
  className?: string;
  photoSrc?: string;
}

export interface RouteNodeProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

// Facility
export interface FacilityBannerProps {
  title: string;
  link: string;
  gradientFrom: string;
  gradientTo: string;
  carIconColor: string;
  distance: string;
  description: string;
  mapSrc: string;
  mapTitle: string;
  zIndex?: number;
  photoSrc?: string;
}

// Gallery
export interface PhotoGridItemProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

export interface LightboxProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}
