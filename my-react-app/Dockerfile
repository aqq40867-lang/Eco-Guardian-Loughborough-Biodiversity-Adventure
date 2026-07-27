FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# --base=/ overrides the production "/Coursework/" base path from vite.config.js
# so the app is reachable at http://localhost:5173/ during local docker use.
CMD ["npx", "vite", "--host", "0.0.0.0", "--base", "/"]
