export const baseUrl = process.env.REACT_APP_BASE_API_URL;

export const urls = {};

export const publicUrls = {
  home: '/',
  dashboard: '/dashboard',
  segments: '/segments',
  routes: '/routes',
  goals: '/goals',
  heatmaps: '/heatmaps',
  challenges: '/challenges',
} as const;
