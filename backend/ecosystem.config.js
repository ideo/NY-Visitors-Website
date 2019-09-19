module.exports = {
  apps : [
      {
        name: "ideo-nyc-visitors-backend",
        cwd: "/home/ubuntu/NY-Visitors-Website/backend",
	script: "npm",
	args: "start",
        watch: true,
        env_production: {
            "NODE_ENV": "production",
            "DATABASE_HOST": "nyvisitor-db-instance.cwynzxw34i7s.us-east-1.rds.amazonaws.com",
            "DATABASE_PORT": "5432",
            "DATABASE_NAME": "nyvisitor",
            "DATABASE_USERNAME": "nyvisitor",
            "DATABASE_PASSWORD": "R0ck1234!",
            "PORT": "1337",
        }
      }
  ]
}
