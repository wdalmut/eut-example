FROM node:10

WORKDIR /data

RUN apt-get update && apt-get install -y net-tools iputils-ping

ADD . /data

EXPOSE 3000

VOLUME /data

