import React, { useEffect } from "react";
import { client } from "./_app";

export default function Home() {
  useEffect(() => {
    if (window.location.href.indexOf("test") !== -1) {
      client.notify(new Error("Bugsnag Sourcemaps  test"));
      throw new Error("sourcemap test");
    }
  }, []);

  return <div>sourcemaps testing</div>;
}
