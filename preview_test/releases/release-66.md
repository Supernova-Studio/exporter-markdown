
# Release #66

Tables, hardened security, docs publishing, better exporters and soooo many bugfixes!

---

_This version was released on April 29, 2022**_

With this version, *we have introduced table blocks *to make your documentation richer. You can also use table blocks for layouts, although we will be presenting a better option soon - stay tuned. We have also released additional security features, made manipulation with many aspects of documentation easier, added lot of conveniences and squashed a lot of annoying bugs, which will make using Supernova much easier going forward!

Last but not least, we are *continuing our efforts on making everything snappier and faster*, and you will see some fruits of our work already when visiting token / component / asset sections. Without further ado, here is what we are releasing for you today!

## New block - Tables!

We have added one of the most requested features to the editor — *Tables*! Simply write `/table` and a new, fully configurable table will appear. Here is how tables can look:

  
| Column 1 | Column 2 | Column 3 | Column 4 |  
| --- | --- | --- | --- |  
| *Components* | *Figma Designs* | *React Implementation* | *iOS Implementation* |  
| Button | ✅ | ✅ | ✅ |  
| Textfield | ✅ | ✅ | 🚫 |  
| Image View | ✅ | 🚫 | 🚫 |  


It is also possible to make tables which are much longer than the default size of the page. If the table extends beyond the border of the page, you can scroll it horizontally:

  
| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |  
| --- | --- | --- | --- | --- | --- |  
| *Components* | *Figma Designs* | *React Implementation* | *iOS Implementation* | *Accessibility Check* | *Version* |  
| Button | ✅ | ✅ | ✅ | ✅ | 1.1 |  
| Textfield | ✅ | ✅ | 🚫 | ✅ | 1.3 |  
| Image View | ✅ | 🚫 | 🚫 | ✅ | 1.21 |  


Finally, tables can contain rich text content, including all possible formatting, and images - even combined together. More types of content will be available to you soon as well:

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Design System Assets | *Static* | *Animated* |  
| *Mountains* | ![Img](https://studio-assets.supernova.io/design-systems/6475/1d949b4c-4d95-48e5-a177-0ba5a5832556.webp?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzFkOTQ5YjRjLTRkOTUtNDhlNS1hMTc3LTBiYTVhNTgzMjU1Ni53ZWJwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxOTcyMjUyODAwfX19XX0_&Signature=eJ1LTXLK7QxYO4x0vEjsju-EijBzpAEF68RMJg1cFii6tSPMOEXB47uxpr-P9ML84LvV23AGPK6PaDv6QTZ2qavr9SfJigFbi74XhCd5Z7akJBGYso19o0oPmIK5iw~3nkE8gBQQ3ejlfZ~LHV~krlbtrqxZVO1j91pcrB0cxfNC8LBILCf2FY-XQcIOmAOXIDNUkKNmVmSSwoI0LvRAIFHOovitvshQ-CdQEFgknEUxV9RHaMpO-I6tZ1r5uA7bDgDfuM3nt8Rd89iNZD07fk2q7YvfjRw5wiXrH6kVMP2-w01Hi6-EACA1Vcu2hnP-9s7BqIeU~1fVWnW06i6Qcg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA) | ![Img](https://studio-assets.supernova.io/design-systems/6475/6317fe1e-70ea-4c28-88d5-9cd8cf2adbf6.gif?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzYzMTdmZTFlLTcwZWEtNGMyOC04OGQ1LTljZDhjZjJhZGJmNi5naWYiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=f40gMymf0caMmROm5V575n9FDY1JHhEzb1-0l~tA4srQtw8pyIUYoh6JbE6OtWNy5b9wbCQ2b9Ofq3PLl04BN1Zu03gu-LVSh3qOPr4zhMp7U86M949Tztc9gsvKboOeUavTu3u70B8xGz7UNyeO~YNnl65Q7rUFA9rcgPQyarAs3vhKCWoGDsuGsYjxbCdydtaxoARnik4HAzJ8eLRfP0MhzDH~E2n2yh4Fe~vu0pzb7ACj2wWv6MF3ZAhdMpUhx-k9-H7Q6fNmcrzP4lWd6n3ztTkIPSGDnyPMUcLD3KvoTlI-P~idqJpfbRhkg1mMb2gvOoB7~Su-SkUIoHr85g__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA) |  


> Some extra info:  
> Some of you might find some visual table features you've asked for missing — for instance it is currently not possible to change tables visually and hide/show borders, but worry not — there is another batch of upgrades coming to it next week which will add more options! We just didn't want to keep people waiting for it any longer :)

