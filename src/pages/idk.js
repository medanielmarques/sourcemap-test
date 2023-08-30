import React, { useEffect } from "react";
import { client } from "./_app";

export default function IDK() {
  useEffect(() => {
    if (window.location.href.indexOf("test") !== -1) {
      client.notify(new Error("Bugsnag Sourcemaps test 2"));
      throw new Error("sourcemap test 2");
    }
  }, []);

  return <div>sourcemaps testing 2</div>;
}
