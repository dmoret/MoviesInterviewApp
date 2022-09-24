import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactElement;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Movies app for an interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-7xl px-4 lg:px-8 pt-20 pb-16 text-center">
        <div className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900">
          <h1>Movies You Love</h1>
        </div>
      </main>
    </>
  );
};

export default Layout;
