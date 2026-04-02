export function withBase(baseUrl: string, path = '') {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
