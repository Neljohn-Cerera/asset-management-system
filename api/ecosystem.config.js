module.exports = {
  apps: [
    {
      name: "asset-management-project-api",
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
