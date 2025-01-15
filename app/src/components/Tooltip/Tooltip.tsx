import React from 'react';

import {
  TooltipContent,
  TooltipProvider,
  Tooltip as TooltipSCUI,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { Typography } from '../Typography/Typography';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

export const Tooltip = ({ children, text }: TooltipProps) => (
  <TooltipProvider>
    <TooltipSCUI>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <Typography>{text}</Typography>
      </TooltipContent>
    </TooltipSCUI>
  </TooltipProvider>
);
