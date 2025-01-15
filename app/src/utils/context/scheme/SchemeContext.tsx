'use client';

import React from 'react';

export interface SchemeContextParams {
  scheme: Scheme;
  toggleScheme: (newScheme: Scheme) => void;
}

export const SchemeContext = React.createContext<SchemeContextParams>({
  scheme: 'system',
  toggleScheme: () => {}
});
