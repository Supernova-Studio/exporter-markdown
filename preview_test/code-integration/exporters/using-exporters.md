
# Using exporters

---

## Install Visual Studio Code extension

Install the VS Code extension to work with the Supernova platform directly in your Microsoft VS Code environment. It can be installed from the VS Code extension marketplace. 

  
![Install VS Code](https://studio-assets.supernova.io/design-systems/6475/9317ded6-4ae0-46cf-8be1-70130549b3ad.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzkzMTdkZWQ2LTRhZTAtNDZjZi04YmUxLTcwMTMwNTQ5YjNhZC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=aelMAsSj5zqg9zYvK18XDhpnYTMh-NdeZ3UNmDrYASUuJYD4Yw19Z39Xe0GGfDlEPJtFYJe54JYMXStO0ki0InBq16Kz36jcJ8RJu4btBSm81YPLdjYjoT0y86zoE5NPRy5JmO4FONsr0zqPHGFyjJBLOHVsb1nekuj0TJH96LmX0MQSJcbcpdakfnIrcoyzH4J3ELpJXAAacrxBmWjGq3VKc~ayna3RlbuVVDsfonHbmvfuoe5cLVag51QoLpmaDYlzrLliv~yHoFq6J-w-G22IsXrGJszxJR~8faeXJvyJB5g0PwDS2vb42nA3DoS3JmP2-zxX28Lq4gJcHV4rFg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Install VS Code  


> Some extra info:  
> _This is a summary.**_ For more information about configuring your source design system in VS Code, view the [full setup instructions](https://developers.supernova.io/getting-started#download-supernova-vs-code-extension) in the developer documentation.

---

# Builds

A "*build*" in Supernova represents a single run of a specific exporter that points to a specific design system and version. 

  
![Builds](https://studio-assets.supernova.io/design-systems/6475/cadf7e9f-5b1a-4308-b6d3-36ce5afbad9c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2NhZGY3ZTlmLTViMWEtNDMwOC1iNmQzLTM2Y2U1YWZiYWQ5Yy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=fIVW8qyGzgTtRbjkJ6s7JTkVT286j-1Tk8sQcHTDitdaHby7zfeV2ESTswIhEwdJcvfRdiCjAWgeM4iQY3ZrpxH9eLC2LGJcv7b~j2nKnGvwN-9rxQjTXYSXJ9VllHUWZoQFvdWx1IiNGrAdGNQ8fOqECsxt-n4cDpcRal-Y8DeFyhoRkaj5HDdugC3Pom9mdA0xi4we7pToVdu-l3y8XU-mucwfSvmNt7CDbMNG75ZMimiORhsvhTNV6kqOsGQLn6X11m5v3rJ4HTU0YPSkYheH0zoWHsr~N2zQU6XyvwwBHFlilyk7xJGHwoEUl4v-bQ5isF51yHoRZOlCoQi10g__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Builds  


## Run an exporter in VS Code

> Yay:  
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

> Some extra info:  
> *Note ->* If the exporter requires brand selection, you will see an option to select the [*brand*](https://learn.supernova.io/latest/design-systems/multi-brand-design-systems.html) to use

  
![New build — Brand selection](https://studio-assets.supernova.io/design-systems/6475/7d89e553-18cc-4812-9700-d0486156a6e6.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzdkODllNTUzLTE4Y2MtNDgxMi05NzAwLWQwNDg2MTU2YTZlNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Bxq-jKP~cfPYmisDqMDdrI7-xFFxXhRKsjYW~0tf6jN5bWxt7sLp5h9Xol6qMzVeg2JXTLuwiSaT~KjTVgITi9Z-tfMZc1hOP9ZuQQKFyjK-n7kOdQmF1SCQ~USH6lQZcM08vcllVi2Spy4R1nBRJdHU2hvHngmbBKi8F1lgAbx-zFOY7xAP1mxv9HAt~mpSlCAEIphIjW9gQI3tEqC12QjBjh6hYWcxNem9VHgseSzXgdCAzOL9K60GS-PPMIbloMKJShjw~rOroNCIAsXh6hksDWeWrDbZqQod8sSqRxvnmol4s8x9-AbYwV75bo8~igfP7m0~d1nWSYO248B2Ng__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New build — Brand selection  


### Step 2: Choose a delivery method

1. Choose a delivery method from the list — view a detailed explanation of delivery options [here](https://learn.supernova.io/latest/code-integration/exporters/automating-code-delivery/code-delivery.html)

1. If you have not yet authorized the delivery destination (i.e. _GitHub**_) you will need to sign in to the service with OAuth or with a personal access token. See [Integrations]()

  
![New build — Delivery](https://studio-assets.supernova.io/design-systems/6475/8980bbfb-52ab-4729-96fb-4ba7cb7c03c4.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg5ODBiYmZiLTUyYWItNDcyOS05NmZiLTRiYTdjYjdjMDNjNC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Rpi1sArIkpyBHfrF7~I2WycBVrTa2yTGEbciMAVBrR2btHIVIUxg7jzqXOnXNhXLJ25mr2Zrt1EoBN1it1eSqAUCKvmNQ1VuT1d~FYA1o0gjbh2MfJ8C~izpE6k34xzW75iXr5MVDIfvWDEK5FDi19nbgNOenBpT9fNaRdiXMQP5MspnqsUYwiFlSgqOQBItGB4DFrcqVvUTqHVuwbppTYW4j2hq3tF2uN94V71VpGstqxHTmetUZgF4rJPEpeEnsfMmwYW6idu3VtFVlbvXCosNfYBNqxfSo2MV0zpERlspfM4bVWzsLxf-BLS759j65NoZxqwOXCh9WmmVjY7vzA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New build — Delivery  
![New build — GitHub Signed out](https://studio-assets.supernova.io/design-systems/6475/64d01bc8-7e3e-4870-a764-ac822e782991.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzY0ZDAxYmM4LTdlM2UtNDg3MC1hNzY0LWFjODIyZTc4Mjk5MS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=YLFFYxfENmbNQmWs5UmfZTic5Lctkf2x~HeeoyWoodxvHT~k93DigWPFW722bGg9o3~UC~VbaqfMjUwDvl6bGYIuXrFG-v03vWuStgJ9Y12IzanMkm2k8-X5jyBLoS~KzmIqvSCWz6-DBY-hqCYjVwRQQjHTMIjwrS-DQwRsLzh8c14skjkXoGCoGCZG5Gf3oDGvLCHuOmJrUGlcMs0TA~agiSjInJVQlKOEoJvxcj~B8AAwWDouMWc4pxnrUKRcbl66eOAEn9XDGBI9l68kZXQdz2PxH8HQTBVFWfALMUpHaOPKxz3ltzU3gKvdnCGdo0fsFP0UvWhQZJpZhyumaA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New build — GitHub Signed out  


If you select a pull request delivery option:

1. Select the connection (for example, which access token you would like to use)

1. Depending on the service (i.e. GitHub, Bitbucket), the options below may appear differently depending on the service's configuration

1. Click *`Run`* to run the build

When you run a build, it will be queued on our CI/CD servers and will generate the code on your behalf. You can stay on the same page — it will automatically refresh when the code is ready.

  
![New build — GitHub PR](https://studio-assets.supernova.io/design-systems/6475/14cf5b1f-a014-4830-9490-5c529c958e19.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzE0Y2Y1YjFmLWEwMTQtNDgzMC05NDkwLTVjNTI5Yzk1OGUxOS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=gC4JjoZomg5YOKp9~i~KuouPGfp7pKkERdI2G-3IS3qxtpJGGDEhGTI8ueUdrZnbqlkfKsDOaJmQFFbMBl9QOD0cGSx0pEHZpkzzY-eYBK-~kDRu1jfBHIeyk46K6Fy~IO2TeSB5FKqVTV9vxy79WEjo7H42gDQcqNTjbtEvNsPHR5io401otsCJX7ThOet~USSw03x2Epq5X7Gq2~ULcFWAB3EaXK2TTGl2bpOBjjvFQeaytfr7Z-Anyv8ymtF-huY3DREY8ezMlt-1lPYSz2Ead6BJc0bMYVaznqOr-JUdXi0dO8qXnAL7Y2vLOeUYevbze63ptnFEx4A6CxT9gQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
New build — GitHub PR  


> Some extra info:  
> *Note ->* Click the refresh icon to refresh the list of dropdown options

- *Organization / Group / Workspace*

- *Project*

- *Repository*

- *Branch *-> We will open a new or append an existing pull request on a branch called `supernova/``_[exporter-name]**_`. Make sure there are no conflicting branch names before running the build.

- *Relative path *_*(optional)***_ -> Path relative to the repository root to which code will be exported