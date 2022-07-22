
# Design system files

Use one or more Figma files as the source for your design system

---

# What is a design system file?

A *design system file* is a Figma file that has been imported into Supernova to be used as a *source* for your design system.

Design system files appear in your design system under the *Figma* tab, shown with the time Supernova last checked for updates, and the last fetched version that was imported. Design system files are also accessible in the documentation editor by the [Figma frame block](https://learn.supernova.io/documentation/types-of-blocks/figma.html).



Missing parser for block type FigmaFrames

 

---

## Sync modes

### Autoupdate

If you selected automatic updates, Supernova will check for changes periodically (hourly) and update the design system automatically.

### Manual

If you selected manual updates, you can click *`Get updates`* to fetch the latest changes.

> Upgrade to Team or Company plan to enable autoupdate for linked files

---

## Link a new Figma file

1. In your design system, go to the *Figma* tab and click `*+ Link New File*`

1. Enter the *URL* of the file you would like to link

1. Click `*Link File*` to complete



Missing parser for block type FigmaFrames

 

> If you choose to turn on automatic updates, Supernova will check the linked file periodically (hourly) for new changes to import

---

## Link multiple files

If your design system is divided into multiple Figma files or libraries, they can also be imported into Supernova. Updates for these files can be fetched individually by file, or all at once.

To link another Figma file, follow the same process as above.

> Upgrade to Team or Company plan to link multiple Figma files

---

## Unlink a Figma file

To unlink a Figma file and remove all related tokens from Supernova:

1. In* Design system files*, find the file you would like to unlink

1. Open the context menu and click `*Unlink file*`

1. In the dialog, type "*UNLINK*" to confirm

1. Click `*Unlink*`



Missing parser for block type FigmaFrames

 

> Unlinking a file will remove all imported tokens, and any previously created properties and aliases or token references for this file will also be lost. The file can be imported again in the future, but it will be treated as a new file in Supernova.

---

## Relink a Figma file

In the case that a Figma file becomes unlinked, such as the file was deleted or the user who gave access to the file was revoked in Figma, you have the option to relink the file. 

1. In Linked Figma files, a file that is missing will show a `*Relink file*` button

1. Click `*Relink file*` to reconnect to FIgma