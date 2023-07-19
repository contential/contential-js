export interface ApiOptions {
  key?: string;
  url?: string;
}

export interface ApiGetOptions {
  path: string;
}

export interface ApiPostOptions {
  path: string;
  data?: unknown;
}

export interface ApiPutOptions {
  path: string;
  data?: unknown;
}

export interface ApiPatchOptions {
  path: string;
  data?: unknown;
}

export interface ApiDeleteOptions {
  path: string;
}

export interface ApiStreamOptions<ResponseData> {
  path: string;
  data?: unknown;
  onUpdate: (data: ResponseData) => void;
}
