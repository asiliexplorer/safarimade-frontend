# Stage 1: Build Next.js App
FROM node:20-alpine AS builder  
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run Next.js with Node
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
ENV PORT 80
CMD ["npm", "start"]
