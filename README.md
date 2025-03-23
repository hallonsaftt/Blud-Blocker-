
# 🚫 Blud Blocker Chrome Extension

**Site Blocker** is a simple and effective Chrome extension that helps users block access to unwanted websites (e.g., adult content, social media, distractions) and redirect them to a custom safe page.

---

## 🔧 Features

- ✅ Predefined block list (top 10 adult sites)
- ➕ Add or remove your own custom sites
- 🔄 Automatic redirection to a custom page
- 🧠 Lightweight and privacy-friendly
- 💡 Fully local – no user data collected or sent

---

## 📦 Installation

1. Clone or download this repository.
2. Open Google Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the folder where the extension is located

---

## 📘 How to Use

- Click the extension icon in the top-right of Chrome
- Use the input to add websites you want to block (e.g. `facebook.com`)
- Blocked websites will redirect to your custom page (e.g. `https://webfire.fun/blocked.html`)
- You can remove sites from the list anytime

---

## 🔐 Permissions

This extension uses the following permissions:

| Permission             | Purpose                                                              |
|------------------------|----------------------------------------------------------------------|
| `storage`              | To save the list of blocked websites locally                        |
| `declarativeNetRequest`| To block/redirect requests to specified sites                       |
| `host_permissions`     | To detect URLs and apply blocking rules                             |

---

## 🛡️ Privacy Policy

This extension does **not** collect, store, or transmit any personal data.  
All settings are saved locally using Chrome’s `storage.local` API.

Read the full [Privacy Policy](https://webfire.fun/privacy.html)

---

## 📧 Contact

If you have any questions or suggestions, feel free to contact:

📩 **info@hallonsaftt.com**

---

## 📃 License

MIT License
