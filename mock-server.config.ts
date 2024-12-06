import type {
  BaseUrl,
  Cors,
  DatabaseConfig,
  GraphQLRequestConfig,
  Interceptors,
  RestRequestConfig,
  StaticPath
} from 'mock-config-server';

type Port = number;

export interface FlatMockServerComponent {
  baseUrl?: BaseUrl;
  configs: Array<GraphQLRequestConfig | RestRequestConfig>;
  interceptors?: Interceptors;
  name?: string;
}

export interface FlatMockServerSettings {
  baseUrl?: BaseUrl;
  cors?: Cors;
  database?: DatabaseConfig;
  interceptors?: Interceptors;
  port?: Port;
  staticPath?: StaticPath;
}

export type FlatMockServerConfig = [
  option: FlatMockServerComponent | FlatMockServerSettings,
  ...flatMockServerComponents: FlatMockServerComponent[]
];

const flatMockServerConfig: FlatMockServerConfig = [
  {
    baseUrl: '/'
  },
  // {
  //   port: 31299
  // },
  // {
  //   // staticPath: {
  //   //   path: '/images',
  //   //   prefix: '/files'
  //   // }
  //   // staticPath: [
  //   //   '/images',
  //   //   {
  //   //     path: '/images',
  //   //     prefix: '/files'
  //   //   }
  //   // ]
  //   staticPath: '/'
  // },
  // {
  //   cors: {
  //     // origin: () => new Promise((res) => 'https://www.google.com')
  //     // origin: () => 'https://www.google.com'
  //     // origin: ['https://www.google.com']
  //     origin: 'https://www.google.com',
  //     methods: ['GET'],
  //     allowedHeaders: ['accept'],
  //     exposedHeaders: ['accept'],
  //     maxAge: 3600,
  //     credentials: true
  //   },
  // },
  // {
  //   database: {
  //     data: {
  //       users: [{ id: 1, emoji: '🎉' }]
  //     },
  //     routes: {
  //       '/*/users/:id': '/api/users/:id'
  //     }
  //   }
  // },
  {
    configs: [] // annonymos
  },
  {
    name: 'entities',
    configs: [
      {
        method: 'get',
        path: '/user/:id',
        routes: [
          {
            data: { emoji: '🎉' }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: 'token'
              }
            }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              cookies: {
                auth: 'token'
              }
            }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              query: {
                sort: 'asc'
              }
            }
          },
          {
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
            interceptors: {
              request: () => {},
              response: (data) => data
            }
          }
        ],
        interceptors: {
          request: () => {},
          response: (data) => data
        }
      }
    ],
    interceptors: {
      request: () => {},
      response: (data) => data
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
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: 'token'
              }
            }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: {
                  checkMode: 'exists'
                }
              }
            }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: {
                  checkMode: 'notExists'
                }
              }
            }
          },
          {
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
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
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: {
                  checkMode: 'regExp',
                  value: /token/
                }
              }
            }
          },
          {
            data: { emoji: '🎉' },
            entities: {
              headers: {
                auth: {
                  checkMode: 'function',
                  value: (actualValue) => actualValue === 'token'
                }
              }
            }
          }
        ]
      }
    ]
  }
];

export default flatMockServerConfig;
