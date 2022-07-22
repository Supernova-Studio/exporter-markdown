
# Release #74

---

_This version was released on June 22, 2022**_

With this version, *we are bringing the brand new feature into Supernova — custom domains!* We have also* resolved an issue with identifying fonts* and we are also bringing a lot of nice Quality of Life improvements and bugfixes.

## Custom domains

You can now publish your Docs to your custom domain. You can easily connect Docs to your custom domain in the Docs settings!

![Img](https://studio-assets.supernova.io/design-systems/6475/dfb94455-88ea-4c9a-95fb-787576c869f0.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2RmYjk0NDU1LTg4ZWEtNGM5YS05NWZiLTc4NzU3NmM4NjlmMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=HkZZ2BbtvIXwZwIDFE1-76jSfkNy1venbLkuX5pHub1FXii3lsY8dxSAbQqbIE8WsDXEz95dZYomcw8y8FgW48XX9Udrs7za0auGeiFPsZ-hS3coAitn1MyRHCwAZhYBZhd8OYeBg0of708LVzVezJ8~Uz3YSdg27BiOyIirFQ~VNPFUnfJvB6N6925~hmoDiJJSXdUyx1utForSOWJTsooGUlI3zwemv4nzkUPMRDJ4KX5wns0Xg8hzdh9Gr736J--Xgi250WQ4DovWp60gl-Js2BIaru-CThqCx9SXW2wNEc8uOovZPxcMy7XW7Um9hKEiAkUTpcLdWEbCuch3QQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## *Improvements*

- It is now possible to log out during onboarding.

- Version dropdown now displays the version name right next to the version number.

- Blocks order in the Docs settings was changed.

- It is now possible to properly copy & paste Table cells, rows and columns.

- Light color tokens in menu items display a border to make sure the colors do not blend with the background.

- We have improved the performance when having multiple Table blocks in Docs page.

## *Bugfixes*

- *Fonts, their families and weights are now properly recognized by Supernova!*

- Assigning a Token as a color value into the Docs settings and removing it no longer causes the settings field to become permanently empty.

- Starting a new subscription after the Workspace is suspended no longer results in the incorrect internal Workspace status.

- Figma designs with elements containing negative radius values are imported into Supernova now. 

- Refreshing frames through Frame block now refreshes inserted frames in Docs right away.

- Cell selection in Table is no longer lost after pasting the content into it.

- Proper cursor is now displayed when hovering above the exporter on Installed tab.

- Generating a new Auth Token on `Authentication` page adds refreshes the list of Auth Tokens right away.

- `Filter` field in Frame and Asset blocks is now aligned properly.

- Highlighting some text in Docs and pressing `Cmd/Ctrl + V` now inserts the link into the text properly.

- It is no longer possible to delete column/row in 1x1 table and turn it into invisible 0x1 or 1x0 table.

- We have added another check to prevent the creation of nested tab pages.

- Trying to download all assets from huge designs no longer throws JSON file with `500` error.

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!