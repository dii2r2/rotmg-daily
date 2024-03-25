FROM node:20-bookworm

#Setup working directory
RUN mkdir /app
WORKDIR /app
RUN npm install -g pnpm
#RUN pnpm setup
#RUN source /root/.bashrc
#RUN pnpm add pm2 -g
COPY ../ .
RUN pnpm install 