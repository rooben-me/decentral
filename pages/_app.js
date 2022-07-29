import "../styles/globals.css";

import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider emotionOptions={{ key: "mantine" }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
