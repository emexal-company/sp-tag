import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import tagStyles from './tag.styles';
import standardTemplate from './tag.template';
let Tag = class Tag extends Base {
    constructor() {
        super(...arguments);
        this.label = '';
        this.avatar = '';
        this.icon = '';
        this.invalid = false;
        this.disabled = false;
        this.deletable = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Tag.componentStyles = [tagStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Tag.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Tag.prototype, "avatar", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Tag.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tag.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tag.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tag.prototype, "deletable", void 0);
Tag = __decorate([
    customElement('sp-tag')
], Tag);
export { Tag };
//# sourceMappingURL=tag.component.js.map