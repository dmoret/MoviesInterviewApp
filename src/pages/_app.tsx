import "reflect-metadata";
import "@/frontend/styles/global.css";
import type { AppProps } from "next/app";

import Layout from "@/frontend/components/base/Layout";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Layout title={"Movie App"}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
