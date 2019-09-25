module.exports = {
  apps : [
      {
        name: "ideo-nyc-visitors-backend",
        cwd: "/home/ubuntu/NY-Visitors-Website/backend",
	      script: "npm",
	      args: "start",
        watch: true,
        env_production: {
            "NODE_ENV": "",
            "DATABASE_HOST": "",
            "DATABASE_PORT": "",
            "DATABASE_NAME": "",
            "DATABASE_USERNAME": "",
            "DATABASE_PASSWORD": "",
            "PORT": "",
        }
      }
  ]
}
