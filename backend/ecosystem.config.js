module.exports = {
  apps : [
      {
        name: "ideo-nyc-visitors-backend",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 1337,
            "NODE_ENV": "production"
        },
        env_production: {
            "DATABASE_HOST": process.env.DATABASE_HOST,
            "DATABASE_PORT": process.env.DATABASE_PORT,
            "DATABASE_NAME": process.env.DATABASE_NAME,
            "DATABASE_USERNAME": process.env.DATABASE_USERNAME,
            "DATABASE_PASSWORD": process.env.DATABASE_PASSWORD,
            "PORT": 1337,
            "NODE_ENV": "production",
        }
      }
  ]
}