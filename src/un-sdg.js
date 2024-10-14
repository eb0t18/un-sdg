import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  //sets all of the default values of the properties defined in get properties()
  //uses circle and 254x254 px as defaults
  constructor() {
    super();
    this.goal = "circle";
    this.width = "254px";
    this.height = "254px";
    this.label = "Sustainable developments logo";
    this.source = "../lib/svgs/circle.png"
    this.loading = "lazy"
    this.fetchPriority = "low";
    this.colorOnly = false;
  }

  // sets all of the properties that you can change when using the un-sdg tag in index.html
  static get properties() {
    return {
      goal: { type: String, reflect: true },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      source: {type: String },
      loading: { type: String, reflect: true },
      fetchPriority: { type: String, reflect: true },
      colorOnly: { type: Boolean },
    };
  }

  // uses CSS to handle any styling
 //each goal has a color attached to it using rgb values found with 3rd party color finder. This helps for the colorOnly boolean
  static get styles() {
    return [super.styles,
    css`
      :host {
        --goal-1: rgb(235, 28, 44);
        --goal-2: rgb(210, 160, 42);
        --goal-3: rgb(44, 155, 72);
        --goal-4: rgb(194, 31, 51);
        --goal-5: rgb(239, 64, 42);
        --goal-6: rgb(0, 173, 216);
        --goal-7: rgb(253, 183, 19);
        --goal-8: rgb(143, 23, 55);
        --goal-9: rgb(243, 109, 36);
        --goal-10: rgb(224, 21, 131);
        --goal-11: rgb(249, 157, 37);
        --goal-12: rgb(207, 141, 42);
        --goal-13: rgb(72, 119, 61);
        --goal-14: rgb(0, 125, 187);
        --goal-15: rgb(63, 175, 73);
        --goal-16: rgb(1, 85, 138);
        --goal-17: rgb(25, 54, 103);

        display: inline-flex;
        width: var(--width);
        height: var(--height);
        background-color: white;
      }
      .wrapper {  
        width: var(--width);
        height: var(--height);
        padding: 0;
        margin: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `];
  }

  // This function runs every time a property of un-sdg changes
  updated(changedProperties) {
    //Executes when the goal property of un-sdg is changed
    if (changedProperties.has("goal")) {
      this.imageCases();
    } 
  }
  // sets this.source and this.label according to the goal property that was updated 
  imageCases() {
    //grabs the goal attribute as the goal property is updated in un-sdg
    const goal = this.getAttribute("goal");
    
    //checks if goal is circle as this is the only png
    if (this.goal === "circle") {
      this.source = new URL(`../lib/svgs/circle.png`, import.meta.url).href;
    }
    //otherwise, it can use this.goal to find where the svg is located
    else {
      this.source = new URL(`../lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;
    }
   
  //this switch functions as a way to go through 17 different cases and set the alt (label) for each
  //also can use a dictionary for the same purpose
    switch (goal) {
      case "circle":
        this.label = "Sustainable developments logo";
        break;
      case "all":
        this.label = "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
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
    }
  }

  //render the background colors if thisColorOnly is true, or the svg image if false
  render() {
    return html`
      <style>
        :host {
          --width: ${this.width};
          --height: ${this.height};
        }
       </style>
      <!-- References the variables set in getStyles to set the background color for each respective goal-->
      <div 
        class="wrapper" 
        style="background-color: var(--goal-${this.goal});"
        >
        <!-- This is a ternary operator. it will only set the image as seen in the code below if the boolean colorOnly is false -->
        <!-- if true, runs ,<img/> if false, it doesn't -->
        
        ${this.colorOnly 
        ? `` 
        : html `
            <img 
              src="${this.source}"
              alt="${this.label}"
              loading="${this.loading}"
              fetchpriority="${this.fetchPriority}"
            />
        `}
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg)