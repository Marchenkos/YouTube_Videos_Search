module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme",
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: ["./src/setupTests.js"]
};
