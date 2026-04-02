import {
  buildStagingPreviewUrl,
  parseStagingLocation,
  type StagingPreviewManifestEntry,
} from '@/utils/staging-preview';

const PREVIEW_SWITCHER_SELECTOR = '[data-preview-switcher]';

export const initStagingPreviewSwitcher = () => {
  const switcher = document.querySelector(PREVIEW_SWITCHER_SELECTOR);

  if (!(switcher instanceof HTMLElement)) {
    return;
  }

  const select = switcher.querySelector('select');
  const manifestUrl = switcher.dataset.manifestUrl;
  const stagingRootPath = switcher.dataset.stagingRootPath;
  const currentPath = switcher.dataset.currentPath || window.location.pathname;

  if (!(select instanceof HTMLSelectElement) || !manifestUrl || !stagingRootPath) {
    return;
  }

  const currentLocation = parseStagingLocation(currentPath, stagingRootPath);
  const baseOption = {
    label: 'develop · staging',
    previewPathSegment: '',
  };

  const renderOptions = (entries: StagingPreviewManifestEntry[]) => {
    const options = [baseOption];

    for (const entry of entries) {
      options.push({
        label: entry.label || `${entry.branchName} · PR #${entry.prNumber}`,
        previewPathSegment: entry.previewPathSegment || `pr-${entry.prNumber}`,
      });
    }

    const currentValue = currentLocation.previewPathSegment || '';

    if (currentValue && !options.some((option) => option.previewPathSegment === currentValue)) {
      options.push({
        label: `${currentValue} · unavailable`,
        previewPathSegment: currentValue,
      });
    }

    select.replaceChildren(
      ...options.map((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option.previewPathSegment;
        optionElement.textContent = option.label;
        optionElement.selected = option.previewPathSegment === currentValue;
        return optionElement;
      }),
    );
    select.disabled = options.length <= 1 && !currentValue;
  };

  const loadPreviews = async () => {
    try {
      const response = await fetch(manifestUrl, { cache: 'no-store' });

      if (!response.ok) {
        throw new Error(`Manifest request failed with ${response.status}`);
      }

      const entries = (await response.json()) as StagingPreviewManifestEntry[];
      renderOptions(Array.isArray(entries) ? entries : []);
    } catch (error) {
      console.error('Failed to load staging previews.', error);
      renderOptions([]);
    }
  };

  select.addEventListener('change', () => {
    const targetUrl = buildStagingPreviewUrl(currentLocation.relativePath, select.value || null, stagingRootPath);
    window.location.assign(targetUrl);
  });

  loadPreviews();
};
