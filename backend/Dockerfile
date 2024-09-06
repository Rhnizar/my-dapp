FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Initialize Node.js project and install Hardhat in the container
# RUN npm init -y && npm install hardhat --save-dev

# Expose the Hardhat network port
EXPOSE 8545

# Default command to run the Hardhat node
CMD ["npx", "hardhat", "node"]
