// BUILD_TARGET=mobile makes a static export that Capacitor wraps into the Android app.
const mobile = process.env.BUILD_TARGET === "mobile";
module.exports = { reactStrictMode: true, ...(mobile ? { output: "export", images: { unoptimized: true } } : {}) };
