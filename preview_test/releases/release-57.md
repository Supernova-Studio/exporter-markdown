
# Release #57

Tab blocks, rendering variants, documentation footers, next & previous blocks, documentation site SEO and many improvements you asked for!

---

_This version was released on February 28, 2022**_

This new version brings tons of changes to improve your experience, especially in terms of documentation! *Best of all, all the features released today are available for free, to all plans*. We believe that everyone should have the opportunity to build as amazing a design system as possible, no matter the size. Now, let's get to it!

## Tab Blocks

We have added a new documentation block type — Tabs! Each of its tabs can contain other blocks as content, like a mini page, however you can have tabs as part of your regular content. A convenient way to add richer structure to your pages beyond page-level tabs - see it in action!

*Tab Example - Variant "Tabs"*

  
**Overview**  
### Description  
Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.  
If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.  
### Accessibility  
(WAI-ARIA: [https://www.w3.org/TR/wai-aria-practices/#checkbox](https://www.w3.org/TR/wai-aria-practices/#checkbox))  
- All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element.  
- When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` prop.  
  
**Examples**  
### Basic Checkboxes  
Implementing basic checkboxes is very easy. You can also make them sized according to your spec!  
  
```javascript  
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </div>
  );
}  
```  
### Form Group  
`FormGroup` is a helpful wrapper used to group selection control components.  
```javascript  
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}  
```  


## Alternate Block Rendering

We have added a new technology today that allows you to create *alternate rendering for blocks* when published. We are also today announcing the first block with built-in support for this technology - tab blocks. 

As you can see above, tab blocks by default render as a horizontal menu with content underneath. However, using rendering variants, you can change how this block is rendered - sometimes quite drastically! Here is the same block, but with applied variant "Pills".

*Tab Example - Variant "Pills"*

  
**Overview**  
### Description  
Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.  
If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.  
### Accessibility  
(WAI-ARIA: [https://www.w3.org/TR/wai-aria-practices/#checkbox](https://www.w3.org/TR/wai-aria-practices/#checkbox))  
- All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element.  
- When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` prop.  
  
**Examples**  
### Basic Checkboxes  
Implementing basic checkboxes is very easy. You can also make them sized according to your spec!  
  
```javascript  
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
    </div>
  );
}  
```  
### Form Group  
`FormGroup` is a helpful wrapper used to group selection control components.  
```javascript  
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}  
```  


*Customization and providing your own rendering modes*

The most powerful part of rendering variants is the ability to define your own - for every single block there is. Rendering variants are fully driven by the exporter technology. To add rendering variant:

