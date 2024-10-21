import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  // Sets default variables
  constructor() {
    super();
    this.goal = "circle"; // Default goal
    this.width = "254px";
    this.height = "254px";
    this.label = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false; // Whether to display colors only
    this.showAllGoals = false; // Whether to show all goals
    this.showRandomGoal = false; // Whether to show a random goal
  }

  // Define reactive properties that trigger updates when changed
  static get properties() {
    return {
      goal: { type: String, reflect: true },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      colorOnly: { type: Boolean, reflect: true },
      showAllGoals: { type: Boolean, reflect: true },
      showRandomGoal: { type: Boolean, reflect: true },
    };
  }

  // Define component styles
  static get styles() {
    return css`
      :host {
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);
        display: block;
        width: var(--width, 254px);
        height: var(--height, 254px);
        text-align: center;
        padding: 10px;
        color: white;
        font-family: Arial, sans-serif;
      }
      .svg-wrapper {
        width: var(--width, 254px);
        height: var(--height, 254px);
        padding: 0;
        margin: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `;
  }

  // Runs every time a property changes
  updated(changedProperties) {
    // If the 'goal' property changes, update the alt text
    if (changedProperties.has("goal")) {
      this.updateAlt();
    }
  }

  // Update the label (alt text) based on the goal property value
  updateAlt() {
    switch (this.goal) {
      case "circle":
        this.label = "Sustainable developments logo";
        break;
      case "all":
        this.label = "All SDG goals displayed";
        break;
      case "1":
        this.label = "Goal 1: No poverty";
        break;
      case "2":
        this.label = "Goal 2: Zero hunger";
        break;
      case "3":
        this.label = "Goal 3: Good health and well-being";
        break;
      case "4":
        this.label = "Goal 4: Quality education";
        break;
      case "5":
        this.label = "Goal 5: Gender equality";
        break;
      case "6":
        this.label = "Goal 6: Clean water and sanitation";
        break;
      case "7":
        this.label = "Goal 7: Affordable and clean energy";
        break;
      case "8":
        this.label = "Goal 8: Decent work and economic growth";
        break;
      case "9":
        this.label = "Goal 9: Industry, innovation and infrastructure";
        break;
      case "10":
        this.label = "Goal 10: Reduced inequalities";
        break;
      case "11":
        this.label = "Goal 11: Sustainable cities and communities";
        break;
      case "12":
        this.label = "Goal 12: Responsible consumption and production";
        break;
      case "13":
        this.label = "Goal 13: Climate action";
        break;
      case "14":
        this.label = "Goal 14: Life below water";
        break;
      case "15":
        this.label = "Goal 15: Life on land";
        break;
      case "16":
        this.label = "Goal 16: Peace, justice and strong institutions";
        break;
      case "17":
        this.label = "Goal 17: Partnerships for the goals";
        break;
      case "color":
        this.label = "Color Only";
        break;
      default:
        this.label = "Sustainable Development Goal";
        break;
    }
  }

  // Toggle display mode to show all goals
  toggleShowAllGoals() {
    this.showAllGoals = true;
    this.showRandomGoal = false;
    this.requestUpdate(); // Request a re-render
  }

  // Toggle display mode to show a random goal
  toggleShowRandomGoal() {
    this.showAllGoals = false;
    this.showRandomGoal = true;
    this.requestUpdate();
  }

  // Toggle color-only mode
  toggleColorOnly() {
    this.colorOnly = !this.colorOnly;
    this.requestUpdate();
  }

  // Render the appropriate content based on the active mode
  render() {
    if (this.showAllGoals) {
      return html`<div class="svg-wrapper">${this.renderGoals(this.colorOnly)}</div>`;
    } else if (this.showRandomGoal) {
      const randomGoal = Math.floor(Math.random() * 17) + 1; // Generate random goal
      return html`
        <div class="svg-wrapper" style="background-color: var(--un-sdg-goal-${randomGoal});">
          ${this.colorOnly
        ? ""
        : html`<img src="./lib/svgs/un-sdg_${randomGoal}.svg" alt="${this.label}" />`}
        </div>
      `;
    } else {
      return html`
        <div class="svg-wrapper" style="background-color: var(--un-sdg-goal-${this.goal});">
          ${this.colorOnly
            ? ""
            : html`<img src="./lib/svgs/un-sdg_${this.goal}.svg" alt="${this.label}"/>`}
        </div>
      `;
    }
  }

  // Render all goals as separate components
  renderGoals(colorOnly) {
    const goals = Array.from({ length: 17 }, (_, i) => i + 1); // Create array [1, 2, ..., 17]
    return goals.map(
      (goal) => html`
        <un-sdg goal="${goal}" ?colorOnly="${colorOnly}"></un-sdg>
      `
    );
    debugger
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

// Register the custom element globally
globalThis.customElements.define(unSdg.tag, unSdg);
