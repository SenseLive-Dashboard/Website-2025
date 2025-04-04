module.exports = {
  apps: [
    {
      name: "senselive-website",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
    },
  ],
}

