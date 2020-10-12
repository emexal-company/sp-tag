import { html } from 'lit-element';
import { DemoTag } from './demo-tag.component';

import '@spectrum/sp-tag';
import '@spectrum/sp-container';

import '@spectrum/sp-rule';
import '@spectrum/sp-demo';

export default function template(this: DemoTag) {
  return html`
      <sp-container>
        <sp-rule medium label="Tag - Standard"></sp-rule>

        <sp-demo width="100">
          <pre><sp-tag label="Tag 1"></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" disabled></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 1" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg"></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" disabled></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 1" icon="Asterisk"></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" icon="Asterisk" invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" icon="Asterisk" disabled></sp-tag></sp-button></pre>
        </sp-demo>

        <sp-rule medium label="Tag - Deletable"></sp-rule>

        <sp-demo width="100">
          <pre><sp-tag label="Tag 1" deletable></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" deletable invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" deletable disabled></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 1" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" deletable></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" deletable invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" avatar="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" deletable disabled></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 1" icon="Asterisk" deletable></sp-tag></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 2" icon="Asterisk" deletable invalid></sp-tag></sp-button></pre>
        </sp-demo>
        <sp-demo width="100">
          <pre><sp-tag label="Tag 3" icon="Asterisk" deletable disabled></sp-tag></sp-button></pre>
        </sp-demo>
  <sp-container>
  `;
}
