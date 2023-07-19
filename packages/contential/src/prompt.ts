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
}

export type PromptOnUpdate = (data: PromptOptionsData) => void;

export interface PromptOptionsData {
  text: string;
}
