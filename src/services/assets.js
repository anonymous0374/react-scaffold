import { get, post } from 'utilities/http';

export function getAlllAssets() {
  return get('/ams/allAssets', {});
}

export function getAssetsByOwner(owner) {
  return get('/ams/assets', { owner });
}

export function updateAssets(assets) {
  return post('/ams/assets', assets);
}
