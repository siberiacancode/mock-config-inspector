import { MessageCircleQuestion, MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui';
import { useScheme } from '@/utils/context';

import { GitHubIcon, LogoIcon, NpmIcon } from '../icons';

const THEME_OPTIONS = {
  light: SunIcon,
  dark: MoonIcon,
  system: SunMoonIcon
};

export const Header = () => {
  const { scheme, toggleScheme } = useScheme();

  const Icon = THEME_OPTIONS[scheme];

  return (
    <header className='flex w-full justify-center bg-background-secondary'>
      <div className='flex h-[4.5rem] w-page justify-between items-center'>
        <a href='/' rel='noopener noreferrer'>
          <LogoIcon />
        </a>
        <div className='flex items-center gap-xl'>
          <div className='cursor-pointer h-icon-l w-icon-l opacity-60 hover:opacity-100'>
            <a
              href='https://www.npmjs.com/package/mock-config-server'
              rel='noopener noreferrer'
              target='_blank'
            >
              <NpmIcon />
            </a>
          </div>
          <div className='cursor-pointer h-icon-l w-icon-l opacity-60 hover:opacity-100'>
            <a
              href='https://github.com/siberiacancode/mock-config-server'
              rel='noopener noreferrer'
              target='_blank'
            >
              <GitHubIcon />
            </a>
          </div>
          <div className='cursor-pointer opacity-60 hover:opacity-100'>
            <a
              href='https://github.com/siberiacancode/mock-config-server/issues'
              rel='noopener noreferrer'
              target='_blank'
            >
              <MessageCircleQuestion>
                <title>Github - issues</title>
              </MessageCircleQuestion>
            </a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex cursor-pointer items-center gap-2 rounded-md p-2 opacity-60 hover:opacity-100'>
                <Icon />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='border-0'>
              {Object.entries(THEME_OPTIONS).map(([name, Icon]) => (
                <DropdownMenuItem
                  key={name}
                  className='gap-2'
                  onClick={() => toggleScheme(name as Scheme)}
                >
                  <Icon className='size-5' /> {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
