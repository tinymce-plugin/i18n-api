const translate = require("@vitalets/google-translate-api");
const fs = require('fs')
let i18n_langs = {};
// var defaultLangs = {
//     'auto': 'Automatic',
//     'af': 'Afrikaans',
//     'sq': 'Albanian',
//     'am': 'Amharic',
//     'ar': 'Arabic',
//     'hy': 'Armenian',
//     'az': 'Azerbaijani',
//     'eu': 'Basque',
//     'be': 'Belarusian',
//     'bn': 'Bengali',
//     'bs': 'Bosnian',
//     'bg': 'Bulgarian',
//     'ca': 'Catalan',
//     'ceb': 'Cebuano',
//     'ny': 'Chichewa',
//     'zh-CN': 'Chinese (Simplified)',
//     'zh-TW': 'Chinese (Traditional)',
//     'co': 'Corsican',
//     'hr': 'Croatian',
//     'cs': 'Czech',
//     'da': 'Danish',
//     'nl': 'Dutch',
//     'en': 'English',
//     'eo': 'Esperanto',
//     'et': 'Estonian',
//     'tl': 'Filipino',
//     'fi': 'Finnish',
//     'fr': 'French',
//     'fy': 'Frisian',
//     'gl': 'Galician',
//     'ka': 'Georgian',
//     'de': 'German',
//     'el': 'Greek',
//     'gu': 'Gujarati',
//     'ht': 'Haitian Creole',
//     'ha': 'Hausa',
//     'haw': 'Hawaiian',
//     'he': 'Hebrew',
//     'iw': 'Hebrew',
//     'hi': 'Hindi',
//     'hmn': 'Hmong',
//     'hu': 'Hungarian',
//     'is': 'Icelandic',
//     'ig': 'Igbo',
//     'id': 'Indonesian',
//     'ga': 'Irish',
//     'it': 'Italian',
//     'ja': 'Japanese',
//     'jw': 'Javanese',
//     'kn': 'Kannada',
//     'kk': 'Kazakh',
//     'km': 'Khmer',
//     'ko': 'Korean',
//     'ku': 'Kurdish (Kurmanji)',
//     'ky': 'Kyrgyz',
//     'lo': 'Lao',
//     'la': 'Latin',
//     'lv': 'Latvian',
//     'lt': 'Lithuanian',
//     'lb': 'Luxembourgish',
//     'mk': 'Macedonian',
//     'mg': 'Malagasy',
//     'ms': 'Malay',
//     'ml': 'Malayalam',
//     'mt': 'Maltese',
//     'mi': 'Maori',
//     'mr': 'Marathi',
//     'mn': 'Mongolian',
//     'my': 'Myanmar (Burmese)',
//     'ne': 'Nepali',
//     'no': 'Norwegian',
//     'ps': 'Pashto',
//     'fa': 'Persian',
//     'pl': 'Polish',
//     'pt': 'Portuguese',
//     'pa': 'Punjabi',
//     'ro': 'Romanian',
//     'ru': 'Russian',
//     'sm': 'Samoan',
//     'gd': 'Scots Gaelic',
//     'sr': 'Serbian',
//     'st': 'Sesotho',
//     'sn': 'Shona',
//     'sd': 'Sindhi',
//     'si': 'Sinhala',
//     'sk': 'Slovak',
//     'sl': 'Slovenian',
//     'so': 'Somali',
//     'es': 'Spanish',
//     'su': 'Sundanese',
//     'sw': 'Swahili',
//     'sv': 'Swedish',
//     'tg': 'Tajik',
//     'ta': 'Tamil',
//     'te': 'Telugu',
//     'th': 'Thai',
//     'tr': 'Turkish',
//     'uk': 'Ukrainian',
//     'ur': 'Urdu',
//     'uz': 'Uzbek',
//     'vi': 'Vietnamese',
//     'cy': 'Welsh',
//     'xh': 'Xhosa',
//     'yi': 'Yiddish',
//     'yo': 'Yoruba',
//     'zu': 'Zulu'
// };
let defaultLanguages = {
  en: "英语",
  es: "西班牙语",
  fr: "法语",
  de: "德语",
  'zh_CN': "中文",
  'zh_TW': "中文(繁体)",
  ja: "日文",
  ko: "韩语",
  nl: "荷兰",
  hu: "匈牙利语",
  pt: "葡萄牙语",
  cs: "捷克语",
  vi: "越南语",
};
let translateData= [
   "line",
   "import word document"
]



const translateCode = async(code,toCode,opt={}) => {
    const res = await translate(toCode, {
        from: opt.from||"auto",
        to: code,
        tld: opt.tld || "cn",
      });
      return  res.text
}
const tpI18nTranslate = (translateData, opt={})=>{
  const languages = opt?.languages?opt.languages : defaultLanguages
  // !langs&&(langs=defaultLangs)
Promise.all(
  Object.keys(languages).map(async (code) => {
    // console.log(code);
    if (typeof code === "string") {
        i18n_langs[code] = {}
       await  Promise.all(translateData.map(async(toCode)=>{
           i18n_langs[code][toCode] = await translateCode(code.replace(/_/gi,'-'),toCode.replace(/^tp-/ig, ""),opt);
        }))
      return true;
    }
    return true;
  })
).then((res2) => {
  try {
    fs.mkdirSync('./public/langs')
  } catch (error) {
      
  }
  if(opt.all){
   let data = JSON.stringify(i18n_langs,null,2)
    fs.writeFileSync('./public/langs/i18n.json',data)
  }else{
    Object.keys(i18n_langs).map(key=>{
      let data = JSON.stringify(i18n_langs[key],null,2)
      fs.writeFileSync('./public/langs/'+key+'.json',data)
    })
  }

  
});
}

module.exports = tpI18nTranslate
