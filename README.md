# Debate App

A structured debate platform that facilitates organized, point-by-point discussions with AI-assisted claim identification and response coverage analysis.

[![CI](https://github.com/abaa1/debate-app/actions/workflows/ci.yml/badge.svg)](https://github.com/abaa1/debate-app/actions/workflows/ci.yml)

## Features

- Blue/red panel debate interface
- Point-by-point response system
- AI-assisted claim identification
- Response coverage analysis
- User authentication
- Educational resources on argumentation

## Tech Stack

- React 19 with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- Jest and React Testing Library for testing

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+
- Docker and Docker Compose (optional, for containerized development)
- Auth0 account (for authentication)
- Anthropic API key (for AI features)
- Perplexity API key (for research features)

### Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the following variables in `.env`:
   - `ANTHROPIC_API_KEY`: Your Anthropic API key
   - `PERPLEXITY_API_KEY`: Your Perplexity API key
   - `REACT_APP_AUTH_DOMAIN`: Your Auth0 domain
   - `REACT_APP_AUTH_CLIENT_ID`: Your Auth0 client ID
   - `REACT_APP_AUTH_AUDIENCE`: Your Auth0 API identifier
   - `REACT_APP_AUTH_REDIRECT_URI`: Your application's callback URL

3. Optional environment variables:
   - `DEBUG`: Enable debug logging
   - `LOG_LEVEL`: Set logging level
   - `REACT_APP_ENABLE_AI_CLAIMS`: Enable/disable AI claim identification
   - `REACT_APP_ENABLE_COVERAGE_ANALYSIS`: Enable/disable response coverage analysis
   - `REACT_APP_ENABLE_EDUCATIONAL_RESOURCES`: Enable/disable educational resources

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/debate-app.git
   cd debate-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Docker Setup

1. Build and start the Docker container:
   ```bash
   docker-compose up
   ```

2. The app will be available at [http://localhost:3000](http://localhost:3000).

## Development Workflow

### Code Style and Quality

We use ESLint and Prettier to enforce code quality and style:

- Run `npm run lint` to check for linting issues
- Run `npm run lint:fix` to automatically fix linting issues
- Run `npm run format` to format code with Prettier

### Testing

- Run `npm test` to run all tests
- Run `npm test -- --watch` to run tests in watch mode

### Building for Production

To build the app for production:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)