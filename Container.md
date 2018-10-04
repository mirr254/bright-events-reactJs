## How containers work with the application.

We use docker containers to create a standard application environment that can be run on any platform.  
Containers help in running distributed applications without launching a virtual machine.

In this project we use dockerfile to specify what exactly we want installed in our docker container. This container will run our application independently from host OS.

The docker file is shown and explained below. Statements that begin with # are comments.

```
# base image on which we will run the application on. In this case is node verion 7
#pull the node image

FROM node:carbon as build-deps

LABEL maintainer="shammir"

RUN mkdir /usr/src/app

#copy package.json and yarn.lock into the image app directory
COPY ./package.json ./yarn.lock /usr/src/app/

#cd to the working folder
WORKDIR /usr/src/app

#install dependacies
RUN yarn install

#run the app
RUN yarn build

#production enviroment set up
FROM nginx:1.15.2-alpine

#build-deps is the name we gave the first stage
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

#specify a port that is going to be used when accessing the application from the container
EXPOSE 3000

#run the server when the container starts
CMD [ "nginx", "-g", "daemon off;" ]
```

As observed from the docker file above we use multi-stage builds for our container. This feature in Dockerfiles enables you to create smaller container images with better caching and smaller security footprint. The first stage is `FROM node:carbon as build-deps`. 
The as build-deps part allows us to name this part of the build process. That name can then be referred to when configuring the production environment later.
On lines 12 we copy package.json and yarn.lock into the directory we want in the image and then set `WORKDIR`- In a Dockerfile, WORKDIR is used to set the current working directory. Any other command run after WORKDIR is set, is run under that directory.  
From now till the next stage, the commands executed will under the dir `/usr/src/app` which has the `yarn.lock` and `package.json` since we switched/changed directory.  

Now we can run `yarn install` to install dependencies — this separates the dependency installation from the edits to our actual source files. This allows Docker to cache these steps so that subsequent builds — one’s in which we only edit source files and don’t install any new dependencies — will be faster.

While in that directory we run `yarn build` command that creates a build directory as an artifact that we will copy later on to our production build environment on `line 31` - and because we’re using stock nginx, that directory is `/usr/share/nginx/html`.

On line 33 `EXPOSE 80`  we expose a port that we will use to connect to the container with our running app in it. The EXPOSE COMMAND instructS the container in which one app is running to listening on a particular port. In our case port 80.  
The we run server `line 36` when the container starts.

```
docker build -t shammir-tag .
docker run -p 3000:3000 shammir-tag
```

`build` downloads the base image specified on top and installs all the dependancies.
`-t` gives a tag to that image for identification and `.` tells that command to use current directory to look for Dockerfile.  

`-p 3000:3000` binds the container port to host port and `shammir-tag` is used to specify which docker image to run.

Visit `http://localhost:8080` to see the application in your brower. 
