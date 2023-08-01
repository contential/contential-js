export type PromptClientOptions = {
  url?: string;
  key?: string;
};

export type PromptConfig = {
  key: string;
};

export interface PromptOptions {
  prompt: string;
  onUpdate: PromptOnUpdate;
  temperature?: number;
  withoutContext?: boolean;
  contextMatchesMax?: number;
  metadata?: unknown;
}

export type PromptOnUpdate = (data: PromptOptionsData) => void;

export interface PromptOptionsData {
  response: string;
  request?: PromptRequest;
}

export type PromptRequest = {
  id: string;
  created: string;
  userId: string;
  projectId: string;
  prompt: string;
  temperature: number;
  duration: number;
  durationText: string;
  error?: string;
  metadata?: unknown;
  response?: string;
};
