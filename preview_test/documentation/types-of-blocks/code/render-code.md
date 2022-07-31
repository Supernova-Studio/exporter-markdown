
# Render Code

---

## Render Code

Display rendered React code snippet.

  
![Types of blocks - Render Code](https://studio-assets.supernova.io/design-systems/6475/893d9cde-2219-4f22-9c1e-6ca94663e92a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg5M2Q5Y2RlLTIyMTktNGYyMi05YzFlLTZjYTk0NjYzZTkyYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=eQv49s2VmZjbMlQ3jlBsUSLiAAgVly5uWqdWm498WWU8xmjkPS3IuousgVwuJV~eGTaD~4C1KE-aW4JiZKDH2VKtSLD9TFGmDSKvvH82uURyyQmeNL9nfvFcFgJRX4ESjXGSXCI-1KZjtaJ~UMhcV8M1IyCobKpKfw8jKu6fmzaH9QlbuxGgPNpWs-HQ-C-29IKtkiKhs6XcOqfJCXdSKtPW9wKXuCf-6XW3PGoA9V5Wvf9B-wqvBLpa8EF8kiiAKdmOmlH946skg2LiztfGiS5dTVTocZnv3D94BFtyOU6W93yVjWU0B-XICqb2METMzDToVH6V~x14~yj7Xb8QkQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Types of blocks - Render Code  


1. Select *Render Code* from the block menu

1. Type or paste code into the box

1. Your rendered code will appear in the preview above

1. To verticallly resize the preview area, click the resize handle and drag to the desired height

The following options for render code blocks are available in the block configuration menu (right):

- *Alignment:* Choose whether to align the preview left or center

- *Background color:* Select a background color for the preview

- *Show code view:* If turned off, the code will be hidden in the published documentation, only the preview will be shown

- *Edit dependencies:* This will take you to the settings page to edit the `package.json`, see below

### Edit dependencies

Include custom or predefined dependencies for your code block.

1. Either click `Edit dependencies` in the block configuration menu, or go to *Settings -> General -> Render Code Package.json*

1. Select a template to use if you want to use an existing library as a dependency, or fill in the `package.json` with your own custom content

1. If you select a template and make edits, you can click `Reset to default` to start with the default template again

1. The dependencies will now be used for all of your Render Code blocks

  
![Settings - Render Code](https://studio-assets.supernova.io/design-systems/6475/0d98f708-a400-4dc5-b541-c65ac9d5d6f8.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzBkOThmNzA4LWE0MDAtNGRjNS1iNTQxLWM2NWFjOWQ1ZDZmOC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=GQMqSr9AQhAnrRIGReqDQ-fibf~Tx4DJEcy3RAai8uMxlroM4~JLhD6VyjzYa6EFiczNVe9cVC5TFyWjkgWFig~sr4XKknw1XefyJdeJMQtROLlKaKOAnJyMmHZqKeEwtMnOg~riZ~B1wbeeH8G7~VawLZlZHN6znwZDTpiingNNQJ8aBHTAhdtX9-~k08MAhkzp8C1Y~a2xIgiOa6WkmVYSBp~O0uf~YgQWSXw0fhfxkEhNUtB9wbUC5IEUOOuhEY3K3MOhLF71D12HGOCiXTXaQnt3XfTxAbqvElBOJNrEZFNLiNvlmso5zPR3IAi4-Wxm3~BE2b9wFTHIHHAjmQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Settings - Render Code  


### Live example

The following widget has live code enabled, so click the new "Edit" button to see it in action!

```javascript  
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="warning">I am warning you!</Alert>
      <Alert severity="info">I have an information you'll find interesting</Alert>
      <Alert severity="success">Complete success, wow</Alert>
    </div>
  );
}  
```

Try changing one of the alerts to error message using the following code:

```typescript  
<Alert severity="error">Error Error Error!</Alert>  
```