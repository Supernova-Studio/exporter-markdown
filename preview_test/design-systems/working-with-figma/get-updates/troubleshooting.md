
# Troubleshooting

---

# Troubleshooting

Possible warnings and errors you may encounter when importing a Figma file are listed below.

> No published styles were found in this file

Supernova is designed to integrate with your Figma Shared Libraries, containing the main styles and components that make up your design system. If you have created a design system in Figma, this is an example of a Shared Library. This means, the file you import to Supernova should first be published to a library.

> Some styles in this file are not used in the document, and were ignored

If there are styles in the library that are not used anywhere in the document, they will not be imported.

> Failed to import

If the file failed to import, there could be an issue with your Figma integration, such as the original file was deleted in Figma, or the user who gave access to the file was revoked. In the Figma tab, try relinking the file (if this is the cause for the error) and importing again.

> 3 components could not be imported

There may be an issue with one or more components that causes them to fail to import, but the rest import successfully.