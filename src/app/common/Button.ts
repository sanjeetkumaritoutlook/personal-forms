/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Formio } from 'angular-formio';

const HTMLComponent  = (Formio as any).Components.components.button;
const Components = (Formio as any).Components;
const editForm = (Formio as any).Components.components.nested.editForm;
/**
 * 
 */
export default class LMButtonComponent  extends HTMLComponent  {
   constructor(component, options, data) {
        super(component, options, data);
    }
	 init() {
        super.init();
    }

  static schema(...extend) {
        return HTMLComponent.schema({
      size: 'md',
      leftIcon: '',
      rightIcon: '',
      block: false,
      action: 'submit',
      persistent: false,
      disableOnInvalid: false,
      theme: 'primary',
      dataGridLabel: true,
            label: 'LMButton',
            key: 'fluid-button',
            type: 'fluid-button'
        }, ...extend);
    }

public static editForm = editForm;
  static get builderInfo() {
        return {
            title: 'fluid button',
            group: 'basic',
            icon: 'stop',
            documentation: 'http://help.form.io/userguide/#button',
            weight: 120,
            schema: LMButtonComponent.schema()
        };
    }
   get defaultSchema() {
        return LMButtonComponent.schema();
    }
	 get inputInfo() {
        const info = super.elementInfo();
        info.type = 'button';
        info.attr.type = (['submit', 'saveState'].includes(this.component.action)) ? 'submit' : 'button';
		this.component.theme = this.component.theme || 'default';
    info.attr.class = `btn btn-${this.component.theme}`;
    if (this.component.size) {
      info.attr.class += ` btn-${this.component.size}`;
    }
    if (this.component.block) {
      info.attr.class += ' btn-block';
    }
    if (this.component.customClass) {
      info.attr.class += ` ${this.component.customClass}`;
    }
    info.content = this.t(this.component.label, { _userInput: true });
        return info;
    }
	
	 get labelInfo() {
    return {
      hidden: true
    };
  }

  set loading(loading) {
    this.setLoading(this.refs.button, loading);
  }
	  get className() {
    let className = super.className;
    className += ' form-group';
    return className;
  }
	
	  render(content) {
        return super.render('<button class="fluid-btn lm primary" title="My primary button" role="button"><span class="btn-label">My primary button</span></button>');
    }
    

}

// Use the table component edit form.
  
LMButtonComponent.editForm = editForm;



// Register the component to the Formio.Components registry.
Components.addComponent('fluid-button', LMButtonComponent);
