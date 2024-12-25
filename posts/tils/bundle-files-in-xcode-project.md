---
title: "Bundle files in Xcode project"
date: "2024-12-25"
---

## What is bundle?
A bundle is a directory in the file system that groups executable code and related resources such as images and sounds together in one place.In iOS and OS X, applications, frameworks, plug-ins, and other types of software are bundles. A bundle is a directory with a standardized hierarchical structure that holds executable code and resources used by that code. Foundation and Core Foundation include facilities for locating and loading code and resources in bundles.

## How to create a bundle?
1. Create a test.txt file and add the text “testing✌️” to it then put it in a folder named temp.bundle
2. Drag and drop it next to your ".app" file in xcode (tick the copy if need checkbox)
3. Test if it works: `Swift.print(Bundle.main.resourcePath!+"/temp.bundle/test.txt")`

## Why use .bundle folders?

Dragging a folder with resources into xcode will also work but the content will not have hierarchical folder structure once you build. .bundle folders on the other hand will retain the hierarchical folder structure

## Ref:
- https://eon.codes/blog/2017/07/31/bundle-files-in-xcode/
- [Apple developer](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Bundle.html#:~:text=A%20bundle%20is%20a%20directory,types%20of%20software%20are%20bundles.&text=Most%20types%20of%20Xcode%20projects,when%20you%20build%20the%20executable.)
