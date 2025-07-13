# This is a Chrome extension.

Building a Chrome extension uses the same core technologies that power the web. Here's a simple breakdown:

*   **HTML (HyperText Markup Language):** This is the skeleton. It's used to structure the different parts of your extension, like the popup that appears when you click the extension's icon.
*   **CSS (Cascading Style Sheets):** This is for styling. It makes the extension look good—defining colors, fonts, and layout.
*   **JavaScript:** This is the brain. It handles all the logic, from what happens when you click a button to interacting with the web pages you visit.

## What do you need to know to build this?

Beyond these, there are a few special concepts specific to Chrome extensions:

*   **`manifest.json`:** Think of this as the extension's passport. It's a file that tells Chrome important information about your extension, like its name, version, and what permissions it needs to run.
*   **`Background Scripts`:** These are the behind-the-scenes workers. They handle long-term tasks and react to browser events, even when you don't have the extension's popup open.
*   **`Content Scripts`:** These are your extension's way of interacting directly with the web pages you're browsing. They can read or change things on the page.
*   **`Popup`:** The small window that shows up when you click the extension's icon in the browser toolbar. It's your extension's main user interface.

With a good grasp of these, you can create very powerful and useful extensions!

## Further Reading

For more in-depth information, here are some official resources from Google:

*   **[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)**
*   **[Manifest File](https://developer.chrome.com/docs/extensions/reference/manifest)**
*   **[Background Scripts (Service Workers)](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers)**
*   **[Content Scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)**
*   **[Popup (Action API)](https://developer.chrome.com/docs/extensions/reference/api/action)**

## Setup

### Loading the Extension in Chrome

First, create a `manifest.json` file in this directory. Then, follow the steps below to load the extension in Chrome.

1. Open Google Chrome and navigate to `chrome://extensions`.
2. Enable "Developer mode" using the toggle switch in the top-right corner.
3. Click the "Load unpacked" button that appears.
4. In the file selection dialog, navigate to and select your project directory (`P:\projects\chrome-extension`).

### Adding Extension Icons

1.  **Create an `images` folder** in your project directory to keep your icons organized.
2.  **Add your icon files** to the `images` folder. It's best practice to provide icons in multiple sizes (e.g., 16x16, 48x48, 128x128).
3.  **Declare the icons in `manifest.json`**. You need to tell Chrome where to find your icons by adding an `icons` object to your manifest file.
4. For more details, refer to the [official Chrome extension icon documentation](https://developer.chrome.com/docs/extensions/reference/manifest/icons).

### Using a Background Script (Service Worker)

- A background script (or service worker) is the extension's central event handler. It runs in the background to listen for browser events, such as the extension being installed or the user clicking the toolbar icon. It's essential for managing the extension's state and coordinating different parts of your extension. It also acts as a message hub between your content scripts (which run on web pages) and your UI elements (like popups or the side panel).

- To add a background script:

1.  **Create a JavaScript file** (e.g., `service-worker.js`) in your project directory.
2.  **Define the service worker in `manifest.json`** by adding the `background` key:
3. For more information, see the [official documentation on background scripts](https://developer.chrome.com/docs/extensions/reference/manifest/background).

