console.log("STARTED: worker_classic_importer_so: run");
self.postMessage("STARTED: worker_classic_importer_so: run");

importScripts("same_origin_script_imported.js");
self.onmessage = (e) => {
  self.postMessage(
    "WORKER: SO classic import SO (same_origin_script_imported) rec: " + e.data
  );
};
