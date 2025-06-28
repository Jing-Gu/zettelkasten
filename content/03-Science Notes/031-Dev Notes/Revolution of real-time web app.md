#Software  #Websocket

The web was built based on the idea that a client's job is to request data from a server and a server's job is to fulfill those clients' requests. This paradigm was unchanged until the introduction of AJAX around 2005 where many people started to explore the possibilities of making connections between a client and server bidirectional.

The biggest thing holding back was the traditional HTTP model of client initiated transactions. One solution was long-polling, means that keeping an HTTP connection open until the server has some data to push down to the client. The problem with all of these solutions is that they carry the overhead of HTTP. Every time you make an HTTP request a bunch of headers and cookie data are transferred to the server. This can add up to a reasonably large amount of data that needs to be transferred, which in turn increases latency. The worst part of this is that a lot of these headers and cookies aren’t actually needed to fulfill the client’s request.

## WebSocket
WebSockets provide a persistent connection between a client and server that both parties can be used to start sending data at any time.

- WS is bi-directional communication. The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP requests.
- WS is a HTTP upgrade (use the same TCP connection over ws://)
- WebSocket URLs use the `ws` scheme. To be secure, there's encrypted `wss`, which is the equivalent of HTTPS
- WS is great for services that require continuous data exchange, e.g. online games, real-time trading
- easy to implement
- **only send headers once**!

WebSockets comes as a part of HTML5 standard, so we do not need to worry about adding some extra plugin to make it work. WebSockets API is fully supported and implemented by JavaScript.

## How WebSocket works
The client establishes a WebSocket connection through a process known as the WebSocket **handshake**, starting with the client sending a regular HTTP request to the server. An upgrade header is included to inform the server that the client wants to establish a WS connection.

```markdown
GET ws://websocket.example.com/ HTTP/1.1
Origin: <http://example.com>
Connection: Upgrade
Host: websocket.example.com
Upgrade: websocket
```

If the server supports the WS protocol, it agrees to the upgrade and communicates through an Upgrade header in the response.

```markdown
HTTP/1.1 101 WebSocket Protocol Handshake
Date: Wed, 16 Oct 2013 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket
```

Now that the handshake is complete. The initial HTTP connection is replaced by a WebSocket connection that uses the same underlying TCP/IP connection. At this point either party can starting sending data.

### Events

After creating the WebSocket object, we need to handle the events it exposes. There are four main events in the WebSocket API: Open, Message, Close, and Error. You can handle them either by implementing the `onopen`, `onmessage`, `onclose`, and `onerror` functions respectively, or by using the addEventListener method. Both ways are almost equivalent for what we need to do, but the first one is much clearer.

The `onopen` event is raised right after the connection has been successfully established.

The `onmessage` event is the client's ear to the server. Whenever the server sends some data, this event is fired. Messages might contain plain text, images, or binary data. It's up to you how that data will be interpreted and visualized.

The `onclose` event marks the end of the conversation. Whenever this event is fired, no messages can be transferred between the server and the client unless the connection is reopened. A connection might be terminated due to a number of reasons. It can be closed by the server, it may be closed by the client using the close() method, or due to TCP errors. The closing can be further investigated by checking `code`, `reason` and `wasClean` parameters of the event.

The `onerror` event is fired when something wrong (usually unexpected behaviour or failure) occurs.