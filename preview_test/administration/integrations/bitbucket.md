
# Bitbucket

---

# Bitbucket

There are two options for integrating with Bitbucket. You can use OAuth to authenticate with your account once, or you can authenticate using one or more personal access tokens. 

Personal access tokens can be used as an alternative to OAuth, instead of a password. 

> See the Bitbucket documentation for how to [Create a personal access token](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)

---

## Authenticate with OAuth



Missing parser for block type FigmaFrames

 

### Sign in to Bitbucket

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Sign in`* 

1. Authorize Supernova through the Bitbucket dialog

1. You can now use this Bitbucket account to automate pull requests using [Hooks](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/hooks.html)

### Remove Bitbucket integration

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Remove`* to remove the integration from Supernova

1. In the dialog, click *`Confirm`* to proceed

### Change Bitbucket OAuth access

If you try to sign in again after removing the Bitbucket integration from Supernova, you will automatically be signed in with the same access as before. If you would like to change the access, you need to uninstall the Supernova app from Bitbucket.

---

## Authenticate with a personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Authenticate using a personal access token`*

*If you are **_not**_** using a custom server URL:*

1. In the dialog, enter the `name`, `username`, and `personal access token`

1. Click *`Confirm`*



Missing parser for block type FigmaFrames

 

> If custom server is disabled, the URL will default to `https://bitbucket.org` and a username must be provided

*If you *_*are***_* using a custom server URL:*

1. In the dialog, enter the `server url` and `personal access token`

1. Click *`Confirm`*



Missing parser for block type FigmaFrames

 

---

### Create personal access token

If you have not already created a personal access token and you would like to use one now with Supernova, you will first need to create one in Bitbucket. 

> See the Bitbucket documentation for how to [Create a personal access token](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)

### Remove personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, find the token you would like to remove and click *`Remove`* 

1. In the dialog, confirm you would like to remove the token



Missing parser for block type FigmaFrames

 

---

## Using the Bitbucket integration

When creating a [hook](), you can specify to *Open a Bitbucket pull request*. 

If you have previously set up the Bitbucket integration, you will be able to select one of these methods (either an OAuth connection or a personal access token) as a *Connection*. This will create a pull request using the specified connection for authentication. 

There is also the option in the hook dialog to create a new authentication. 