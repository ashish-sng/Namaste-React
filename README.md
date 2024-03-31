# Namaste-React

Q1) What is CDN ?
A--> A CDN, or Content Delivery Network, is a distributed network of servers located in different geographical locations. The primary purpose of a CDN is to deliver web content, such as images, scripts, stylesheets, videos, and other static assets, to users more efficiently and quickly. CDNs work by caching content on servers located closer to users, reducing latency and improving overall website performance.

Here's why React (and many other libraries and frameworks) is hosted on a CDN:

1. **Global Availability:** CDNs have servers distributed across the globe. When a user requests a resource (like a JavaScript library) hosted on a CDN, the request is routed to the nearest CDN server, reducing the time it takes to fetch the resource. This improves the loading speed of websites and web applications for users worldwide.

2. **Load Balancing:** CDNs use load balancing techniques to distribute incoming traffic across multiple servers. This helps prevent individual servers from becoming overwhelmed with requests, ensuring a smooth and responsive experience for users.

3. **Caching:** CDNs cache static content like JavaScript files. When a user accesses a website that uses a CDN-hosted JavaScript library (such as React), the browser can often retrieve the library from the nearest CDN server's cache, further reducing load times.

4. **Reliability and Scalability:** CDNs are designed to be highly reliable and scalable. They can handle large volumes of traffic and provide redundancy to minimize downtime. This makes them a reliable choice for hosting critical web assets like React.

In the context of React being hosted on a CDN like unpkg.com (`https://unpkg.com/react@18/umd/react.development.js`), developers often choose CDNs for convenience and performance benefits. By hosting React on a CDN, developers can easily include React in their web applications by adding a single script tag, as shown in your example. This simplifies the development process and ensures that users can access the latest version of React from a fast and reliable source.

Q2) What is the difference between <script> tag and <script src=""> tag ?
A--> The <script> tag is used to define client-side JavaScript code in an HTML document. It can contain JavaScript code directly within the tag or reference an external JavaScript file using the src attribute.

Q3) Why the crossorigin Attribute?
A--> The crossorigin attribute in the script tag is used for specifying how the browser should handle cross-origin requests when fetching the script file. It is typically used when loading scripts from a different domain than the one hosting the web page. Here's why it's there:

Cross-Origin Resource Sharing (CORS) Policy: Browsers have security policies that restrict loading resources (like scripts, stylesheets, or fonts) from domains other than the one serving the web page. This is to prevent potential security vulnerabilities, such as cross-site scripting (XSS) attacks.

Cross-Origin Requests: When a script is loaded from a different domain (cross-origin), the browser sends a CORS request to the server hosting the script. The server can respond with CORS headers that specify who can access the resource and under what conditions.

Usage in React (or any other framework/library): React applications often use scripts hosted on content delivery networks (CDNs) like unpkg.com to fetch library dependencies. Adding crossorigin to the script tag indicates to the browser that the script may be loaded from a different domain and that CORS rules should be applied.
