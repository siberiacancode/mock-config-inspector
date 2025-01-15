import type { ButtonProps } from '../ui';

import { Tooltip } from '../Tooltip/Tooltip';
import { Button } from '../ui';

interface ColoredButtonProps extends ButtonProps {
  isDisable?: boolean;
  tooltipText: string;
}

export const ColoredButton = ({
  children,
  isDisable,
  tooltipText,
  ...props
}: ColoredButtonProps) => {
  return (
    <Tooltip text={tooltipText}>
      <Button
        className={`h-button px-m rounded-sm opacity-60 ${isDisable ? 'bg-background-secondary' : 'bg-accent hover:opacity-100'}`}
        {...props}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
