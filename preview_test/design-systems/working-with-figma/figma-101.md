
# Figma 101

Integrate Supernova with your Figma account to keep your 
design system data always in sync and up to date

---

What you can do with *Figma* in Supernova:

- [Connect]() one or more Figma library files to automatically fetch updates to your design system data

- [Import]() your Figma styles to Supernova as tokens

- [Display Figma frames](https://learn.supernova.io/latest/documentation/types-of-blocks/figma.html#display-figma-frames) in your documentation site and update them all in unison

- [Embed Figma files](https://learn.supernova.io/latest/documentation/types-of-blocks/figma.html#embed-a-figma-file-from-a-url) in your documentation

# Figma Libraries

> Supernova mirrors the way teams are already using Figma to create and share their design systems using Figma libraries

Tokens, components, and assets can be imported to Supernova from your existing Figma libraries. 

---

## What is a Figma library?

A [Figma library](https://help.figma.com/hc/en-us/articles/360041051154#h_b9cf5ead-791e-4ae2-9dd8-aded2fe54fe6) is a collection of styles and components that have been published. Publishing a file (as a library) means these styles and components can be shared with your team and used across other files.

### How to publish a library in Figma

Publishing a library in Figma makes all of your styles and components searchable and shareable with your team and across other files.

In _Figma**_:

1. Open the file you would like to publish

1. Click the down arrow next to the file name in the toolbar

1. Select Publish styles and components from the options

1. Enter a description (optional) and click publish

### Why do I have to publish my file?

Libraries help keep design system content up to date, since only the most recent versions of styles and components are shared for use by teams across other projects.

Publishing makes the library available to Supernova and communicates to Supernova that this is the most up-to-date version of your design system.

> *Note →* Publishing a Figma file as a library does *not* make it public

---

# Figma Styles

### Styles imported into Supernova

Styles in Figma consist of color, text, and effects that will become "tokens" in Supernova. An example of how Figma styles map to Supernova tokens:

- *Fills →* Colors or gradients

- *Text →* Typography and Fonts

- *Effects →* Shadows and Blurs

Supernova also provides more options for tokens that can be custom made but not imported from Figma. See [*Types of tokens*](https://learn.supernova.io/latest/design-systems/tokens/types-of-tokens.html) for more details.

### How to create a Figma style

In _Figma**_:

1. Select the object to create a style for (for example, a shape with a background color)

1. In the properties panel, click the `*::*` icon next to the property you would like to save (in this case, background color)

1. Click the `*+*` icon in the *Color styles* panel to create a new style

1. Give the style a name and description and click `*Create style*`

---

# Figma Components

Components in Figma are converted to Components and Assets in Supernova. 

An example of how Figma components map to Supernova tokens:

- *Components →* Components 

- *Components → *Assets (any components in Figma that have an export setting, icons for example)

### How to create an asset in Figma

In _Figma**_:

1. Select the component you would like to import as an asset

1. In the right sidebar, click the + in the Export section

1. Select any export format to include it in assets

1. Once something has an export setting in Figma, it is considered an asset in Supernova and can be exported (in any format).

> *Note →* Variant support is coming soon

---

# Import from Figma

For more information about importing your Figma content into Supernova, see the following pages. We recommend you view the Import Checklist when importing your first Figma file, to make sure it meets the requirements. 

---

# Get updates from Figma

### I've made a change in Figma, how do I see it reflected in Supernova?

If you have made a change in a Figma file, you must first publish the library again in Figma (see step above). 

Then, in the Figma tab in your Supernova design system, click `*Get updates*` to fetch the latest from Figma. See  [*Get updates*]() for more details.

> *Note →* If you are using the autoupdate setting, Supernova will fetch newly published updates from Figma automatically