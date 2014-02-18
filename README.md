Rainbow.js ![](http://img.shields.io/badge/Version-0.0.2-brightgreen.svg)
==========

A jQuery library to manage gadients easily ! 

#Get started
Its easy, you have to download the rainbow.js main script, once its done, you just have to link it to your documents, after the jQuery inclusion.

`<script type="text/javascript" src="path/to/rainbow.js"></script>`

#Create your first gradient !

Let's start with a simple structure. We will create a regular shape, a square.`

First, the css

`.square{ width:4em; height:4em; margin:.5em; }`

And the HTML : 
`<div class="square rainbow" id="gradient_2" data-type="linear" data-degrees="45" data-color="f1c40f-d35400" data-opacity="1" ></div>`

#Result : 

![](http://puu.sh/6ZyjF.png)


#Gradient images : 

This is one of the coolest Rainbow.js feature ! Its still in developement because we encounter issues with the gradient images on resize, but be sure it'll be fixed soon on a future release. 

By the way, you can still use it and play with it, but we didn't recommend to use it for production websites. 

CSS :
`.image{ width:15em; height:8em; display:block; margin:auto; background:url(image.png)no-repeat center center; background-size:cover; }`
HTML : 
`<div class="image rainbow" id="gradient_80" data-type="linear" data-degrees="45" data-color="000-F00" ></div>`
Result : 
![](http://puu.sh/6ZyEw.png)

#Gradient texts : 
![](http://img.shields.io/badge/--Webkit---ONLY-red.svg)
And finally, the last feature, a cool one, but unfortunately **-webkit-only**. 
If you're not a webkit browser user, you will get a gradient background behind your texts. 

We don't know yet if we should remove the function if you're not on a webkit browser, or display something else instad. 

HTML : 
`<h1 class="rainbow" id="rainText_1" data-type="linear" data-degrees="0" data-color="000-F00" >Look ma ! A Rainbow text !</h1>`

Result : 
![](http://puu.sh/6ZyMM.png)

