/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Formio } from 'angular-formio';

const SelectComponent  = (Formio as any).Components.components.select;
const Components = (Formio as any).Components;
const editForm = (Formio as any).Components.components.nested.editForm;
/**
 * 
 */
 
export default class LMSelectComponent  extends SelectComponent  {
   constructor(component, options, data){

        super(component, options, data);
    }
	
	
  static schema(...extend) {
        return SelectComponent.schema({
      type: 'custom-select',
      label: 'Select',
      key: 'select',
      idPath: 'id',
      data: {
        values: [{ label: '', value: '' }],
        json: '',
        url: '',
        resource: '',
        custom: ''
      },
        }, ...extend);
    }

public static editForm = editForm;
  static get builderInfo() {
        return {
            title: 'Custom Select',
            group: 'basic',
            icon: 'stop',
            documentation: 'http://help.form.io/userguide/#select',
            weight: 120,
            schema: LMSelectComponent.schema()
        };
    };
	
 init() {
       super.init();

	    }

	 get isInfiniteScrollProvided() {
    return this.isSelectResource || this.isSelectURL;
  }

 /* eslint-disable max-statements */
  attach(element) {
    const superAttach = super.attach(element);
   
  
   
   

   
   
   
   
	  
	    if (this.choices && this.choices.input && this.choices.input.element) {
			
	 this.addEventListener(this.choices.input.element, 'keydown', (event) => {
	
		
         if (event.keyCode === 13 && event.target.value) {
            let keywordHits = 0;
			
            [...this.choices.choiceList.element.children].forEach((element) => {
                if (element.innerText.includes(event.target.value)) {
                    keywordHits += 1;
                }
				
            });
            if (!keywordHits) {
                event.stopPropagation();
                this.choices.setChoices([
                    {
                        value: event.target.value,
                        label: event.target.value,
                        selected: true,
                    },
                ], 'value', 'label', false);
				const linterEvent = event;
                linterEvent.target.value = '';
               
            }
        }
    });
		}
	
  
   
 // Force the disabled state with getters and setters.
    this.disabled = this.shouldDisabled;
    this.triggerUpdate();
    return superAttach;
  }

	
    

}

// Use the table component edit form.
  
LMSelectComponent.editForm = editForm;



// Register the component to the Formio.Components registry.
Components.addComponent('custom-select', LMSelectComponent);
