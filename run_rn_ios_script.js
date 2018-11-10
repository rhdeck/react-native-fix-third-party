#!/usr/bin/env node
const { join } = require("path");
const { spawnSync } = require("child_process");
const thirdPartyPath = join(
  process.cwd(),
  "node_modules",
  "react-native",
  "scripts"
);
process.chdir(thirdPartyPath);

spawnSync("/bin/sh", ["ios-install-third-party.sh"], { stdio: "inherit" });
process.chdir(join(thirdPartyPath, "third-party", "glog-0.3.4"));
spawnSync("/bin/sh", ["../../ios-configure-glog.sh"], { stdio: "inherit" });
