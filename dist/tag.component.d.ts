import { Base } from '@spectrum/sp-base';
export declare class Tag extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    label: string;
    avatar: string;
    icon: string;
    invalid: boolean;
    disabled: boolean;
    deletable: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-tag': Tag;
    }
}
