module.exports = {
  apps: [
    {
      name: "portfolio-3d",
      script: "node_modules/vite/bin/vite.js",
      args: "preview --host",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 4173
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G"
    }
  ]
};