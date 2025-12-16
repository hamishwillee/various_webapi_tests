console.log("STARTED: worker_module_co");
self.postMessage("STARTED: worker_module_co");

self.onmessage = (e) => {
  self.postMessage("WORKER: worker_module_co got: " + e.data);
};
