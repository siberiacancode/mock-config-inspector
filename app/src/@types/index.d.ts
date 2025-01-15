type Wrapper<T> = T extends (...args: any[]) => any
  ? string
  : T extends object
    ? { [K in keyof T]: Wrapper<T[K]> }
    : T;

type MockServerConfig = Wrapper<import('mock-config-server').FlatMockServerConfig>;
type MockServerSettings = Wrapper<import('mock-config-server').FlatMockServerSettings>;
type MockServerComponent = Wrapper<import('mock-config-server').FlatMockServerComponent>;

interface Payload {
  config: MockServerConfig;
  ws: {
    port: number;
    lastUpdated: number;
  };
}

interface WebSocketMessage {
  payload: Payload;
  type: 'config-updated';
}
