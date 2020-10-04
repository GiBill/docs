(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{448:function(e,t,o){"use strict";o.r(t);var a=o(18),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("The last image we created for now is Beta 2! Did you check the "),o("a",{attrs:{href:"manual-install"}},[e._v("manual-install")]),e._v(" for an updated Alice? We will resume image creation when version 1 is released.")])]),e._v(" "),o("ul",[o("li",[e._v("Download our prefabricated Raspbian image:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-b1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direct download"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("This image has nothing more than Project Alice and a few dependencies.")]),e._v(" "),o("li",[e._v("If you wonder what's inside, check the "),o("a",{attrs:{href:"preinstalled"}},[e._v("Preinstalled Packages Section")])])])]),e._v(" "),o("li",[e._v("Extract the image from the 7zip archive")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Use "),o("a",{attrs:{href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("7zip"),o("OutboundLink")],1),e._v(", it's open source, fast, has one of the best compression ratio and comes with nice features")])]),e._v(" "),o("ul",[o("li",[e._v("Flash the image to your SD card")]),e._v(" "),o("li",[o("strong",[e._v("do not place any wpa_supplicant.conf or ssh file in /boot")])]),e._v(" "),o("li",[o("strong",[e._v("do not boot your raspberry before doing this next point!!")])]),e._v(" "),o("li",[o("strong",[e._v("Edit the /boot/ProjectAlice.yaml file")]),e._v(". If there's no ProjectAlice.yaml file on the /boot partition, grab the latest from sources: "),o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/blob/master/ProjectAlice.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAlice.yaml"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Configure it according to your information and needs. All configurations have a little explanation, but most should be self-explanatory.")]),e._v(" "),o("li",[e._v("Make sure to have a space after the colons:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("forceRewrite:yes")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),o("li",[e._v("If the option value contains any special characters, enclose the whole value with double quotes:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),o("li",[e._v("Save it, unplug your SD card, plug it into your raspberry pi and power it up.")]),e._v(" "),o("li",[e._v("Alice should boot by herself and connect to your Wi-Fi, update, configure and start. This may take a while, "),o("strong",[e._v("so do not unplug until she has spoken to you!")])]),e._v(" "),o("li",[e._v("If you have enabled the interface (by default), you can check what's going on by browsing to "),o("code",[e._v("http://x.x.x.x:5000")]),e._v(", replace with the Project Alice device's IP address.")]),e._v(" "),o("li",[e._v("The SSH User is "),o("code",[e._v("pi")]),e._v(", and the password is "),o("code",[e._v("umbrella")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);