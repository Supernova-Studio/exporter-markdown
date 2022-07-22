
# Using exporters

---

## Install Visual Studio Code extension

Install the VS Code extension to work with the Supernova platform directly in your Microsoft VS Code environment. It can be installed from the VS Code extension marketplace. 



Missing parser for block type FigmaFrames

 

> _This is a summary.**_ For more information about configuring your source design system in VS Code, view the [full setup instructions](https://developers.supernova.io/getting-started#download-supernova-vs-code-extension) in the developer documentation.

---

# Builds

A "*build*" in Supernova represents a single run of a specific exporter that points to a specific design system and version. 



Missing parser for block type FigmaFrames

 

## Run an exporter in VS Code

> Recommended method

We recommend you use the [VS Code extension](https://developers.supernova.io/using-exporters/running-exporters) to run exporters and obtain production code. If you are unable to, or would prefer not to use the extension, you can use the Supernova Cloud interface.

## Run an exporter in Supernova Cloud

You can run any installed exporter manually from the Cloud environment. 

Note -> _The recommended method is using the VS Code extension**_

### Step 1: Select an exporter and brand

1. Navigate to *Code Integration → Builds*

1. To request a new build, click on the `*+ New*` button

1. Select the exporter to build with (the currently selected design system and version will be used)

1. If brands are enabled, select the design system brand as well

1. Click `*Next*`

> *Note ->* If the exporter requires brand selection, you will see an option to select the [*brand*](https://learn.supernova.io/latest/design-systems/multi-brand-design-systems.html) to use



Missing parser for block type FigmaFrames

 

### Step 2: Choose a delivery method

1. Choose a delivery method from the list — view a detailed explanation of delivery options [here](https://learn.supernova.io/latest/code-integration/exporters/automating-code-delivery/code-delivery.html)

1. If you have not yet authorized the delivery destination (i.e. _GitHub**_) you will need to sign in to the service with OAuth or with a personal access token. See [Integrations]()



Missing parser for block type FigmaFrames

 

If you select a pull request delivery option:

1. Select the connection (for example, which access token you would like to use)

1. Depending on the service (i.e. GitHub, Bitbucket), the options below may appear differently depending on the service's configuration

1. Click *`Run`* to run the build

When you run a build, it will be queued on our CI/CD servers and will generate the code on your behalf. You can stay on the same page — it will automatically refresh when the code is ready.



Missing parser for block type FigmaFrames

 

> *Note ->* Click the refresh icon to refresh the list of dropdown options

- *Organization / Group / Workspace*

- *Project*

- *Repository*

- *Branch *-> We will open a new or append an existing pull request on a branch called `supernova/``_[exporter-name]**_`. Make sure there are no conflicting branch names before running the build.

- *Relative path *_*(optional)***_ -> Path relative to the repository root to which code will be exported