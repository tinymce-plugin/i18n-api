# 🛠️ i18n-api 

提供实现 [*Tinymce-Plugin*](https://github.com/tinymce-plugin) 多语言化API支持工具🛠️
# 使用说明

### 安装
 
```sh
npm i @tinymce-plugin/i18n-api or yarn add @tinymce-plugin/i18n-api
```
```js
const tpI18nTranslate = require('@tinymce-plugin/i18n-api')
tpI18nTranslate([
  'import word document',
  "Import to Word succeeded",
  "Converting...",
  "Currently only supports docx file format, if it is doc format, please convert it to docx"
])
```
