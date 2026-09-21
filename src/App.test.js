import { render, screen } from '@testing-library/react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import App from './App';

test('muestra el estado no autenticado', async () => {
  const pca = new PublicClientApplication(msalConfig);
  await pca.initialize();

  render(
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  );

  expect(await screen.findByText(/usuario no autenticado/i)).toBeInTheDocument();
});
