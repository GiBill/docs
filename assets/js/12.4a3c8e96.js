(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{219:function(e,t,o){"use strict";o.r(t);var a=o(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"set-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set Up")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!")])]),e._v(" "),o("ul",[o("li",[e._v("Download our prefabricated Raspbian buster image:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/releases/tag/v1.0.0-a5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direct download"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("This image has nothing more than Python 3.7 pre installed along with Project Alice and its dependencies")]),e._v(" "),o("li",[e._v("If you wonder what's check the "),o("a",{attrs:{href:"preinstalled"}},[e._v("Preinstalled Packages Section")])])])]),e._v(" "),o("li",[e._v("Flash the image to your SD card")]),e._v(" "),o("li",[o("strong",[e._v("do not place any wpa_supplicant.conf or ssh file in /boot")])]),e._v(" "),o("li",[o("strong",[e._v("do not boot your raspberry before doing this next point!!")])]),e._v(" "),o("li",[o("strong",[e._v("Edit the /boot/ProjectAlice.yaml file")]),e._v(". If there's no ProjectAlice.yaml file on the /boot partition, grab the latest from sources: "),o("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/blob/master/ProjectAlice.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAlice.yaml"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Configure it according to your informations and needs. All configuration have a little explanation but most should be self explanatory.")]),e._v(" "),o("li",[e._v("Make sure to have a space after the colons:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("forceRewrite:yes")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),o("li",[e._v("If the option value contains any special characters, enclose the whole with double quotes:\n"),o("ul",[o("li",[e._v("Wrong: "),o("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),o("li",[e._v("Correct: "),o("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),o("li",[e._v("Save it, unplug your sd, plug it in your raspberry pi and power it up.")]),e._v(" "),o("li",[e._v("Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while, "),o("strong",[e._v("so do not unplug until she has spoken to you!")])]),e._v(" "),o("li",[e._v("If you have enabled the interface (by default), you can check what's going on by browsing to "),o("code",[e._v("http://x.x.x.x:5000")]),e._v(", replace with the Project Alice device's IP adress.")]),e._v(" "),o("li",[e._v("The SSH User is "),o("code",[e._v("pi")]),e._v(" and the password is "),o("code",[e._v("umbrella")])])]),e._v(" "),o("h4",{attrs:{id:"having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[e._v("#")]),e._v(" Having issues with Alice? She doesn't hear you? Doesn't seem to start?")]),e._v(" "),o("p",[e._v("Have a look at our "),o("a",{attrs:{href:"troubleshooting"}},[e._v("Troubleshooting guide")]),e._v("!")])])}),[],!1,null,null,null);t.default=s.exports}}]);