console.log("STARTED: worker_classic_importer_co: run");
self.postMessage("STARTED: worker_classic_importer_co: run");

importScripts("https://localhost:9443/cross_origin_script_imported.js");
self.onmessage = (e) => {
  self.postMessage("WORKER: SO classic worker CO importScript (cross_origin_script_imported) rec: " + e.data);
};
