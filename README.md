#### Installation
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Add `sail` command line by add below line to your `.bash_profile` file
  - `alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`
- Clone this repo and running container 
  - `git clone https://github.com/quantm/tdgs.bcntt.git`
  - open terminal type id to to check uid and gid and update in `.env` file 
  - WWWGROUP=gid
  - WWWUSER=uid
  - `cd tdgs.bcntt && sail up`
- Import `tdgs_bcntt.sql` to local database
- Open web browser `http://localhost:APP_PORT`
- Value of `APP_PORT` is define in `.env` file
#### Test User
- tdgs.bcntt@gmail.com - 123456789
#### Troubleshooting
- When run this container in `linux/unix` OS can have folder permission issue just run `chmod -R 777 folder_name` inside the container
