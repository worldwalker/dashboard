import React, { useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/item", undefined, { shallow: true });
  }, []);

  return <></>;
}

export default Layout(Home);
