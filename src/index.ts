// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  TemplateResult,
  css,
} from "lit";
import {
  customElement,
} from 'lit/decorators.js';
import "@spectrum-web-components/card/sp-card.js";

@customElement("my-card")
export default class MyActionGroup extends LitElement {
  static styles = [
    css`
      :host ::slotted([slot='cover-photo']) {
          display: none !important
      }
      
      h1,
      h2 {
        all: unset;
      }
      img {
        height: 100%;
      }
    `,
  ];
  protected render(): TemplateResult {
    return html`
      <sp-card
        toggles
        style="--mod-card-border-color:linear-gradient(
                120deg,
                var(--spectrum-magenta-800) 0%,
                var(--spectrum-indigo-900) 52%,
                var(--spectrum-blue-700) 100%
            )"
      >
        <h1 slot="heading">Card Heading</h1>
        <h2 slot="subheading">JPG</h2>
        <img
          slot="cover-photo"
          src="https://picsum.photos/200/300"
          alt="Demo Image"
        />
        <div slot="footer">Footer</div>
      </sp-card>
    `;
  }
}