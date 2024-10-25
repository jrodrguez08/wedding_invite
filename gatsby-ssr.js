import React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css' });
const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const chunks = extractCriticalToChunks(pathname);
  const styleTags = constructStyleTagsFromChunks(chunks);
  
  setHeadComponents([
    <style
      key="emotion-style-tag"
      dangerouslySetInnerHTML={{ __html: styleTags }}
    />,
  ]);
};

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}>{element}</CacheProvider>;
};
