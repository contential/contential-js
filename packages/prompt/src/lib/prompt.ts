import { ContentialApi } from '@contential/api';
import { PromptClientOptions, PromptOptions } from './types';

export class ContentialPrompt {
  apiClient: ContentialApi;

  constructor(options?: PromptClientOptions) {
    this.apiClient = new ContentialApi({
      url: options?.url,
      key: options?.key,
    });
  }

  async prompt(options: PromptOptions) {
    const result = await this.apiClient.stream<{ text: string }>({
      path: '/prompt',
      data: { prompt: options.prompt },
      onUpdate: options.onUpdate,
    });

    return result;
  }
}
