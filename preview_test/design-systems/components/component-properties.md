
# Component properties

Add custom component data to your design system

---

Using component properties, you can add many layers of information about a component in your design system, such as statuses, links to documentation and other sources, links to components in Figma, boolean values or notes. These properties can be used to track information about your compoents and they can also be used in Supernova documentation. 

In the components view, each column represents a component property. 



Missing parser for block type FigmaFrames

 

Properties require the following details:

- *Name* -> Name of the property

- *Description* -> Description of what the property is for (this will also be used to explain a property where it is used in other places, such as a documentation block)

- *Code name* -> The code-friendly version of the property name, and the name to be used in code generation

- *Type* -> The type of property (see below)

> *Note* -> Once a property has been created, the *type* of property cannot be changed

---

## Types of properties

The types of properties that can be added:



Missing parser for block type Table

 

## Create a new property

1. To create a new property, click the `*+*` button at the end of the properties row

1. In the dialog, fill in the information and select a type

1. Click *`Confirm`* to create the property



Missing parser for block type FigmaFrames

 

## Add options for a select property

A select property type requires one or more options.

- When creating the property, you will have the opportunity to add options in the dialog

- These options can be edited or removed at any time

- If an option is removed it will be removed from all components that contain that value

- You can also add a colour label for the option that will be displayed in the component list

- To remove the colour, click the `Reset` icon

- To remove an option, click the `x` icon to delete it



Missing parser for block type FigmaFrames

 

## Edit a property

1. To edit a property, hover over the property column header and click the *`=`* menu icon

1. Select `Edit property`

1. In the dialog, make the changes and click *`Confirm`*



Missing parser for block type FigmaFrames

 

> *Note* -> Once a property has been created, the *type* of property cannot be changed

## Add or edit a property value

To edit a property value for a component, edit the value for the input on the component row.

Different property types have different methods of editing. A text property can be edited in place, a boolean value is a toggle that can be changed.



Missing parser for block type FigmaFrames

 

## Delete a property

1. To delete a property, hover over the property column header and click the *`=`* menu icon

1. Select `Delete property` and confirm in the delete dialog

1. Alternatively, you can click the *`delete`* button in the *Edit property dialog*

> When a property is deleted, any property values that have been applied to components will also be removed



Missing parser for block type FigmaFrames

 

Text

Editable text 

Number

An editable number 

Boolean

A true or false value, displayed in the list as a toggle

Select

A select input, with options that can be changed

Code

Displayed as code 

URL

An external link

Documentation link

A link to a documentation page in Supernova

Figma component

A connection to a Figma component that has been imported to Supernova