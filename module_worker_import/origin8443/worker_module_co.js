console.log("STARTED: worker_module_co");
self.postMessage("STARTED: worker_module_co");

import "https://localhost:9443/module_import_co.js";

self.onmessage = (e) => {
  self.postMessage("WORKER: worker_module_co got: " + e.data);
};
