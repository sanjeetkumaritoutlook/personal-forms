import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/form.json';
@Component({
  selector: 'app-minimalform',
  //templateUrl: './minimalform.component.html',
 template:'<sf-form [schema]="mySchema"></sf-form>',
  styleUrls: ['./minimalform.component.css']
})
export class MinimalformComponent implements OnInit {
 // The schema that will be used to generate a form
 form: any = (data as any).default;
 mySchema = {
  "$schema": "http://json-schema.org/draft-04/hyper-schema#",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title",
      "widget": {
        "id": "select"
      },
      "readOnly": true,
      "enum": [
        "Prof",
        "Dr",
        "Ms",
        "Mr"
      ],
      "buttons": [
        {
          "id": "toggle_title",
          "label": "Toggle title disabled state"
        }
      ]
    },
    "firstName": {
      "type": "string",
      "placeholder": "First name",
      "minLength": 2,
      "maxLength": 40,
      "title": "First name",
      "description": "First name",
      "isRequired": true,
      "widget": {
        "id": "string"
      }
    },
    "lastName": {
      "type": "string",
      "placeholder": "Last name",
      "minLength": 2,
      "maxLength": 40,
      "title": "Last name",
      "description": "Last name",
      "isRequired": true,
      "widget": {
        "id": "string"
      }
    },
    "bornOn": {
      "type": "string",
      "format": "date",
      "widget": {
        "id": "date"
      },
      "default": "1800-12-12",
      "placeholder": "Ex: 2009-03-11",
      "description": "Born on"
    },
    "contributors": {
      "description": "Contributors",
      "type": "array",
      "items": {
        "type": "string",
        "widget": {
          "id": "string"
        }
      },
      "widget": {
        "id": "array"
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string",
        "oneOf": [
          {
            "description": "Dog",
            "enum": [
              "dog"
            ]
          },
          {
            "description": "Cat",
            "enum": [
              "cat"
            ]
          },
          {
            "description": "Daulphin",
            "enum": [
              "daulphin"
            ]
          }
        ],
        "widget": {
          "id": "string"
        }
      },
      "widget": {
        "id": "checkbox"
      }
    },
    "moreInfo": {
      "type": "boolean",
      "widget": {
        "id": "checkbox"
      },
      "description": "More information?",
      "default": true
    },
    "survey": {
      "type": "object",
      "description": "Little survey",
      "properties": {
        "q1": {
          "type": "string",
          "description": "Enter a number",
          "widget": {
            "id": "string"
          }
        },
        "q2": {
          "type": "object",
          "description": "Address",
          "properties": {
            "color": {
              "description": "color",
              "type": "string",
              "default": "#aaa000",
              "pattern": "ff$",
              "widget": {
                "id": "color"
              }
            },
            "zip": {
              "description": "zip",
              "type": "number",
              "default": 15,
              "widget": {
                "id": "number"
              }
            }
          },
          "fieldsets": [
            {
              "id": "fieldset-default",
              "title": "",
              "description": "Address",
              "name": "",
              "fields": [
                "color",
                "zip"
              ]
            }
          ],
          "widget": {
            "id": "object"
          }
        }
      },
      "fieldsets": [
        {
          "id": "fieldset-default",
          "title": "",
          "description": "Little survey",
          "name": "",
          "fields": [
            "q1",
            "q2"
          ]
        }
      ],
      "widget": {
        "id": "object"
      }
    },
    "favoriteColor": {
      "type": "string",
      "pattern": "^#[0-9a-fA-F]{6}$",
      "widget": {
        "id": "color"
      },
      "default": "red",
      "description": "Favorite color",
      "visibleIf": {
        "moreInfo": [
          true
        ]
      }
    },
    "transactionNumber": {
      "type": "integer",
      "minimum": 0,
      "readOnly": "true",
      "description": "Transaction number",
      "isRequired": true,
      "widget": {
        "id": "integer"
      }
    },
    "transactionDescription": {
      "type": "string",
      "widget": {
        "id": "textline"
      },
      "description": "What is being transacted"
    },
    "category": {
      "type": "array",
      "widget": {
        "id": "select"
      },
      "items": {
        "type": "string",
        "oneOf": [
          {
            "description": "Design",
            "enum": [
              "design"
            ]
          },
          {
            "description": "High-Tech",
            "enum": [
              "hightech"
            ]
          },
          {
            "description": "Materials",
            "enum": [
              "materials"
            ]
          },
          {
            "description": "Services",
            "enum": [
              "services"
            ]
          }
        ],
        "widget": {
          "id": "string"
        }
      },
      "description": "Category"
    },
    "promotion": {
      "type": "string",
      "description": "Promotion",
      "widget": {
        "id": "radio"
      },
      "oneOf": [
        {
          "description": "Student discount (20%)",
          "enum": [
            "student"
          ]
        },
        {
          "description": "Summer 2016 discount (15%)",
          "enum": [
            "summer"
          ]
        },
        {
          "description": "None",
          "enum": [
            "none"
          ]
        }
      ]
    },
    "confirmationMail": {
      "type": "string",
      "description": "Email",
      "format": "email",
      "widget": {
        "id": "string"
      }
    },
    "password": {
      "type": "string",
      "widget": {
        "id": "password"
      },
      "description": "Password",
      "isRequired": true
    },
    "numberOfBoxes": {
      "type": "number",
      "widget": {
        "id": "range"
      },
      "description": "Number of boxes required",
      "minimum": 1,
      "maximum": 10
    },
    "deliveryService": {
      "type": "string",
      "widget": {
        "id": "select"
      },
      "description": "Delivery service",
      "oneOf": [
        {
          "description": "UPS",
          "enum": [
            "ups"
          ]
        },
        {
          "description": "FedEx",
          "enum": [
            "fedex"
          ]
        },
        {
          "description": "Other",
          "enum": [
            "other"
          ]
        }
      ],
      "default": "fedex"
    },
    "otherDeliveryService": {
      "type": "string",
      "minLength": 2,
      "visibleIf": {
        "deliveryService": [
          "other"
        ]
      },
      "widget": {
        "id": "string"
      }
    },
    "freeShipping": {
      "type": "boolean",
      "widget": {
        "id": "checkbox"
      },
      "description": "Free shipping",
      "visibleIf": {
        "deliveryService": [
          "other",
          "ups"
        ]
      }
    },
    "shippingPrice": {
      "type": "number",
      "description": "ShippingCost",
      "minimum": 0,
      "maximum": 200,
      "visibleIf": {
        "freeShipping": [
          false
        ]
      },
      "widget": {
        "id": "number"
      }
    },
    "sendApologies": {
      "type": "boolean",
      "widget": {
        "id": "checkbox"
      },
      "description": "Send apologies for the shipping cost",
      "visibleIf": {
        "shippingPrice": [
          22,
          23
        ]
      }
    },
    "useCustomEmail": {
      "type": "boolean",
      "description": "Write a custom email ?",
      "widget": {
        "id": "boolean"
      }
    },
    "customEmail": {
      "type": "string",
      "widget": {
        "id": "textarea"
      },
      "description": "Email to send",
      "visibleIf": {
        "useCustomEmail": [
          true
        ]
      },
      "pattern": "^<h1>"
    },
    "userManual": {
      "type": "object",
      "widget": {
        "id": "file"
      },
      "properties": {
        "content-type": {
          "type": "string",
          "widget": {
            "id": "string"
          }
        },
        "filename": {
          "type": "string",
          "widget": {
            "id": "string"
          }
        },
        "size": {
          "type": "integer",
          "widget": {
            "id": "integer"
          }
        },
        "encoding": {
          "type": "string",
          "widget": {
            "id": "string"
          }
        },
        "data": {
          "type": "string",
          "widget": {
            "id": "string"
          }
        }
      },
      "description": "Add a manual for the delivered items",
      "visibleIf": {
        "category": [
          "hightech"
        ]
      },
      "fieldsets": [
        {
          "id": "fieldset-default",
          "title": "",
          "description": "Add a manual for the delivered items",
          "name": "",
          "fields": [
            "content-type",
            "filename",
            "size",
            "encoding",
            "data"
          ]
        }
      ]
    },
    "colors": {
      "type": "array",
      "description": "Colors",
      "index": "i",
      "items": {
        "type": "string",
        "description": "Color $i",
        "widget": {
          "id": "color"
        },
        "buttons": [
          {
            "label": "Supprimer",
            "id": "Remove"
          }
        ]
      },
      "buttons": [
        {
          "label": "Ajouter",
          "id": "addItem",
          "parameters": {
            "value": "#afeadd"
          }
        },
        {
          "label": "Reset",
          "id": "reset"
        }
      ],
      "widget": {
        "id": "array"
      }
    }
  },
  "buttons": [
    {
      "label": "Alert",
      "id": "alert"
    },
    {
      "label": "Reset",
      "id": "reset"
    },
    {
      "label": "Disable all",
      "id": "disable"
    }
  ],
  "fieldsets": [
    {
      "id": "part_1",
      "title": "Part 1 - Recipient",
      "fields": [
        "title",
        "firstName",
        "lastName",
        "contributors",
        "categories",
        "bornOn",
        "moreInfo",
        "favoriteColor",
        "colors",
        "survey"
      ]
    },
    {
      "id": "part_2",
      "title": "Part 2 - Transaction",
      "fields": [
        "transactionNumber",
        "transactionDescription",
        "promotion",
        "category",
        "userManual"
      ]
    },
    {
      "id": "part_3",
      "title": "Part 3 - Shipping",
      "fields": [
        "numberOfBoxes",
        "deliveryService",
        "otherDeliveryService",
        "freeShipping",
        "shippingPrice",
        "sendApologies"
      ]
    },
    {
      "id": "part_4",
      "title": "Part 4 - Email",
      "fields": [
        "useCustomEmail",
        "customEmail"
      ]
    },
    {
      "id": "part_5",
      "title": "Part 5 - Confirmation",
      "fields": [
        "confirmationMail",
        "password"
      ]
    }
  ],
  "required": [
    "firstName",
    "lastName",
    "transactionNumber",
    "password"
  ],
  "widget": {
    "id": "object"
  }
};
  constructor() { }

  ngOnInit(): void {
  }

}