1. Add new variant declaration to your exporter package ([example here](https://github.com/Supernova-Studio/exporter-documentation/blob/master/exporter.json#L195))

1. Add custom html for how the variant should be rendered ([example here](https://github.com/Supernova-Studio/exporter-documentation/blob/a70a30a957257a30630393842391bfd3848b8044/src/page_body/structure/blocks/page_block_tabs.pr#L5))

1. [Upload updated exporter](https://developers.supernova.io/building-exporters) to your workspace and profit!

This is only a beginning of what we will be doing with this technology soon, and we can't wait to see what you do with it in a meantime!

## Block Duplication

We have added a new option to duplicate all documentation blocks by right-clicking on them and selecting Duplicate. You can also duplicate documentation blocks by copying and pasting them.

![Img](https://studio-assets.supernova.io/design-systems/6475/a4bb869f-15ce-43f3-ae41-3d69f547a8b2.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2E0YmI4NjlmLTE1Y2UtNDNmMy1hZTQxLTNkNjlmNTQ3YThiMi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=d1HW3aG06Tp0DUDFkuy5gGBdj52qKGAyK5Zb41bvmZMJXQpLy72VpN2CSbedzhB6SWsesO-B44p31yjPO99vctE3AUNZCWLAHUgKjk2M1jBNlxBik2T9BWnk027JQn5v-pMJIFNCBGlITPbENK3Rw1ksJX5CglgthenE~FsUKuaXLTVLmkFBmPoBuvOOXd89SJNwbF8lBG5B2G2Vx4SMU7ohujqt~OR5hxdhgUzHz8oA5dg5P19dkuGQYTUugtl842EAOMR8MM4CwphTrCiiglAQcHerqKxxp1U3-8Cwj5cdLeZAACgg3M7QyEq-f-CvoSndpReeV~8FJsBGeybE6Q__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## SEO

*All documentation sites are now heavily optimized for search engines*. We have significantly improved the way site code is generated and added automatic generation of all necessary meta tags. In addition to this, we have added the following features, many of which greatly increase your change of landing a great spot in search engines:

- Documentation will automatically generate `sitemap.xml`

- Documentation will automatically navigate robots to index your site properly

- Titles and descriptions will now be properly generated

- Titles and descriptions can be overriden as needed

- Additional metadata for services like Twitter and Facebook are also generated

- You can set all metadata yourself, and provide additional ones, like main site image

![Img](https://studio-assets.supernova.io/design-systems/6475/cae53915-1494-4ed1-8e00-69f596998d56.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2NhZTUzOTE1LTE0OTQtNGVkMS04ZTAwLTY5ZjU5Njk5OGQ1Ni5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=A0ey9uxfBREnvZsZNzbPrNht4emJD3sjyl55mVyPzs2f-5Vd3uj2oyfZOo8XKilm2tN5wuTbn3xCPaNzDcDtCeqDFWpBpkaLg-l9Bid2fxMgJmI~oUSBVLF0rlZBLKDEiC3T9KCAy6ovcTMYzCwmWu78p0WB4VKKrjM-~viJc-dCtzPZQ9qSASHCgimmowIhE0FPu~lP2VMBVDGqdSf2klL3mo-zr8W6zYPjwiWxsrFf6Xxcdi~zuS2bQ8eazqxx4dZX0W3al7kvGloZ0KAPANGTd7ohOudbs-ZZvmYIHA~wE4kQHny5ZAJPN9zO0DQCX0WgWoRI4hinXT90IFCBgA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Next / Previous navigation

We are not stopping here! We have additionally added option to show next/previous navigation inside the documentation pages. This greatly increases usability of the site for regular readers. This feature is enabled by default, but can be disabled inside the documentation settings at any moment.

![Img](https://studio-assets.supernova.io/design-systems/6475/c8430749-8624-467a-ae72-2f00753501e9.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M4NDMwNzQ5LTg2MjQtNDY3YS1hZTcyLTJmMDA3NTM1MDFlOS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=MghBkf2DMhtd5SsjsojcvYniOGZZj4xX9-Bm1fKSSUIU5Ofr0MIvTE8nDQCrMAwmT6GdDc7BdgNjwK1BJec0FC5G9EpF4fkFGx-yye1wT0wqjyZGtNEmQwqt6Aq3M1T6868NHZ8c2beJSRWtkOlTrBVEV09y1OWAJRo1JWh2ZwJ-K1-Q1i0Unh2~cMLDhtMe13GL9WOXPcHM-JsyJI-VF5rmn0zMrsLjne1IC9DaBmwFFJ0s-fJ2pcCKhFhinv-YqckUwhTBsF7gDb4DUYsF3kb~DTDTRo-UN8P7ZyokguMT7gx3UBa70sEhYZlVq-oyUzEsmrvLsM2OMF3jwKZOsA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Custom Footers

Not only you can add next/previous navigation, but you can also add custom footers now! 

Because we wanted to prepare something really special, the footer can be fully customized using HTML templates right from the configuration interface. This way, *you can add any footer content you want *- from legal notices to logos to social media to even things like feedback questions - you are only limited by your imagination.

![Img](https://studio-assets.supernova.io/design-systems/6475/c209f9d1-645e-443e-942e-e048f1fa6a9b.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2MyMDlmOWQxLTY0NWUtNDQzZS05NDJlLWUwNDhmMWZhNmE5Yi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=WGP~nh9yprlpiiqRKN4sLhBugDO0YcnDsW6xfxosPVlJYdbHAJO5-eKNtW~dobweNBX0Det0RwUznTDXgCPsZLgZVIRhqCbMgJAbjleW~jgubZ9wrVE48BCCiXUd4P-HGOty4KF4~xLmzwvsVlwNEY~kIvzNI-QQNJaAUSj3-~AOLuA7y4RBYMBSZXD8sT6cHkE84hrgHccnup0KmB7ddkZha0w4-O3y~3DiKIVEFB739rbeiezVotTZgsXrfTDgYb1oKcfZCrIISaP-aoVo5J9pXYOZsK1JhJsFiw5Y~NvzeErnG-K5KjLNEbwztHSWuQMmzXY~03O2yXJEluygYw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## New Release Notes!

From now on, *all release notes going forward will be created using Supernova documentation engine*. Over time, we will also be back-porting the old release notes into this site for historical purposes. This way, we can show you all that we add to the platform live!

## *Improvements*

We have additionally improved behaviors of the following features:

- Updated the context menu items for documentation blocks to describe their function more accurately.

- Documentation block search now uses fuzzy search as well.

- It is now possible to hide the title and the description of Figma frame tiles.

- Updated the delete workspace message when the workspace still has an active subscription.

- Team plan can now use up to five automation hooks.

- Added the option to select blocks by right-clicking them, which also immediately opens their context menu.

- Updated the order of blocks in docs block menu to make sure the most-used ones are higher up.

- If your import fails or succeeds with warnings, we show a button that navigates you to the user documentation for further info.

- Billing details are now properly propagated into Stripe.

- Importing a frame source file now uses the current state without Figma versioning.

- Adding a Figma file as a frame source through frame blocks now opens the frame picker immediately after import is finished.

## *Bugfixes*

We have also fixed the following bugs:

- Search in published documentation now searches through strings more accurately.

- Fixed an issue that caused the VS Code extension to not work on Windows 11.

- VS Code extension uses proper button colors on light themes now.

- Going back from changing plan no longer causes settings to be unresponsive.

- Settings docs header to Center with Auto height no longer causes header to not render properly in published docs.

- Searching through tokens takes group names into consideration now as well.

- Quote block in published docs no longer shows an extra space at the beginning.

- Fixed a typo in the invitation dialog.

- Paragraphs in the documentation description are properly rendered in published docs now.

- Callout blocks with soft line breaks render properly in published docs now.

- Component assets render with a proper name and description in published docs even after changing them in Supernova.

- Clicking on anchor in published docs scrolls the content properly and no longer causes the title to be obfuscated.

- Copying and pasting multiple blocks which are selected in ascending order pastes them in proper order now.

- Fixed an issue where adding Shortcut block in docs caused undo/redo to not work properly.

- Pressing Shift + Tab in a docs block no longer leaves you in a state with both selected blocks and text caret blinking.

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!