## Hardened security - IP Whitelisting!

You can now enable IP whitelisting to fine-tune who has access to your workspace. If you have IP whitelisting turned on, and a user whose IP doesn't match the whitelist tries to access any page within your workspace, they are instead presented with the 403 (unauthorized) page. The workspace is still visible in the Workspace dropdown, but no other content from it can be accessed.

![Img](https://studio-assets.supernova.io/design-systems/6475/812fc42f-ff60-4d16-ab4e-41deca54a574.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzgxMmZjNDJmLWZmNjAtNGQxNi1hYjRlLTQxZGVjYTU0YTU3NC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=YNkOmQc92dSwa12FAmptFdTev~mMMqO4hJLzVQRSP0SEnJ1d9Wy-bdfAhNwLScjpu1n5Rc5aWEkw5oeh4NNAMJQ1m4eA7mhMZ3VH6eRetiKQCUUq~rUHZmTsxy2dXVohd9X6BJGgjCvojeuztgJL2RzikiB3FVDb3DS4SG6mTvlKIC1yFgSXKow3s7ddKWfa3jSPKGuo4WPoz-ORgNFGv0NGx~53D-fjcbzzg0Rzw9Or0rhDRJdhSWgno0fdKAso26oEMPcQtf051Z1EJMe8YWZ9ufLcy8VPIV1uDHxZbZ1aCn44-t5RmpagCSg5P9rSS209BbG461X62s2Rczt4iA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> Yay:  
> This feature is available for all of our Company plan customers. [Contact us to learn more](sales@supernova.io)!

## Improved Exporter Packages

It is now possible to house multiple exporters in a single repository. You can also specify a subdirectory where the exporter is located within the repository. Additionally, you can now specify a branch of the repository as well.

We have done those improvements with teams that use more sophisticated setups, such as monorepo configuration with all ds-related tools in one repository. With this change, all situations and setups are covered.

## Private Exporters

Additionally to all the changes made to the exporter package system listed above, you can now also *fetch exporters from private GitHub repositories*. The installer of the packages will properly identify that you are not logged in and will give you the option to authenticate the repository. 

![Img](https://studio-assets.supernova.io/design-systems/6475/b754e76b-0ec5-4b70-8b84-35194c2532ba.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2I3NTRlNzZiLTBlYzUtNGI3MC04Yjg0LTM1MTk0YzI1MzJiYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=kkxrKvrEFbIJK3BugPCs6SrKuORkj~Ptw8rdBvMJY-FN1uA40t--CilZ6uPsqTA6BNKPX~BI~T7QodncnAK2rqpeT4SuDNbHkQeIoWxP2AhhhsIyW0tmW7wa6rzYwYbu0o8KOR9XkadkeQQAmvHHrjvLop0hC8ktT1ARAoC9WOAQ-nLo4e-eML6Bnm6n7UEAZfJ7clD0fyDhuRZqq4P9i7FUHh5sFoFPsB63BO1uk6pPtL6zVokm-J2EUgl7WnKjFZD3ixyo8Q2tCBpHPWmTcpEd0PkpHctVTLRVDNLi7FoabBllwo4IIXmn70ceKVtQopN-ev0jcaAU5oTvuo4PmA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> Yay:  
> This feature is available for all Team and Company plan customers. For free plans, all exporters are from public repos. [Contact us to learn more](sales@supernova.io)!

## Public Docs switch

Team and Company plans are now able to switch between private and public docs directly in the settings. You no longer have to contact us to make your docs public - although we are grateful that so many of you did! Do note that *with Supernova, there is no limit on number of viewers* of your documentation!

![Img](https://studio-assets.supernova.io/design-systems/6475/969a990d-d0ab-4d13-bf40-7d841e72e62c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzk2OWE5OTBkLWQwYWItNGQxMy1iZjQwLTdkODQxZTcyZTYyYy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Ga7wOm0uANTiH0FMtmuQo3adKgQ7uhAjkjRJ4kd1avHJJjlAqGo-1mCV6BTxlaoueDfc7fvO0BlyXJonVBrho43rDGiZwwKlDrFBn1te1qUQ-X~65q1SZ6xiCqHuRrUGpW-V-k~43w3NmNYrD5d3vhXNe4ocayOTWmWiyYmmy8FjrRSCYc~yjzZ97XE75WfR4hoXGFJq6MaTEOw9rBOes~l6~Doq-mejIuwVOrT5wClsF5tyBxsyE1ui-JFcHpVwkEDdZ5kwuUrtIMoFvwjnMkZopJrb72iRAGQd92HiFm9gDr~uVKSctStXu~wzrtU3OfAM~Pn69i14gCSFyMf0Gw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> Yay:  
> This feature is available for all Team and Company plan customers. For free plans, all docs are private. [Contact us to find out more](sales@supernova.io)!

## Documentation CTA

It is now possible to enable a documentation CTA button that can *link to any app / website / email you want*. This is really useful to send your users to a related site or app (like we do, in these docs!)

![Img](https://studio-assets.supernova.io/design-systems/6475/b70a4f85-a518-4dda-b209-1fcafb8f9c91.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2I3MGE0Zjg1LWE1MTgtNGRkYS1iMjA5LTFmY2FmYjhmOWM5MS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=IcH0Sqoy~y9X-mUNU5RvYl6urECVlW5hKlFOcJ6WPoprQqx2dqW26EMHlCTv1rBu6enWLe18T8bAcr-LHCuqqWsMJL3vEOV1C7hOvdxoNkuu9~Cr~gXXu1lQolTmeHEEk5ScqogZ9XxMEHjL7cWN-gi2lTBPyLpE4ESZDc5FueEVYn8rGH9zewA9oONc1LvYvUxB6Lebwugv95391Ehh3chlFWBvBkJmRSrhIDGNWN2PZFPzJV5O1EjtqZmBAjuNQXeFGRbCTMnV-SqEqZf3EpTMnnIV81-Q013k-3mrxcEBQjFXi2LPxza87xKXkrwankgnM3XHB-0fNSomDOry4A__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## *Additional Improvements*

This release brings many requested changes focused primarily on performance and usability, and prepares the ground for some really amazing features coming soon. We thank you for your unending stream of requests that allows us to create a much better product!

- The performance of the `Components` and `Assets` tabs has been improved, especially when displaying a large number of elements.

- Tabs can be reordered by drag & drop now.

- We updated all README files for all of our exporters.

- All changes in Docs settings are autosaved now - no need to press any buttons anymore!

- You can now create a CTA navigation button in your Docs header.

- The default Storybook error message was updated.

- The pages in the frame selector dialog match the order of pages in Figma.

- It is no longer necessary to confirm the new Docs header height manually.

- Docs blocks can now be cut with `Cmd + X`.

- The submenu of `Convert to...` shows the currently selected block type with a checkmark.

- The context menu for documentation blocks now contains shortcuts for `Duplicate` and `Delete` options.

- The image in the Shortcut block can now be immediately replaced by clicking on the new `Replace` button.

- Frames blocks have an empty state now.

## *Bugfixes*

- Supernova VS extension does not override non-empty folders anymore.

- If you edit the shortcut in the Shortcut block, the preview of the new shortcut is reloaded immediately.

- Pressing `Cmd + B` and `Cmd + I` in Firefox no longer triggers the build-in Firefox shortcuts anymore.

- The filename in the dropdown in Figma frame selection can no longer collide with the dialog description.

- Clicking on the Supernova logo on the Sign Up/In page works properly now.

- A link which is inserted into the text is properly bounded into the selection and no longer overflows when typing.

- The list for switching between `RGB`/`HEX`/`HSL` modes for Color tokens works properly now.

- New builds triggered through hooks are now showing up in the Builds list immediately.

- Newly created design systems appear in the proper order in the design system list now.

- Automatically expired plans no longer block you from accessing Workspace settings.

- Brand switch in the Docs blocks works properly now.

- If you switch to a different version of your design system in Docs, the newly selected version is displayed in Docs immediately now.

- Drop targets no longer overflow the top Docs viewport.

- Empty read-only versions no longer show the `Link Figma` button.

- Build and hook dialogs are no longer loading all possible steps in advance.

- Documentation links to other Docs pages are working properly now on publish.

- All buttons on the `Integrations` page have the same width now.

- Role picker in the user profile renders in the proper size now.

As always, if you would like to see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) — we are always there. Thank you for your support!

> Be warned:  
> If you are using your own documentation exporter, you* must pull upstream changes* from our main exporter and merge them to your project in order to get new features and improvements, such as tables.