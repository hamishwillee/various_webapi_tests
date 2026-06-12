console.log("MAIN.JS STARTING");

// Open a classic worker in same origin
(async () => {
  console.log("TEST1: SO Classic worker");
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p>TEST1: SO Classic worker</p>`
  );
  try {
    const worker = new Worker("https://localhost:8443/worker_classic.js");

    worker.onmessage = (e) => {
      console.log("TEST1: rec: (same-origin classic):", e.data);
      document.body.insertAdjacentHTML(
        "beforeend",
        `<p>TEST1: rec: same-origin classic: ${e.data}</p>`
      );
    };

    setTimeout(() => {
      worker.postMessage("TEST1: Hello SO classic worker");
      console.log("TEST1: posted to worker: Hello SO classic worker");
    }, 0);
  } catch (e) {
    console.error("TEST1: Fail: Hello SO classic worker failed to load:", e);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p>TEST1: Fail to load: Hello SO classic worker</p>`
    );
  }
})();

// Open a cross origin classic worker - FAILS - not allowed to load cross origin
/*
      (async () => {
        console.log("TEST2: CO Classic worker");
        document.body.insertAdjacentHTML(
          "beforeend",
          `<p>TEST2: CO Classic worker</p>`
        );
        try {
          const worker = new Worker("https://localhost:9443/worker_classic.js");
          worker.onmessage = (e) => {
            console.log("TEST2: rec: (CO Classic worker):", e.data);
            document.body.insertAdjacentHTML(
              "beforeend",
              `<p>TEST2: rec: cross-origin classic: ${e.data}</p>`
            );
          };

          worker.onerror = (error) => {
            console.error("TEST2 Caught ASYNC error message:", error.message);
            console.error("TEST2 Caught ASYNC error:", error);
            document.body.insertAdjacentHTML(
              "beforeend",
              `<p>Worker failed to load (Async): ${error.type}</p>`
            );
          };
          // Note, FF displays this. But the error isn't very useful. 

          worker.postMessage("Hello CO Classic worker");
          console.log("TEST2 posted to worker: Hello CO Classic worker");
        } catch (e) {
          console.error("TEST2 FAIL: CO Classic worker failed to load:", e);
          document.body.insertAdjacentHTML(
            "beforeend",
            `TEST2: Fail to load: CO Classic worker</p>`
          );
        }
      })();
*/

// Open a classic worker in same origin that then imports something in same origin
(async () => {
  console.log("TEST3: SO Classic worker SO importScript");
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p>TEST3: SO Classic worker SO importScript</p>`
  );

  try {
    const worker = new Worker(
      "https://localhost:8443/worker_classic_importer_so.js"
    );
    worker.onmessage = (e) => {
      console.log("TEST3: rec:  (SO classic worker importScript SO):", e.data);
      document.body.insertAdjacentHTML("beforeend", `<p>TEST3: ${e.data}</p>`);
    };
    worker.postMessage("TEST3: Hello SO classic worker SO importScript!");
    console.log(
      "TEST3: posted to worker: Hello SO classic worker SO importScript"
    );
  } catch (e) {
    console.error(
      "TEST3 FAIL: SO classic worker importScript SO failed to load:",
      e
    );
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p>TEST3: Fail to load: SO classic worker importScript SO</p>`
    );
  }
})();

// Open a classic worker in same origin that then imports something in cross origin
(async () => {
  console.log("TEST4: SO Classic worker CO importScript");
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p>TEST4: SO Classic worker CO importScript</p>`
  );
  try {
    const worker = new Worker(
      "https://localhost:8443/worker_classic_importer_co.js"
    );
    worker.onmessage = (e) => {
      console.log("TEST4: rec: ", e.data);
      document.body.insertAdjacentHTML(
        "beforeend",
        `<p>TEST4: SO Classic worker CO importScript): ${e.data}</p>`
      );
    };
    worker.postMessage("TEST4 Hello SO Classic worker CO importScript!");
    console.log("TEST4 posted: Hello SO Classic worker CO importScript");
  } catch (e) {
    console.error("TEST4 FAIL: SO Classic worker CO importScript:", e);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p>TEST4: Fail to load: SO Classic worker CO importScript</p>`
    );
  }
})();
