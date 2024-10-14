/**
 * Copyright 2024 JAIL10276
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
/*
 * `un-svg`
 *
 * @demo index.html
 * @element un-svg
 */
export class unSvg extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "un-svg";
  }

  constructor() {
    super();
    this.goal = "circle";
    this.imgPath = new URL('./svgs/un-sdg_circle.svg', import.meta.url).href;
    this.width = 254;
    this.height = 254;
    this.label = "Sustainable Developments Logo"
    this.loading = "lazy"
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.isImageVisible = true;
    // 'all'= 18 | 'circle' = 0 *Default
    this.goalNum = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      goal: { type: String },
      imgPath: { type: String },
      height: { type: Number },
      width: { type: Number },
      label: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: Boolean },
      isImageVisible: { type: Boolean },
      goalNum: {type: Number},
    };
  }

  /**
   * This updates the lit elements.
   */
  updated(button_id) {
    console.log(`Button ID: ${button_id}`); // Log the button ID
    // random goal
    if (button_id === -1) {
      this.goalNum = this.getRandomNumber();
      this.imgPath = this.setImageUrl(String(this.goalNum));
      this.label = this.getLabel(this.goalNum);
      console.log(`Random Goal: ${this.goalNum}, Image Path: ${this.imgPath}, Label: ${this.label}`);
    }
    // all goals
    else if (button_id === 18) {
      this.goalNum = button_id;
      this.goal = "all";
      this.imgPath = this.setImageUrl(this.goal);
      this.label = this.getLabel(button_id);
      console.log(`All Goals: ${this.goalNum}, Image Path: ${this.imgPath}, Label: ${this.label}`);
    }
    // default or circle logo
    else {
      this.goalNum = button_id;
      this.goal = "circle";
      this.imgPath = this.setImageUrl(this.goal);
      this.label = this.getLabel(button_id);
      console.log(`Circle Goal: ${this.goalNum}, Image Path: ${this.imgPath}, Label: ${this.label}`);
    }
  }


  /**
   * Getter
   * @param {*} goal_index
   * @returns Goal label.
   */
  getLabel(goal_index){
    if (goal_index===0){
      return "Un Sustainable Goals Logo";
    }
    else if (goal_index===18){
      return "Un Sustainable Goals";
    }
    else{
    const sdgLabelLst = [
      "No Poverty",
      "Zero Hunger",
      "Good Health and Well-being",
      "Quality Education",
      "Gender Equality",
      "Clean Water and Sanitation",
      "Affordable and Clean Energy",
      "Decent Work and Economic Growth",
      "Industry, Innovation, and Infrastructure",
      "Reduced Inequalities",
      "Sustainable Cities and Communities",
      "Responsible Consumption and Production",
      "Climate Action",
      "Life Below Water",
      "Life on Land",
      "Peace, Justice, and Strong Institutions",
      "Partnerships for the Goals"
    ];
    return sdgLabelLst[goal_index-1];
    }
  }
  /**
   * Getter
   * @returns random number between 1 and 17 *Inclusive
   *
   */
  getRandomNumber(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(17);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
  setImageVisibility(boolean){
    boolean ?
    (this.colorOnly = false, this.isImageVisible = true)
    :
    (this.colorOnly = true, this.isImageVisible = false);

  }



  /**
   * Setter
   * @returns URL with specified goal number
   * @param goal
   */
  setImageUrl(goal){
    return new URL(`./svgs/sdg_${goal}.svg`, import.meta.url).href;
  }


  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        /* Color variables */
        --un-sdg-ccirlce: rgb(255,255,255);
        --un-sdg-c1: rgb(235, 28, 44);
        --un-sdg-c2: rgb(210, 160, 42);
        --un-sdg-c3: rgb(44, 155, 72);
        --un-sdg-c4: rgb(194, 31, 51);
        --un-sdg-c5: rgb(239, 64, 42);
        --un-sdg-c6: rgb(0, 173, 216);
        --un-sdg-c7: rgb(253, 183, 19);
        --un-sdg-c8: rgb(143, 23, 55);
        --un-sdg-c9: rgb(243, 109, 36);
        --un-sdg-c10: rgb(224, 21, 131);
        --un-sdg-c11: rgb(249, 157, 37);
        --un-sdg-c12: rgb(207, 141, 42);
        --un-sdg-c13: rgb(72, 119, 61);
        --un-sdg-c14: rgb(0, 125, 187);
        --un-sdg-c15: rgb(63, 175, 73);
        --un-sdg-c16: rgb(1, 85, 138);
        --un-sdg-c17: rgb(25, 54, 103);
        --un-sdg-call: rgb(255,255,255);
      }
      .div{
        padding: 0;
        margin: 0;
      }
      .img,
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        width: var(--width, 200px);
        background-color: var(--goal-color);
        display: block;
      }
      h3 span {
        font-size: var(--un-svg-label-font-size, var(--ddd-font-size-s));
      }
      .color-wrapper{
        height: var(--width, 200px);  // box dimensions
      }
      /* Styling the toggle container */
      .toggle-container {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 30px;
      }

      /* Hide the default checkbox */
      .toggle-input {
        display: none;
      }

      /* Style the toggle switch */
      .toggle-label {
        position: absolute;
        cursor: pointer;
        background-color: #ccc;
        border-radius: 30px;
        width: 100%;
        height: 100%;
        transition: background-color 0.3s;
      }

      /* The circle/knob inside the switch */
      .toggle-label::after {
        content: "";
        position: absolute;
        width: 26px;
        height: 26px;
        background-color: white;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        transition: 0.3s;
      }

      /* When the toggle is checked, change styles */
      .toggle-input:checked + .toggle-label {
        background-color: #4CAF50;
      }

      .toggle-input:checked + .toggle-label::after {
        transform: translateX(30px);
      }
      /* Button Styling */
      button {
        background: linear-gradient(145deg, #000, #333); /* Black gradient */
        border: none;
        border-radius: 25px; /* Rounded corners */
        color: white;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Optional shadow */
      }

      /* Button hover state */
      button:hover {
        background: linear-gradient(145deg, #111, #444); /* Slightly lighter gradient */
      }

      /* Button active (selected) state */
      button:active, button:focus {
        background-color: #d3d3d3; /* Whitish grey when selected */
        color: #333; /* Darker text color when active */
        outline: none; /* Remove outline */
      }

      /* Optional: Add a focus outline for accessibility */
      button:focus-visible {
        outline: 2px solid #999; /* Custom outline for keyboard focus */
      }

    `];
  }


  // Lit render the HTML
  render() {
    console.log(`Rendering with Image Path: ${this.imgPath}, Label: ${this.getLabel(this.goalNum)}`);
    return html`
      ${this.colorOnly ?
        html`
          <div class="color-wrapper" style="--width: ${this.width}px; --goal-color: var(--un-sdg-c${this.goal})" label="${this.getLabel(this.goalNum)} color only"></div>
        `
        : this.isImageVisible ? html`
            <div class="svg-wrapper" style="--width: ${this.width}px; --goal-color: var(--un-sdg-c${this.goal})">
              <img src=${this.imgPath} alt=${this.getLabel(this.goalNum)} loading="lazy" fetchpriority="low" width=${this.width}>
            </div>
          `
          :
          html`
            <div class="svg-wrapper" style="--width: ${this.width}px; --goal-color: var(--un-sdg-c${this.goal})">
              <img src='' alt="" loading="lazy" fetchpriority="low" width=${this.width}>
            </div>
          `
      }`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSvg.tag, unSvg);
