export const isServer = () => {
  return !(typeof window != 'undefined' && window.document);
};

export const isClient = () => {
  return !isServer();
};

export const isSecretKey = (key: string) => {
  return key.startsWith('sk_');
};

export const getApiUrl = (url: string | undefined) => {
  if (url) return url;

  return (
    process.env['CONTENTIAL_API_URL'] ||
    process.env['NEXT_PUBLIC_CONTENTIAL_API_URL'] ||
    process.env['VITE_CONTENTIAL_API_URL'] ||
    process.env['REACT_APP_CONTENTIAL_API_URL'] ||
    process.env['GATSBY_CONTENTIAL_API_URL'] ||
    'https://api.contential.ai'
  );
};

export const getKey = (key: string | undefined) => {
  if (key) return key;

  return (
    process.env['CONTENTIAL_SECRET_KEY'] ||
    process.env['CONTENTIAL_PUBLISHABLE_KEY'] ||
    process.env['NEXT_PUBLIC_CONTENTIAL_PUBLISHABLE_KEY'] ||
    process.env['VITE_CONTENTIAL_PUBLISHABLE_KEY'] ||
    process.env['REACT_APP_CONTENTIAL_PUBLISHABLE_KEY'] ||
    process.env['GATSBY_CONTENTIAL_PUBLISHABLE_KEY'] ||
    ''
  );
};
