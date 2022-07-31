
# Customizing exporters

Clone an existing exporter, or build your own custom exporter from scratch

---

All exporter packages are backed by _GitHub**_ repositories. This allows the exporter store to take advantage of all GitHub features like forking, distributing versions, or even provide a familiar place to report issues or feature requests directly to the author.

# Cloning exporters

If you would like to make your own edits to an existing public exporter in the exporter store, this can be done with cloning.

1. In *Code Integration → Store*, locate the exporter you would like to clone and click it to view the details

1. Click the `*GitHub Repository*` button to view it on GitHub

1. In GitHub, [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository

1. _Optional**_ — if you would like to make this exporter public, you must [change the unique package identifier](https://developers.supernova.io/building-exporters/cloning-exporters#changing-unique-identifier)

1. In *Code Integration → Store*, click `*+ New*` and provide the URL of the forked repository

1. Click `*Confirm*`

The cloned exporter will now be available in your workspace.

  
![New exporter](https://studio-assets.supernova.io/design-systems/6475/5a824ce0-8484-43bd-abaa-14ecd9cc48a3.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzVhODI0Y2UwLTg0ODQtNDNiZC1hYmFhLTE0ZWNkOWNjNDhhMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=TbtwEK-jiVGwBnyFguH4kaRQciIF2y-aw9iZM9IKsRsNxpfIlWH1C483mSJboiSUFqjrIBTD3ii0zgvd0LQoDbdjLF6P~UMkaUeEpx2exvEDOvgknb6UFEaS-YSKslXy-7z7zl~uCtlJqcD7dDIFQDd5Inv7MZm6NF3GHwVscDx9wbb3MQT~oh3vZANEmOukVtxrf3BqP3mqhMdDTZteKdLeGn~5ZIXrbdFP9TsaIrPPf0iH6D~2wAscPeAjSV6yWhm7bWwLwdyHszBP8zCY2XWJNDJJsm5sjLDN1Cj1dKhgkKl0yLxfi3W-DmYIrf3kCf88s46gvZMGj046ZN42Tw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New exporter  


> Some extra info:  
> _This is a summary.**_ For detailed information on building custom exporters, please refer to the section [Cloning exporters](https://developers.supernova.io/building-exporters/cloning-exporters) in the developer documentation.

---

# Building custom exporters

We recognize that everyone's requirements and coding standards are different, and that the file structure of the export can be vastly different from project to project — which is why we allow you to build your own custom exporters, and contribute to the community by publishing to the exporter store.

> Yay:  
> Custom exporters are available on the *Team* and *Company* plans.

> Some extra info:  
> _This is a summary.**_ For detailed information on building custom exporters, please refer to the section [Building Exporters](https://developers.supernova.io/building-exporters) in the developer documentation