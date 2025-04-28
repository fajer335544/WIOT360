
FROM node:20


WORKDIR /app


COPY package*.json ./

 # install depernecies + setup prisma client 
RUN npm install



COPY . .

RUN npx prisma generate
# Port of project
EXPOSE 5000

# Run the Server 
CMD ["npm", "run", "dev"]
