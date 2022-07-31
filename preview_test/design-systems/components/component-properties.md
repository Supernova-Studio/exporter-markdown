
# Component properties

Add custom component data to your design system

---

Using component properties, you can add many layers of information about a component in your design system, such as statuses, links to documentation and other sources, links to components in Figma, boolean values or notes. These properties can be used to track information about your compoents and they can also be used in Supernova documentation. 

In the components view, each column represents a component property. 

  
![ Components](https://studio-assets.supernova.io/design-systems/6475/c9beb81d-0eac-4a60-9e10-bc96fc5c6fd1.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M5YmViODFkLTBlYWMtNGE2MC05ZTEwLWJjOTZmYzVjNmZkMS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=HQ1JABWMQ34YnPoGIrGQeu4Tjtzw0EKICsCSjK0~ZUp6ppEi6eLrIrkMkm8nKV3JnQPed5LgQwk7Z6BwU8om4wV819kzFmXklCyjON0Lvfi~-ERDtNMRoPu-d9XU8LDFVz7Uc6ZIRWPrmM08wlp1h7Rra5HZN12kpi9o4~wMzvjQwHUg907nxjy95fjSO9-~BhcGafgoTkhsqvo1p~aogUCGTkTCNkJkcV2~oCMZ60M129lD3q-lL-FF7yYT-E5-Xht84YJ2rUibbjdH2SxvwYYtQMfyXwgilsVj1vefq4uQO5JesTsDlvRkP5KDXSZxrldpJ2O-90AJoyrqdW0Y6w__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
 Components  


Properties require the following details:

- *Name* -> Name of the property

- *Description* -> Description of what the property is for (this will also be used to explain a property where it is used in other places, such as a documentation block)

- *Code name* -> The code-friendly version of the property name, and the name to be used in code generation

- *Type* -> The type of property (see below)

> Be warned:  
> *Note* -> Once a property has been created, the *type* of property cannot be changed

---

## Types of properties

The types of properties that can be added:

  
| Column 1 | Column 2 |  
| --- | --- |  
| Text | Editable text  |  
| Number | An editable number  |  
| Boolean | A true or false value, displayed in the list as a toggle |  
| Select | A select input, with options that can be changed |  
| Code | Displayed as code  |  
| URL | An external link |  
| Documentation link | A link to a documentation page in Supernova |  
| Figma component | A connection to a Figma component that has been imported to Supernova |  


## Create a new property

1. To create a new property, click the `*+*` button at the end of the properties row

1. In the dialog, fill in the information and select a type

1. Click *`Confirm`* to create the property

  
![New property - Boolean](https://studio-assets.supernova.io/design-systems/6475/ecbbe1de-be5f-4018-b77e-edffb3c6698a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2VjYmJlMWRlLWJlNWYtNDAxOC1iNzdlLWVkZmZiM2M2Njk4YS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=PIMArD3rgWSK--o3vCOUmIQ8JC4w99Mme-lZlfbiwDr61PahDpgm-ZzyspNkRyf-ldwqYzZk~eX8pD7XAto0AGGDtiup5pXLR8fjNZr8HDyky3l8h-E7CZiWLPxRsmTriVE8RAuUrufMXa~tWaSrTtxM3byrnKgUruUR9tQuMUBBuLWT~eoHDUmEEEtRcLOvYxYxFN9Ahf0~sKyXEhsMrDbUqhOyOTI5QisQiTpSyHa8NYtAd0puQy86XtO-rFsVWynXWCVAwtq9jpNVyytgu0z0d48sXJBSCrhl8E2c6RVEbhh9JzFE8Al6p86py4NCAUSE9gb7bxOPLXrn~0r2Dw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New property - Boolean  


## Add options for a select property

A select property type requires one or more options.

- When creating the property, you will have the opportunity to add options in the dialog

- These options can be edited or removed at any time

- If an option is removed it will be removed from all components that contain that value

- You can also add a colour label for the option that will be displayed in the component list

- To remove the colour, click the `Reset` icon

- To remove an option, click the `x` icon to delete it

  
![New property Select](https://studio-assets.supernova.io/design-systems/6475/5b1d4f4e-63f6-4cdd-b445-178893e7f755.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzViMWQ0ZjRlLTYzZjYtNGNkZC1iNDQ1LTE3ODg5M2U3Zjc1NS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=YKz2S3r99YrcsT8RPwQlFHG390kGmSma1yIenUCwFDV8HOEbfVcx-zVeQMYI66rRXyHqehcgW160zf8Iw63OGoQoY9-l46HQ7n0A-J7hRWhmwaXP9P2eQgIWnMfpQOlzG4UXZR8G5OQJ0BgX6MESt8y2xqee~Zv~2MRR8PIdNQiQ-pvWh3u3mH64BJ5TfHT661kSZsrsLVyahz13utdmfYVVbpa-n-Z1kmrxBGLd5DM9xhs6uLKyugFAnUdOu6kIqUsQ7wdNCPz9STne-p~UuJ8oQKejNU3kEYFB6oMAbOPfrqWnOCf8j3AH20W70v5K19X5J7J2KFRCMPWy~NGxrg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New property Select  


## Edit a property

1. To edit a property, hover over the property column header and click the *`=`* menu icon

1. Select `Edit property`

1. In the dialog, make the changes and click *`Confirm`*

  
![Edit property menu](https://studio-assets.supernova.io/design-systems/6475/d4b35dd8-ff3f-47b7-bca0-1531ef852ae3.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2Q0YjM1ZGQ4LWZmM2YtNDdiNy1iY2EwLTE1MzFlZjg1MmFlMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=I5HSCd7gtFTMTgob-sKt78W~TdEBxAECNOPMTG72bDkmbFv6bFzuwHLNw5GD1zoqbmXn9azrBjeOEn7cdBgYUZTvORwyS4aFI1xmQTwhQ~x3UrmxhkakRksm1Tpno70~1Fbc6MYmG5Gg3VI8~OdZash5l9Lxqu3zpDrdmPFQzTAcpbH6~BLP9sKC0LMs-D7dPhIiCdBBnI30CyFClMdx~KUVf~QkSQ5apbCiJ3oiNsWVg71-F4dmiL2w5Yo4e--qjC0kM-NcejqlxXEHoF7WczwRObUhI6Rzlg0VP30JGeQgfThqD3KR3N8jbiLBIiPMRInPiWRkFLzxGWbFbPEsyA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Edit property menu  


> Be warned:  
> *Note* -> Once a property has been created, the *type* of property cannot be changed

## Add or edit a property value

To edit a property value for a component, edit the value for the input on the component row.

Different property types have different methods of editing. A text property can be edited in place, a boolean value is a toggle that can be changed.

  
![Edit component](https://studio-assets.supernova.io/design-systems/6475/26830d55-a730-4d52-b757-3952d2378ff4.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzI2ODMwZDU1LWE3MzAtNGQ1Mi1iNzU3LTM5NTJkMjM3OGZmNC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=QjMP9DNsxeXjiY0EzEhFqAVO9h0asBixLmXOwoUJBITTl26WlerL9IWF2be7GIwwGJFdboOa8KdMbaTFKjvF7NtLxoiRvIpBDgRFs17XIrV8P2eaF-IHpXEUMWC33PMwORs6FGFBgGajapTGxon8fxEqRtgheygd4WEZcp47oVXA5tw7ZE1jRVePXaXCzGNSEIRDxsfhpNH1wNz7i1jKjlJ3xtsKFheB2ZXFbzJIOzLActeTmesn3Xo7ip7RTOhOub~MQwykJQjLEY3lExFHe8a5b3w1NbzbBP8~x9XK~5u~eFfYeOrrhOYZPJOUaSCAaRn8GhCIlLcE3TCAVnSMpg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Edit component  


## Delete a property

1. To delete a property, hover over the property column header and click the *`=`* menu icon

1. Select `Delete property` and confirm in the delete dialog

1. Alternatively, you can click the *`delete`* button in the *Edit property dialog*

> Be warned:  
> When a property is deleted, any property values that have been applied to components will also be removed

  
![Delete property](https://studio-assets.supernova.io/design-systems/6475/e7f6b346-3010-4a65-bf98-09d922cbd3f7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2U3ZjZiMzQ2LTMwMTAtNGE2NS1iZjk4LTA5ZDkyMmNiZDNmNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=e4s6yqJZvJjZ8nANlenqsYsXv30-0vRO9D0ISOc9mRBNDONxznqBtggNmaiILqfSzBbT~aBeBce42N1RYNOO-GXXQlVcaM5fgs2D35zcwoiala~7cH30So9tdfpuvwqqiyK88qeJGeXcnlZaZ4Wwd6TFx6KZsbWe9Ay1QIvfKTPLE-uc9d6-w8Ep2BsFKiXlIM4gHjter-ruGbPhr3E6EqB-lel9zuii5TezGyUXq~hljW3N3-9FpfH7TLS~hBCAtyQ~AtO9W-sM6FAIbUd1UXKGE3Mblo9RHF4pa5KP12YndmT5N4gmmvxiH5gAd6mP3JkRYsxMXMxZqF0-uATmzA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Delete property  
