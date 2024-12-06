import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './assets/styles/global.css';

const payload = {
  ws: {
    port: 7811,
    lastUpdated: 1733222073654
  },
  config: [
    {
      baseUrl: '/',
      port: 31299,
      staticPath: '/'
    },
    {
      configs: []
    },
    {
      name: 'entities',
      configs: [
        {
          method: 'get',
          path: '/user/:id',
          routes: [
            {
              data: {
                emoji: '🎉'
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: 'token'
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                cookies: {
                  auth: 'token'
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                query: {
                  sort: 'asc'
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                params: {
                  id: '1'
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: 'interceptors',
      configs: [
        {
          method: 'get',
          path: '/user/:id',
          routes: [
            {
              data: {
                emoji: '🎉'
              },
              interceptors: {
                request: '() => {\n              }',
                response: '(data) => data'
              }
            }
          ],
          interceptors: {
            request: '() => {\n          }',
            response: '(data) => data'
          }
        }
      ],
      interceptors: {
        request: '() => {\n      }',
        response: '(data) => data'
      }
    },
    {
      name: 'check modes',
      configs: [
        {
          method: 'get',
          path: '/user/:id',
          routes: [
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: 'token'
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'exists'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'notExists'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'equals',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'notEquals',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'startsWith',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'notStartsWith',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'includes',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'notIncludes',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'endsWith',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'notEndsWith',
                    value: 'token'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'regExp',
                    value: '/token/'
                  }
                }
              }
            },
            {
              data: {
                emoji: '🎉'
              },
              entities: {
                headers: {
                  auth: {
                    checkMode: 'function',
                    value: '(actualValue) => actualValue === "token"'
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

const init = async () => {
  // const payload = await (await fetch('/api/payload')).json();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App payload={payload} />
    </StrictMode>
  );
};

init();
