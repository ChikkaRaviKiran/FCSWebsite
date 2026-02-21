export const DEFAULT_MODEL = process.env.DEFAULT_MODEL || process.env.NEXT_PUBLIC_DEFAULT_MODEL || 'gpt-4';

export function getDefaultModel(): string {
  return DEFAULT_MODEL;
}
