console.log("STARTED: worker_module_so");
self.postMessage("STARTED: worker_module_so");

import "./module_import_so.js";

self.onmessage = (e) => {
  self.postMessage("WORKER so_mod_import_so: " + e.data);
};
