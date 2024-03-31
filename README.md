# Namaste-React

Q1) What is CDN ?
Q2) What is the difference between <script> tag and <script src=""> tag ?
Q3) Why the crossorigin Attribute?
A-> The crossorigin attribute in the script tag is used for specifying how the browser should handle cross-origin requests when fetching the script file. It is typically used when loading scripts from a different domain than the one hosting the web page. Here's why it's there:

Cross-Origin Resource Sharing (CORS) Policy: Browsers have security policies that restrict loading resources (like scripts, stylesheets, or fonts) from domains other than the one serving the web page. This is to prevent potential security vulnerabilities, such as cross-site scripting (XSS) attacks.

Cross-Origin Requests: When a script is loaded from a different domain (cross-origin), the browser sends a CORS request to the server hosting the script. The server can respond with CORS headers that specify who can access the resource and under what conditions.

Usage in React (or any other framework/library): React applications often use scripts hosted on content delivery networks (CDNs) like unpkg.com to fetch library dependencies. Adding crossorigin to the script tag indicates to the browser that the script may be loaded from a different domain and that CORS rules should be applied.
