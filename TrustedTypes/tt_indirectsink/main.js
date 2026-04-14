// Comment this out to make it fail - we need the default policy or the indirect case fails
trustedTypes.createPolicy("default", {
  createScript(value) {
    console.log("Default policy (Script) intercepted:", value);
    // Perform your validation logic here
    return value;
  },
});

const untrustedString = "console.log('Hello from the injected untrusted script!');";
const textNode = document.createTextNode(untrustedString);

const script = document.createElement("script");
script.nonce = "random123"; // To match header.
script.appendChild(textNode);
document.body.appendChild(script);
console.log("why");
