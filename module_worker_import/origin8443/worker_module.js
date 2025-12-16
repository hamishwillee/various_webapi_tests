console.log("STARTED: worker_module");
self.postMessage("STARTED: worker_module");

self.onmessage = (e) => {
  self.postMessage("WORKER (SO) worker_module got: " + e.data);
};
