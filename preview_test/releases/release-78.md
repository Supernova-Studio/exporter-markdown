
# Release #78

More options for your docs! MOOOOOOORE! And a lot of fixes to make the experience worth your while.

---

_This version was released on July 21, 2022**_

With this version, we heavily focused on improving your experience and options when creating the documentation. So many bugs squashed, and so many nice things added!

Apart from focusing on Docs, we are also bringing the improved import flow to handle larger files and larger sets of linked files. We have also introduced better way how we resolve custom domains, which makes configuring your custom domains even easier and supports all different edge cases you have reported us! Now, without further ado, let's look at what this release has in store.

## New token block variants

Token blocks are one of the most critical pieces of any documentation and we made them 10 times better. Previously, token blocks (detail, grid, list) were limited to a specific mode of rendering, but that is not the case. It is now possible to select from several variants of each block from the variant menu:

![Img](https://studio-assets.supernova.io/design-systems/6475/006ce2a3-e69e-4c20-ad72-1d9ba1fd9a76.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzAwNmNlMmEzLWU2OWUtNGMyMC1hZDcyLTFkOWJhMWZkOWE3Ni5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=BA~DZITJ5m89g3OL-p8hQKTaxf0NVqBspgJGc-RcmWD0CxeySw2cDgE0WpENgsUvWKExw952Lr-R85d-ApQh9pFbFkFUvLNyS6emfa0kBk6~njAGEFxtdva3Z0gMhuKeWlKw3KaoxZVMVb8hOkriD8o-8vIkfEFu0ATfNwpNFYxEPDAA4UWBbXeW6C2Z0TpcY8CjGiWuNojQgHhRZZDu7ZI8f4NbCKE0JActRnot4nXwHWsDlS9VEdoUoxmEtxJ4OtDny~~-m9CeXF~krcH5j0fYdE06ME9mcoNjjQyu72jmvCyBgMRQkx-2E7p90EkYv8kxSR2UsgkbfUW4aBNPdA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

And because this documentation is created using Supernova, let's look at how they look like when you use them in your documentation site!

### Variant: Table

With tables, you can show a lot of information quickly, and bring attention to the values instead of the visual representation. Great for long lists of tokens and overviews of styleguides in general.

### Variant: 1 column

1 column variant allows you to highlight detail of one specific token in its full glory:

### Variant: 2 columns

2 column variant is great to highlight difference between foreground and background color!

### Variant: 3 columns

For the times when 2 is just not enough.

### Variant: 4 columns

Similarly to table 4 column variant can accomodate lot of data and is ideal for long lists with lot of information.

### Bonus: Now with aliases!

There were several improvements to how the data show in your styleguide, and we are also bringing something you asked for a lot - showing whether token is aliased or not. If the token is reference, additional information will be shown under the token for each of the rendering modes.

Voila, reference shows up right away!

## Documentation site design overhaul

We have also significantly improved the design of the exported site. We have basically touched every aspect and made it a little bit better - modified spacing here, aligned images there, updated typography, made stuff more readable and so on. Here is a full list of what we improved:


- Fonts

- Header section rendering

- Typography, headings and paragraph stylings and offsets

- Default margins and paddings for all sections 

- Spacing and styling for tab elements (pills and tabs)

- Table spacings

- Lists, both ordered and unordered, their rendering and margins

- Quote block paddings

- Callout spacings

- Border radii for images and other elements

- Finally, we have improved behaviors of newlines between blocks, so you don't have to, in most cases, create extraneous newlines inside the editor. Just write the text how you'd expect, and docs will do the rest.

Our design team worked tirelessly to show you what all was improved, here is their masterpiece:

![Img](https://studio-assets.supernova.io/design-systems/6475/c5e07c3e-bfd0-4320-a32f-d59810616973.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M1ZTA3YzNlLWJmZDAtNDMyMC1hMzJmLWQ1OTgxMDYxNjk3My5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=bpZeDqcdeUqvwv1SLmWkLxKDWHLpPrhC0Bvr-tX6fkDd98U~-JgKNXzRpcwkSgpBV~zXDB-yk9X5RzXocESmpWt7Hsg816tM72zr2Sd9RXjs6pVToncTQXk3damPNkKsF4~oTeKL881oN5VuizB5Sy-MsVmh9W3vKLyMOB4XOyvA9OEJXbuJzaanWVn~cKd7Bv~ZV21Gnhh9dPTkX9~30Sp8ToFUE2yD4ZPEZISHQGmby2kMtfgEPlB42W8gGaqvIIAm6WC9HKkUKwonl0ri19Ze6YNYkMIWXfa7-HTKiMFBbmKGTBAtIIuIHCJGCaJG50jqIaIG4aMk4IaBpq8YWQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

While isolated changes will not be noticable immediately, all of them result in much more readable, crisp documentation site that shouts out "polished", and that is what matters the most at the end.

> Same overhaul  (but more drastical one) is coming for the editor part which many of you asked for, as we want to align the experience with what you get on the site when you publish it. Stay tuned, we definitely listen to this feedback!

## Search 2.0

We have additionally reworked how the search work in our documentation! You can now search for pages, sections and texts, everything is insanely fast and we have added several new conveniences for you:

- It is now possible to use `Cmd+K`/`Ctrl+K` to open up the search dialog in published docs

- It is now possible to use `ESC` to clear up the search query and search again right away

- If there is no search query, `ESC` will close search immediately

- It is now possible to go through results using `Arrow up`, `Arrow down`

- It is now possible to go directly to the result by pressing (`enter/return`)

- It is now possible to link directly to the search result link, for pages, sections and even specific blocks, by selecting search result (click or enter) and copying resulting URL in the browser

- New notes about available shortcuts were added so your consumers know about it

And finally, we had a lot of fun reworking it and added lot of fun effects to it. You can try it right now, by clicking `search icon` on this site!

![Img](https://studio-assets.supernova.io/design-systems/6475/8d8559c4-0507-4d18-bb9d-c0ea1d60674f.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzhkODU1OWM0LTA1MDctNGQxOC1iYjlkLWMwZWExZDYwNjc0Zi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=TTRuqkvkGcHFMOcBbjsmRfQKZLYRY~x9A5qUhI8GW70W-lB44RVOri7w4DE2IStoAQ~VTm2E8~p8aKU8M4WMc8R53Gh7kVKDDIYO4SnvZF-wKgGx24D6NhNBMjqNoCNgRzh~trPBSl8lMaNqVh7VEWbr9qfRdYEAjZFODNGDYzj0NjNReeZJWxHuCZrfLX3Umq4oCsOzDRyGakQt2JST9Hv4l2Bi9A2N-0gDEJMTHfjfRfXo0FTmstMY4LCM8T1oROweEsRyr7mTZgsB5QKm2~1o7O0pZ~-69x467KPl5fmBZoubklzhf2BYx7hFlRyYPOycR8wcAUAOE1QriyBZFg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## *Additional improvements*

Here are few of additional improvements that are more technical for specific users that reported it:

- Import flow was improved to use polling — this prevents multiple unnecessary refreshes at the same time.

- Resolve request for custom domain settings was replaced with a more specific request to resolve only CNAME records.

- We have reworked how content menu works. It will now properly track categories, and will highlight multiple categories at once

## *Bugfixes*

Finally, lot of annoying things were resolved. Enjoy!

- *It is now possible to log into private Docs on custom domain properly again.*

- Having Storybook or Markdown links behind VPN no longer causes Docs to fail to deploy.

- SDK resolution chain has a proper resolution priority now, which prevents a very rare bug with triple aliases resulting in failed export from happening.

- LESS and SCSS exporters export properly indented code for all token types now.

- Trying to publish some Component with `Status` option containing empty color no longer results in Docs failing to deploy.

- H1, H2 and H3 headers are now properly indented in the `Contents` section of Docs.

- Calling the header `Content` and clicking on it in published Docs no longer takes you to the top of the page.

- HTML in Custom Footer code no longer contains the extra `"` in the code.

- Divider in `Tabs` block rendered as Pills displays properly now.

- Multiple lines in the `Frame` block description no longer result in one line description in published Docs.

- Docs footer in published Docs fits the mobile screens properly now.

- Putting the page title or header into pointy brackets `<Like This>` no longer results in the Docs page rendering as empty.

- Clicking on content menu with multiple same titles will no longer break the menu anchors. We have adjusted the generation of anchors to acommodate for this situation by adding small hex at the end of the anchor

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!