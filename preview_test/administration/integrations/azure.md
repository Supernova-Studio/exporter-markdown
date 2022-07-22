
# Azure

---

# Azure

## Add Azure integration

1. Navigate to *Profile settings -> Integrations*

1. Under *Azure*, click *`Sign in`* 

1. Authorize Supernova through Azure

1. You can now use this Azure account to automate pull requests using [Hooks](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/hooks.html)

---

## Remove Azure integration

1. Navigate to *Profile settings -> Integrations*

1. Under *Azure*, click *`Remove`* to remove the integration from Supernova

1. In the dialog, click *`Confirm`* to proceed

---

## Change Azure OAuth access

If you try to sign in again after removing the Azure integration from Supernova, you will automatically be signed in with the same access as before. If you would like to change the access, you need to uninstall the Supernova app from Azure. 

1. Navigate to [https://aex.dev.azure.com/me](https://aex.dev.azure.com/me) 

1. In the Authorizations section, click `*Manage authorizations*`

1. Find the Supernova app and click `*Revoke*`