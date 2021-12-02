import '@testing-library/jest-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const ChakraRenderer: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (ui: JSX.Element, options = {}): ReturnType<typeof render> =>
  render(ui, { wrapper: ChakraRenderer, ...options });

export * from '@testing-library/react';
export { customRender as render };
