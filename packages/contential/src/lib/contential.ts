import { ContentialPrompt } from '@contential/prompt';
import { PromptOptions } from '../prompt';
import { ContentialOptions } from './types';

export class Contential {
  private promptClient: ContentialPrompt;

  constructor(options?: ContentialOptions) {
    this.promptClient = new ContentialPrompt(options);
  }

  public prompt(options: PromptOptions) {
    return this.promptClient.prompt(options);
  }
}
