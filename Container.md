## How containers work with the application.

We use docker containers to create a standard application environment that can be run on any platform.  
Containers helps in running distributed applications without launching a virtual machine.

In this project we use dockerfile to specify what exactly we want installed in our docker container. This container is going to help us run our application independently from host OS.

The docker file is shown and explained below. Statements that begin with # are comments.

```
# base image on which we will run the application on. In this case is node verion 7
#pull the node image

FROM node:carbon as build-deps

LABEL maintainer="shammir"

RUN mkdir /usr/src/app

#copy package.json and yarn.lock into the image
COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app

#cd to the working folder
WORKDIR /usr/src/app

#install dependacies
RUN yarn install

#copy everything else into the image
COPY . /usr/src/app

#run the app
RUN yarn build

#production enviroment set up
FROM nginx:1.15.2-alpine

#build-deps is the name we gave the first stage
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

#specify a port that is going to be used when accessing the application from the container
EXPOSE 8080

#run the server when the container starts
CMD [ "nginx", "-g", "daemon off;" ]
```

To test this on local machine run the following 2 commands

```
docker build -t shammir-tag .
docker run -p 8080:8080 shammir-tag
```

`build` downloads the base image specified on top and installs all the dependancies.
`-t` gives a tag to that image for identification and `.` tells that command to use current directory to look for Dockerfile.  

`-p 8080:8080` binds the container port to host port and `shammir-tag` is used to specify which docker image to run.

Visit `http://localhost:8080` to see the application in your brower.
