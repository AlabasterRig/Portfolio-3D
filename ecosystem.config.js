module.exports = {
  apps: [
    {
      name: "portfolio-3d",
      script: "npx",  // Using npx instead of direct path
      args: "vite preview --host",  // Added --host flag to bind to all interfaces
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 4173
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      interpreter: "node"  // Explicitly using node interpreter
    }
  ]
};