interface EnvVar {
  name: string;
  required: boolean;
  validate?: (value: string) => boolean;
}

const envVars: EnvVar[] = [
  // Required variables
  { name: 'REACT_APP_API_URL', required: true },
  { name: 'REACT_APP_AUTH_DOMAIN', required: true },
  { name: 'REACT_APP_AUTH_CLIENT_ID', required: true },
  { name: 'REACT_APP_AUTH_AUDIENCE', required: true },
  { name: 'REACT_APP_AUTH_REDIRECT_URI', required: true },

  // Optional variables with validation
  {
    name: 'REACT_APP_API_RATE_LIMIT',
    required: false,
    validate: value => !isNaN(Number(value)) && Number(value) > 0,
  },
  {
    name: 'REACT_APP_API_RATE_WINDOW',
    required: false,
    validate: value => !isNaN(Number(value)) && Number(value) > 0,
  },
  {
    name: 'REACT_APP_ENABLE_AI_CLAIMS',
    required: false,
    validate: value => value === 'true' || value === 'false',
  },
  {
    name: 'REACT_APP_ENABLE_COVERAGE_ANALYSIS',
    required: false,
    validate: value => value === 'true' || value === 'false',
  },
  {
    name: 'REACT_APP_ENABLE_EDUCATIONAL_RESOURCES',
    required: false,
    validate: value => value === 'true' || value === 'false',
  },
];

export function validateEnv(): void {
  const missingVars: string[] = [];
  const invalidVars: string[] = [];

  envVars.forEach(envVar => {
    const value = process.env[envVar.name];

    if (envVar.required && !value) {
      missingVars.push(envVar.name);
    } else if (value && envVar.validate && !envVar.validate(value)) {
      invalidVars.push(envVar.name);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  if (invalidVars.length > 0) {
    throw new Error(`Invalid environment variables: ${invalidVars.join(', ')}`);
  }
}

export function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value || defaultValue || '';
}

export function getBooleanEnvVar(name: string, defaultValue = false): boolean {
  const value = process.env[name];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
}

export function getNumberEnvVar(name: string, defaultValue: number): number {
  const value = process.env[name];
  if (!value) return defaultValue;
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error(`Environment variable ${name} is not a valid number`);
  }
  return num;
}
