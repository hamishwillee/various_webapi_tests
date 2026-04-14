// Chrome blocks this on slow connections and fires an intervention report.
// The injected script should be cross-origin for most reliable blocking.
document.write('<script src="https://httpbin.org/delay/1"><\/script>');
