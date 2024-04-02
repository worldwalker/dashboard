import Head from "next/head";
import Link from "next/link";

export const Layout = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Test Project</title>
        </Head>
        <div className="pc-wrap">
          <div className="navbar-row">
            <Link className="nav-link" href="/item">
              Item Page
            </Link>
            <Link className="nav-link" href="robot">
              Robot
            </Link>
            <Link className="nav-link" href="/dashboard">
              Dashboard
            </Link>
          </div>
          <Component {...props} />
        </div>
      </>
    );
  };
};
