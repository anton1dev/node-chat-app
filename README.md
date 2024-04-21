# Node Chat App

Here I've implemented a short, simple-to-use, and lightweight application that emulates a real-time Chat Application.

The chat runs in the Node CLI (Command Line Interface), eliminating the need to implement a specific UI for messaging.

You can clone the entire repository to your PC and run the chat locally.

Enjoy!


## Used technologies 

During the development process, I utilized various built-in Node.js modules.

For instance, I used the `net` module for creating a server, `readline` with promises, as well as `socket` technologies to implement a real-time chat application.

## Description 

This application facilitates easy text messaging between users. It can handle several user connections, with all messages being displayed to each user currently in the chat.

When a new user joins, all other online users receive a notification, e.g., 
- `User 123 joined the chat!`

Similarly, when a user leaves the chat (closes the application), other online users receive a 
- `User 123 left the chat!`
notification.

As users type new messages, they are immediately visible to other online users. Messages appear at the top of the chat log.


## Instructions

If you want to open an app on your PC locally, just type: 
- `npm i`
- `npm start`

To simulate new connections, run 
- `node client.js` 
for each new user who wishes to join the chat room.