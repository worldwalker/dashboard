import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Layout = (Component: any) => {
  return (props: any) => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>();

    useEffect(() => {
      setActiveLink(router.pathname);
    }, [router]);
    console.log(router.pathname);

    return (
      <>
        <Head>
          <title>Test Project</title>
        </Head>
        <div className="pc-wrap">
          <div className="navbar-row">
            <Link
              className="nav-link"
              href="/item"
              style={{ color: activeLink === "/item" ? "" : "blue" }}
            >
              Item Page
            </Link>
            <Link
              className="nav-link"
              href="robot"
              style={{ color: activeLink === "/robot" ? "" : "blue" }}
            >
              Robot
            </Link>
            <Link
              className="nav-link"
              href="/dashboard"
              style={{ color: activeLink === "/dashboard" ? "" : "blue" }}
            >
              Dashboard
            </Link>
          </div>
          <Component {...props} />
        </div>
      </>
    );
  };
};
