import { ContentialApi } from '@contential/api';
import { PromptClientOptions, PromptOptions, PromptRequest } from './types';

export class ContentialPrompt {
  apiClient: ContentialApi;

  constructor(options?: PromptClientOptions) {
    this.apiClient = new ContentialApi({
      url: options?.url,
      key: options?.key,
    });
  }

  async prompt(options: PromptOptions) {
    const result = await this.apiClient.stream<{
      response: string;
      request?: PromptRequest;
    }>({
      path: '/prompt',
      data: {
        prompt: options.prompt,
        temperature: options.temperature,
        stream: true,
        withoutContext: options.withoutContext,
        contextMatchesMax: options.contextMatchesMax,
        metadata: options.metadata,
      },
      onUpdate: options.onUpdate,
    });

    return result;
  }
}
