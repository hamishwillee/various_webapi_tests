console.log("CO worker_classic.js: run");
self.postMessage("CO worker_classic.js: run");

self.onmessage = (e) => {
  self.postMessage("CO worker_classic: WORKER rec: " + e.data);
};
