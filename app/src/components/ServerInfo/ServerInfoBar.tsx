import { ArrowDownToDotIcon, ArrowUpFromDotIcon, Database, ShieldCheck } from 'lucide-react';

import { ColoredButton } from '../ColoredButton/ColoredButton';
import { Typography } from '../Typography/Typography';

interface ServerInfoBarProps {
  url: string;
}

export const ServerInfoBar = ({ url }: ServerInfoBarProps) => (
  <div className='flex w-full justify-center py-2.5'>
    <div className='flex w-page gap-m'>
      <Typography variant='h1'>
        {`Server on `}
        <a href={url} className='underline hover:text-foreground-secondary'>
          {url}
        </a>
      </Typography>
      <ColoredButton isDisable tooltipText='Database'>
        <Database className='h-icon-m stroke-[2.5px]' />
      </ColoredButton>
      <ColoredButton isDisable tooltipText='Request interceptors'>
        <ArrowDownToDotIcon className='h-icon-m stroke-[2.5px]' />
      </ColoredButton>
      <ColoredButton tooltipText='Response interceptors'>
        <ArrowUpFromDotIcon className='h-icon-m stroke-[2.5px]' />
      </ColoredButton>
      <ColoredButton isDisable tooltipText='CORS'>
        <ShieldCheck className='h-icon-m stroke-[2.5px]' />
      </ColoredButton>
    </div>
  </div>
);
