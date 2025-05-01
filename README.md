
# rem.it 🔁

> Instantly convert all `px` units to `rem` in your CSS or SCSS files — clean, scalable, and lightning fast.

![rem.it demo banner](./assets/banner.png)

---

## ✨ Features

- 🔄 **One-Click Conversion**: Automatically convert `px` to `rem` across your entire file.
- ⚙️ **Customizable Base Pixel**: Set your own base pixel size (default is `16px`).
- 🎯 **File Type Targeting**: Choose which file types to include (`.css`, `.scss`, etc.).
- 🧠 **Smart Transformations**: Ignores comments, calc expressions, and handles decimals precisely.
- 🎹 **Custom Keybinding Support**: Trigger via command or your own hotkeys.

---

## ⚙️ Configuration

In your VS Code `settings.json`:

```json
"rem-it.basePx": 16,
"rem-it.includeFileTypes": [".css", ".scss", ".less"]
```

---

## ⚡️ Usage

### ✅ Convert from Command Palette:
1. Open Command Palette (`Cmd+Shift+P` on Mac or `Ctrl+Shift+P` on Windows)
2. Type `Remmify`
3. Hit Enter — done!

### 🎹 Or Use Shortcut:
> Default (you can change this in `keybindings.json`):
```json
{
  "command": "rem-it.convertPxToRem",
  "key": "cmd+alt+r",
  "when": "editorTextFocus"
}
```

---

## 🚀 Why rem.it?

`rem.it` brings you modern responsiveness with zero hassle. Say goodbye to fixed pixels and hello to scalability. Perfect for teams and solo devs building accessible, future-proof frontends.

---

## 📸 Demo

![Video of settings and conversion in action](./assets/demo.gif)

---

## 🛠 Contributing

Pull requests welcome! Let’s build a better responsive web together. 🌐

---

## 📄 License

MIT

---
Built with ❤️ by [Vimal](https://github.com/Vimalraj-svr)