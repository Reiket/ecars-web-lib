import {TextEncoder, TextDecoder as NodeTextDecoder} from 'util';

global.TextEncoder = TextEncoder;

global.TextDecoder = NodeTextDecoder as unknown as {
  new (label?: string, options?: TextDecoderOptions): TextDecoder;
  prototype: TextDecoder;
};

Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  writable: true,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
