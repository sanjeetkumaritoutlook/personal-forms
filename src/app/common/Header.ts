/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Formio } from 'angular-formio';
//import { Formio } from 'formiojs';

const HTMLComponent  = (Formio as any).Components.components.htmlelement;
const Components = (Formio as any).Components;
/**
 * 
 */
export default class HeaderComponent  extends HTMLComponent  {
  constructor() {
    super();
  }

  /**
   * Define the default schema to change the type and tag and label. 
   */
  static schema(...extend) {
    return HTMLComponent.schema({
      label: 'Header',
      type: 'header',
      tag: 'h1'
    }, ...extend);
  }

   static get builderInfo() {
    return {
      title: 'Header',
      group: 'layout',
      icon: 'code',
      weight: 2,
      documentation: 'https://help.form.io/userguide/introduction#html-element-component',
      schema: HeaderComponent.schema()
    };
  }
}

HeaderComponent.editForm = (...args) => {
  const editForm = HTMLComponent.editForm(...args);
  const tagComponent = Formio.utils.getComponent(editForm.components, 'tag');
  tagComponent.type = 'select';
  tagComponent.dataSrc = 'values';
  tagComponent.data = {
    values: [
      {label: 'H1', value: 'h1'},
      {label: 'H2', value: 'h2'},
      {label: 'H3', value: 'h3'},
      {label: 'H4', value: 'h4'},
      {label: 'H5', value: 'h5'}
    ]
  };
  return editForm;
  
};


// Register the component to the Formio.Components registry.
Components.addComponent('header', HeaderComponent);
