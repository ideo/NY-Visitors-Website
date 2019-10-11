# IDEO NY Visitors Website
Code for IDEO NY's visitors website [deployed here](http://ny-visitors.ideo.com).

## Stack

This repository houses two separate Javascript / Node.js codebases in one:

- `./frontend`: A PWA created using [Create React App](https://github.com/facebook/create-react-app)
- `./backend`: A [Strapi](http://strapi.io) application using a [Postgres](https://www.postgresql.org/) database.
- [`pm2`](http://pm2.keymetrics.io/) is used to monitor and manage the Strapi's node.js process
- An [`nginx`](https://www.nginx.com/) server is used to provide reverse proxy for the backend application, as well as to performantly sevre the frontend assets.
- [`certbot`](https://certbot.eff.org/) is used to generate SSL certificates and refirect all `http` requests to `https`
- [`OAuth`](https://oauth.net/) is used to authenticate visitors with their IDEO G-Suite credentials and allow them access to employees-only information. For `OAuth` and `Strapi` configuration please see [this document](https://strapi.io/documentation/3.0.0-beta.x/plugins/users-permissions.html#authentication).

## Deployment
This website is hosted on an [AWS EC2](https://aws.amazon.com/ec2/) instance. The postgres database is also hosted on [AWS RDS](https://aws.amazon.com/rds/?c=db&sec=srv). Credentials for this AWS account exist in IDEO NY's [1Password](https://1password.com) account. For access, please flie a ticket to [support@ideo.com](mailto:support@ideo.com)

This website does NOT use CI/CD. For deployments follow these steps:

- ssh into the ec2 instance (refer to above paragraph for access credentials)
- Once connected, `cd ~/NY-Visitors-Website`
- `git branch` and make sure you're on the `production` branch
- `git pull`
- If you have introduced new dependencies, `cd` into the appropriate directory (`backend` or `frontend` and run `yarn` (preferred) or `npm install` (also cool).
- Any changes to the backend code will automatically trigger a restart by `pm2` which is monitoring `backend` files for changes. After pulling in the changes, run `pm2 ls` to monitor the status of the backend Strapi application, and `pm2 logs` to view the logs.
- If you have introduced changes to the frontend code, `cd` into `frontend` directory, install new dependencies if any (see above), run `yarn build` and then `cp -r build/* /var/www/ny-visitors.ideo.com/html/` to copy over the built assets to the proper directory where `nginx` serves these files to clients.
- The `nginx` configuration file used in this deployment exists at the root of this repo, called `default`. It should give you a pretty good idea of this setup.


## Mainenance & Bug reports
For bug reports and feature requests please contact the maintainer of this project at [mnilchiani@ideo.com](mailto:mnilchiani@ideo.com)

