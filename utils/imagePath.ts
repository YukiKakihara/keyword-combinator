export const imagePath = (imageName: string) => {
  const host = process.env.NEXT_PUBLIC_HOST || '';
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
  const imagePrefix = assetPrefix + '/images/'

  return host + imagePrefix + imageName;
};
