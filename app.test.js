const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

test("GET /health should return application health status", async () => {
    const server = app.listen(0);

    await new Promise((resolve, reject) => {
        server.once("listening", resolve);
        server.once("error", reject);
    });

    const { port } = server.address();

    try {
        const response = await fetch(`http://localhost:${port}/health`);

        assert.equal(response.status, 200);

        const data = await response.json();

        assert.equal(data.status, "UP");
        assert.equal(data.message, "Application is healthy");
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});
