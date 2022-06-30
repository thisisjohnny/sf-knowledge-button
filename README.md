# Launch Knowledge Modal

Salesforce Knowledge provides a great way of authoring and displaying a rich knowledge base of policies, standard operating procedures, FAQs and more. Sometimes, it's nice to have quick access to the content of those articles, directly from within you Lightning apps to help direct users to specific on-demand answers or training. This LWC allows you to tie a specific Knowledge article (by name) to a button you can display within the Lightning App Builder on app pages or record pages on desktop. The article is displayed a modal window. Multiple isntances of this LWC can be included on the same page, and using conditional visibility settings in the Lightning App Builder, can render only when needed at certain steps or stages in a process, when record details meet a certain criteria, or only for certain users based on profile.

## What To Do

1. Install this package using the link below
2. Add one or more users to the included Permission Set. This will grant access to the Apex class necessary for using this action
3. In the Lightning App Builder, drag the Knowledge Button LWC onto the canvas and configure the properties. Most are defautled except for the Knowledge Article Name. Use the human-readable Title of your Knowledge article

## Deploy to Your Org

### Disclaimer
**This package is provided without warranty.**
This package may not work in your environment due to configurations of the Knowledge object. This software has not been fully tested nor developed with strict security and access controls in mind. By installing this package in your org, you assume all risk of consequences and agree not to hold myself or my employer liable.

To deploy this package to you Salesforce environment, use the [Salesforce DX Public Deployer](https://hosted-scratch.herokuapp.com/byoo?template=https://github.com/thisisjohnny/sf-knowledge-button) and choose the option best for you.

----
_Made with_ 🍣 _in Reston_