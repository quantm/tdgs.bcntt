### Installation
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Add `sail` command line by add below line to your `.bash_profile` file
  - `alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`
- Clone this repo and running container 
  - `git clone https://github.com/quantm/tdgs.bcntt.git`
  - `cd tdgs.bcntt && sail up`
- Import `tdgs_bcntt.sql` to local database
- Open web browser `http://localhost:APP_PORT`
- Value of `APP_PORT` is define in `.env` file
