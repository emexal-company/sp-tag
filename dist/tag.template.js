import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-button';
import '@spectrum/sp-icon';
import '@spectrum/sp-avatar';
export default function standardTemplate() {
    const classes = {
        'is-disabled': this.disabled,
        'is-invalid': this.invalid,
        'spectrum-Tags-item--deletable': this.deletable,
    };
    return html `
      <div class="spectrum-Tags" role="list" aria-label="${this.aria_label}">
        <div class="spectrum-Tags-item ${classMap(classes)}" role="listitem" tabindex="0">
          ${this.avatar ? html `<sp-avatar class="spectrum-Avatar" src="${this.avatar}" alt="Avatar"></sp-avatar>` : ''}
          ${this.icon ? html `<sp-icon class="spectrum-Icon" size="XS" name="${this.icon}"></sp-icon>` : ''}
          <span class="spectrum-Tags-itemLabel">${this.label}</span>
          ${this.deletable ? html `<sp-button type="clear" small class="spectrum-ClearButton"></sp-button>` : ''}
        </div>
      </div>
    `;
}
//# sourceMappingURL=tag.template.js.map