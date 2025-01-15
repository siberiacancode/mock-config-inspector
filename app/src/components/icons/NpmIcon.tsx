import React from 'react';

export const NpmIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg viewBox='0 0 24 24' {...props} ref={ref}>
      <title>npm</title>
      <path
        d='M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z'
        fill='currentColor'
      />
    </svg>
  )
);

NpmIcon.displayName = 'NpmIcon';
