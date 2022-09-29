export const apiKey = {
  words: '/api/words',
} as const;

export type ApiKey = typeof apiKey;

export type ApiKeys = ApiKey[keyof ApiKey];
