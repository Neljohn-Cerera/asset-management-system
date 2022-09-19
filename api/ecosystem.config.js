module.exports = {
  apps: [
    {
      name: "Asset Management Project API",
      script: "server.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
