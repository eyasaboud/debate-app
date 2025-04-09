# Contributing to Debate App

Thank you for considering contributing to the Debate App! This document outlines the guidelines for contributing to this project.

## Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style Guidelines

### General Guidelines

- Follow the principle of single responsibility
- Write clear, descriptive variable and function names
- Use TypeScript types correctly and thoroughly
- Keep functions small and focused
- Write unit tests for new features

### React Components

- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep components focused on a single responsibility
- Use proper prop types and TypeScript interfaces

### Code Formatting

We use ESLint and Prettier to enforce code style:

- Run `npm run lint` to check for linting issues
- Run `npm run lint:fix` to automatically fix linting issues
- Run `npm run format` to format code with Prettier

### Git Commit Guidelines

- Use clear, descriptive commit messages
- Reference issue numbers in commit messages when applicable
- Keep commits focused on single changes or features

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Make sure code follows style guidelines
4. Get at least one code review from a maintainer
5. Once approved, maintainers will merge the PR

## Development Environment Setup

### Local Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

### Docker Setup

1. Make sure Docker and Docker Compose are installed
2. Run `docker-compose up` to start the development environment
3. Access the application at `http://localhost:3000`

## Code of Conduct

- Be respectful of others
- Use inclusive language
- Accept constructive criticism
- Focus on what is best for the community 