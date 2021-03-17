FROM node:14-alpine

WORKDIR /usr/src/app

# Copy these files from your host into the image
COPY yarn.lock .
COPY package.json .
COPY services/cart/package.json ./services/cart/package.json

# Run the command inside the image filesystem
RUN yarn

# Copy the rest of your app's source code from your host to the image filesystem:
COPY services/cart ./services/cart

# Start the server within the container:
CMD [ "yarn", "start" ]