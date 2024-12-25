
---
title: "Don't trust default timeouts"
date: "2024-12-25"
---

Modern applications don’t crash; they hang. One of the main reasons for it is the assumption that the network is reliable. It isn’t.

If you are a making synchronous network call that never returns, then to very least your thread hogs forever. Whoops. Asynchronous network calls that don’t return are not free either. Sure, you are not hogging threads, but you are leaking sockets. Any HTTP client library worth its salt uses socket pools to avoid recreating connections. And those pools have a limited capacity. Like any other resource leak, it’s only a matter of time until there are no sockets left. When that happens, your application is going to get stuck waiting for a connection to free up.

Many builtin network libs don't give us a default timeout: JS, Python, Golang.

As a rule of thumb, always set timeouts when making network calls. And if you build libraries, always set reasonable default timeouts and make them configurable for your clients.
