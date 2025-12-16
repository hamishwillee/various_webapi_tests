console.log("STARTING: worker_classic.js: run");
self.postMessage("STARTING: worker_classic.js: run");

self.onmessage = (e) => {
  self.postMessage(
    "WORKER: worker_classic (SO) rec: " + e.data
  );
};

