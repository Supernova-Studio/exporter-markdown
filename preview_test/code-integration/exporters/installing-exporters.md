
# Installing exporters

How to install exporters in Supernova

---

In order to use an exporter, it must be installed in your workspace. The exporter will then be available to all developers with access to your workspace. There are two ways to install an exporter package: 

- install an existing exporter from the exporter Store

- link a GitHub repository containing an exporter package

  
![Install an exporter](https://studio-assets.supernova.io/design-systems/6475/67680479-be3b-4921-9dd8-31c4607ec975.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzY3NjgwNDc5LWJlM2ItNDkyMS05ZGQ4LTMxYzQ2MDdlYzk3NS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=R8RJA3jNU7WPeTCN8vgSXUT3-tJtSc2hV3mLePfK39INa7iUI1raI0aOOd9cq~GKPts~lm675dwJAOfibnQTK9A3XwRhRANM~ve4six29xcKy7GkRPJAs2JohbCcIJWqEx1KJDB5Onnt74jGHwXV~jETeXWIxJBwo5ZxuT9ZQSLzTE~I0EbLJS43FHnkiA1qtb4JKPlaggrkEAQacgWbZmau2COtydxyIQ-WEthS3FuF1NI10G08iA2GidLp7qvt6e3cBU~RrXZm6tBfgMfLmNwxXzbjT~O2GnOwYhKwsu3AH7Vfwwl55G~dWO1XeFk7ch3ntN~hJu13~Gz7BhObeQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Install an exporter  


## Install an exporter from the store

1. Navigate to *Code Integration → Store*

1. Locate the exporter you would like to install

1. Click the `*Install*` button

1. The exporter will be installed and now available to use. 

To see a list of all installed exporters, navigate to *Code Integration → Installed*.

> Be warned:  
> *Note: *Only owners and admins can install exporters

## Install an exporter from a GitHub repository

In Supernova, all Exporters are backed by GitHub repositories. To install an [exporter you've created](https://developers.supernova.io/building-exporters/creating-new-exporter) — or someone else's exporter — from a GitHub repository. 

The name, description and all other metadata about the exporter package will be taken from the `exporter.json` configuration file. 


1. Navigate to* Code Integration → Store*

1. Click `*+ New*`

1. Enter a valid GitHub repository URL

1. Click `*Confirm*`

  
![New exporter](https://studio-assets.supernova.io/design-systems/6475/5a824ce0-8484-43bd-abaa-14ecd9cc48a3.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzVhODI0Y2UwLTg0ODQtNDNiZC1hYmFhLTE0ZWNkOWNjNDhhMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=TbtwEK-jiVGwBnyFguH4kaRQciIF2y-aw9iZM9IKsRsNxpfIlWH1C483mSJboiSUFqjrIBTD3ii0zgvd0LQoDbdjLF6P~UMkaUeEpx2exvEDOvgknb6UFEaS-YSKslXy-7z7zl~uCtlJqcD7dDIFQDd5Inv7MZm6NF3GHwVscDx9wbb3MQT~oh3vZANEmOukVtxrf3BqP3mqhMdDTZteKdLeGn~5ZIXrbdFP9TsaIrPPf0iH6D~2wAscPeAjSV6yWhm7bWwLwdyHszBP8zCY2XWJNDJJsm5sjLDN1Cj1dKhgkKl0yLxfi3W-DmYIrf3kCf88s46gvZMGj046ZN42Tw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New exporter  


> Some extra info:  
> _This is a summary. **_For more details on creating your own exporters, see [Building Exporters 101](https://developers.supernova.io/building-exporters/creating-new-exporter) in the Supernova Developer Platform.

---

# Exporter preview

Before or after installing an exporter, you can see a preview of the output using your design system data.

1. In the exporter *Store*, or in your list of *Installed* exporters, click any exporter to open the detail page

1. Click the `*Preview*` button

1. Click `*Run*` to see the preview

  
![Code preview](https://studio-assets.supernova.io/design-systems/6475/4e080dcb-0acb-47db-b212-5087afe3dce7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzRlMDgwZGNiLTBhY2ItNDdkYi1iMjEyLTUwODdhZmUzZGNlNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=OSHJycT0XSVczVAXJYmkIV~bZEVjr2ui6FdFS7BPvGmrOHUol2FpcCkaNsB4TsBbY1ogwyQSZL83KGYB8Gp62C8wxK1my4nyfp7z4R8bqHVycTcGLn~~0aIq0o-bXRLY~Gh8i2hIGVGoO-PB1xtaWB9Flu5kjdDHLauv8vfztZIqOHGxrr8XmwwHF3fBzaEuKVWWXlZmdFAQCUDeheE~6On6XsGPlxYYJzmjKIPfcXTOhvOuTZuenQywbj9FuddNdVDtsfbdzg3JEsd8nh~83NupkYxzGHhej6kpHzpjffbB0AyZxt-Htjpu7X9TJjSDL-Nj8Ib8UdpjEEo3M9C7rg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Code preview  


> Some extra info:  
> To test the exporter against a different design system or version, select it from the *Test against* and *Version* dropdowns