import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import tagStyles from './tag.styles';
import standardTemplate from './tag.template';

@customElement('sp-tag')
export class Tag extends Base {
  public static componentStyles = [tagStyles];

  @property({ type: String })  public label: string = '';
  @property({ type: String })  public avatar: string = '';
  @property({ type: String })  public icon: string = '';
  @property({ type: Boolean }) public invalid: boolean = false;
  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean }) public deletable: boolean = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-tag': Tag;
  }
}
