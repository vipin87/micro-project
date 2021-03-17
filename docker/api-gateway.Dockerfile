FROM node:14-alpine

WORKDIR /usr/src/app

# Copy these files from your host into the image
COPY yarn.lock .
COPY package.json .
COPY services/api-gateway/package.json ./services/api-gateway/package.json

# Run the command inside the image filesystem
RUN yarn

# Copy the rest of your app's source code from your host to the image filesystem:
COPY services/api-gateway ./services/api-gateway

# Which port is the container listening on at runtime?
# This should be the same port your server is listening to:
EXPOSE 3000

# Start the server within the container:
CMD [ "yarn", "start" ]