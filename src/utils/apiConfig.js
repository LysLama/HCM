// Centralized config for Gemini API access
export const GEMINI_PROXY_BASE = '/api/gemini';

export const buildGeminiUrl = (model) => `${GEMINI_PROXY_BASE}/${model}`;

export const GEMINI_DEFAULT_MODELS = [
	'gemini-1.5-flash-8b-latest',
	'gemini-1.5-flash-8b',
	'gemini-1.5-flash-latest',
	'gemini-1.5-flash',
	'gemini-2.5-flash',
	'gemini-1.5-pro'
];
