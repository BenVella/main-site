const DEFAULT_STAGING_ROOT_PATH = '/staging/';

export type StagingPreviewManifestEntry = {
  prNumber: number;
  branchName: string;
  title?: string;
  label?: string;
  previewPathSegment?: string;
  url: string;
  updatedAt: string;
};

export type StagingLocation = {
  isStaging: boolean;
  previewPathSegment: string | null;
  previewNumber: number | null;
  relativePath: string;
  stagingRootPath: string;
};

const ensureLeadingSlash = (value: string) => (value.startsWith('/') ? value : `/${value}`);

export const ensureTrailingSlash = (value: string) => (value.endsWith('/') ? value : `${value}/`);

export const getStagingRootPath = (configuredRootPath?: string) =>
  ensureTrailingSlash(ensureLeadingSlash(configuredRootPath || DEFAULT_STAGING_ROOT_PATH));

export const getStagingManifestUrl = (configuredRootPath?: string) =>
  `${getStagingRootPath(configuredRootPath)}previews.json`;

export const parseStagingLocation = (
  pathname: string,
  configuredRootPath?: string,
): StagingLocation => {
  const normalizedPath = ensureLeadingSlash(pathname || '/');
  const stagingRootPath = getStagingRootPath(configuredRootPath);
  const stagingRootWithoutTrailingSlash = stagingRootPath.replace(/\/$/, '');

  if (normalizedPath !== stagingRootWithoutTrailingSlash && !normalizedPath.startsWith(stagingRootPath)) {
    return {
      isStaging: false,
      previewPathSegment: null,
      previewNumber: null,
      relativePath: '',
      stagingRootPath,
    };
  }

  const afterRoot =
    normalizedPath === stagingRootWithoutTrailingSlash ? '' : normalizedPath.slice(stagingRootPath.length);
  const previewMatch = afterRoot.match(/^(pr-(\d+))(?:\/(.*))?$/);

  if (previewMatch) {
    return {
      isStaging: true,
      previewPathSegment: previewMatch[1],
      previewNumber: Number(previewMatch[2]),
      relativePath: previewMatch[3] ? `/${previewMatch[3]}` : '',
      stagingRootPath,
    };
  }

  return {
    isStaging: true,
    previewPathSegment: null,
    previewNumber: null,
    relativePath: afterRoot ? `/${afterRoot}` : '',
    stagingRootPath,
  };
};

export const buildStagingPreviewUrl = (
  relativePath: string,
  previewPathSegment: string | null,
  configuredRootPath?: string,
) => {
  const stagingRootPath = getStagingRootPath(configuredRootPath);
  const cleanRelativePath = relativePath.replace(/^\/+/, '');

  if (!previewPathSegment) {
    return cleanRelativePath ? `${stagingRootPath}${cleanRelativePath}` : stagingRootPath;
  }

  return cleanRelativePath
    ? `${stagingRootPath}${previewPathSegment}/${cleanRelativePath}`
    : `${stagingRootPath}${previewPathSegment}/`;
};
