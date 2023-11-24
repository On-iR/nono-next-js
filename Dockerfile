    FROM node:20.2.0-alpine
    
    WORKDIR /usr/src/app
    
    COPY . /usr/src/app/
    
    RUN npm ci
    
    RUN npm run build
    
    EXPOSE 3000
    
    CMD ["npm", "start"]
    
