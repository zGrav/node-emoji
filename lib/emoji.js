/*jslint node: true*/
"use strict";

/**
 * Emoji class
 */
function Emoji() {
  try {
    this.emoji = require('./emoji.json');
  } catch (err) {
    throw new Error('emoji.json invalid or not readable.');
  }
}

module.exports = new Emoji();

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
Emoji.parser = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * get emoji code from name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.prototype._get = function _get(emoji) {
  if (this.emoji.hasOwnProperty(emoji)) {
    return this.emoji[emoji];
  }
  return ':' + emoji + ':';
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.prototype.get = function get(emoji) {
  if (emoji.indexOf(':') > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    emoji = emoji.substr(1, emoji.length-2);
  }

  return this._get(emoji);
};

/**
 * get emoji name from code
 * @param  {string} emoji_code
 * @return {string}
 */
Emoji.prototype.which = function which(emoji_code) {
  for (var prop in this.emoji) {
    if (this.emoji.hasOwnProperty(prop)) {
      if (this.emoji[prop] === emoji_code) {
        return prop;
      }
    }
  }
};

function ReplaceEmoticon(str) {
    
    if (str.includes('<3')) {
        str = str.replace('<3', ':heart:');
    } else if (str.includes('</3')) {
        str = str.replace('</3', ':broken_heart:');
    } else if (str.includes(":')")) {
        str = str.replace(":')", ':joy:');
    } else if (str.includes(":'-)")) {
        str = str.replace(":'-)", ':joy:');
    } else if (str.includes(":D")) {
        str = str.replace(":D", ':smiley:');
    } else if (str.includes(":-D")) {
        str = str.replace(":-D", ':smiley:');
    } else if (str.includes("=D")) {
        str = str.replace("=D", ':smiley:');
    } else if (str.includes(":)")) {
        str = str.replace(":)", ':smile:');
    } else if (str.includes(":-)")) {
        str = str.replace(":-)", ':smile:');
    } else if (str.includes("=]")) {
        str = str.replace("=]", ':smile:');
    } else if (str.includes("=)")) {
        str = str.replace("=)", ':smile:');
    } else if (str.includes(":]")) {
        str = str.replace(":]", ':smile:');
    } else if (str.includes("':)")) {
        str = str.replace("':)", ':sweat_smile:');
    } else if (str.includes("':-)")) {
        str = str.replace("':-)", ':sweat_smile:');
    } else if (str.includes("'=)")) {
        str = str.replace("'=)", ':sweat_smile:');
    } else if (str.includes("':D")) {
        str = str.replace("':D", ':sweat_smile:');
    } else if (str.includes("':-D")) {
        str = str.replace("':-D", ':sweat_smile:');
    } else if (str.includes("'=D")) {
        str = str.replace("'=D", ':sweat_smile:');
    } else if (str.includes(">:)")) {
        str = str.replace(">:)", ':laughing:');
    } else if (str.includes(">;)")) {
        str = str.replace(">;)", ':laughing:');
    } else if (str.includes(">:-)")) {
        str = str.replace(">:-)", ':laughing:');
    } else if (str.includes(">=)")) {
        str = str.replace(">=)", ':laughing:');
    } else if (str.includes(";)")) {
        str = str.replace(";)", ':wink:');
    } else if (str.includes(";-)")) {
        str = str.replace(";-)", ':wink:');
    } else if (str.includes("*-)")) {
        str = str.replace("*-)", ':wink:');
    } else if (str.includes("*)")) {
        str = str.replace("*)", ':wink:');
    } else if (str.includes(";-]")) {
        str = str.replace(";-]", ':wink:');
    } else if (str.includes(";]")) {
        str = str.replace(";]", ':wink:');
    } else if (str.includes(";D")) {
        str = str.replace(";D", ':wink:');
    } else if (str.includes(";^)")) {
        str = str.replace(";^)", ':wink:');
    } else if (str.includes("':(")) {
        str = str.replace("':(", ':sweat:');
    } else if (str.includes("':-(")) {
        str = str.replace("':-(", ':sweat:');
    } else if (str.includes("'=(")) {
        str = str.replace("'=(", ':sweat:');
    } else if (str.includes(":*")) {
        str = str.replace(":*", ':kissing_heart:');
    } else if (str.includes("=*")) {
        str = str.replace("=*", ':kissing_heart:');
    } else if (str.includes(":-*")) {
        str = str.replace(":-*", ':kissing_heart:');
    } else if (str.includes(":^*")) {
        str = str.replace(":^*", ':kissing_heart:');
    } else if (str.includes(">:P")) {
        str = str.replace(">:P", ':stuck_out_tongue_winking_eye:');
    } else if (str.includes(">:P")) {
        str = str.replace(">:P", ':stuck_out_tongue_winking_eye:');
    } else if (str.includes("X-P")) {
        str = str.replace("X-P", ':stuck_out_tongue_winking_eye:');
    } else if (str.includes("x-p")) {
        str = str.replace("x-p", ':stuck_out_tongue_winking_eye:');
    } else if (str.includes(">:[")) {
        str = str.replace(">:[", ':disappointed:');
    } else if (str.includes(":-(")) {
        str = str.replace(":-(", ':disappointed:');
    } else if (str.includes(":(")) {
        str = str.replace(":(", ':disappointed:');
    } else if (str.includes(":-[")) {
        str = str.replace(":-[", ':disappointed:');
    } else if (str.includes(":[")) {
        str = str.replace(":[", ':disappointed:');
    } else if (str.includes("=(")) {
        str = str.replace("=(", ':disappointed:');
    } else if (str.includes(">:(")) {
        str = str.replace(">:(", ':angry:');
    } else if (str.includes(">:(")) {
        str = str.replace(">:-(", ':angry:');
    } else if (str.includes(":@")) {
        str = str.replace(":@", ':angry:');
    } else if (str.includes(":'(")) {
        str = str.replace(":'(", ':cry:');
    } else if (str.includes(":'-(")) {
        str = str.replace(":'-(", ':cry:');
    } else if (str.includes(";(")) {
        str = str.replace(";(", ':cry:');
    } else if (str.includes(";-(")) {
        str = str.replace(";-(", ':cry:');
    } else if (str.includes(">.<")) {
        str = str.replace(">.<", ':persevere:');
    } else if (str.includes(":$")) {
        str = str.replace(":$", ':flushed:');
    } else if (str.includes("=$")) {
        str = str.replace("=$", ':flushed:');
    } else if (str.includes("#-)")) {
        str = str.replace("#-)", ':dizzy_face:');
    } else if (str.includes("#)")) {
        str = str.replace("#)", ':dizzy_face:');
    } else if (str.includes("%-)")) {
        str = str.replace("%-)", ':dizzy_face:');
    } else if (str.includes("%)")) {
        str = str.replace("%)", ':dizzy_face:');
    } else if (str.includes("X)")) {
        str = str.replace("X)", ':dizzy_face:');
    } else if (str.includes("X-)")) {
        str = str.replace("X-)", ':dizzy_face:');
    } else if (str.includes("*\\0/*")) {
        str = str.replace("*\\0/*", ':ok_woman:');
    } else if (str.includes("\\0/")) {
        str = str.replace("\\0/", ':ok_woman:');
    } else if (str.includes("*\\O/*")) {
        str = str.replace("*\\O/*", ':ok_woman:');
    } else if (str.includes("\\O/")) {
        str = str.replace("\\O/", ':ok_woman:');
    } else if (str.includes("O:-)")) {
        str = str.replace("O:-)", ':innocent:');
    } else if (str.includes("0:-3")) {
        str = str.replace("0:-3", ':innocent:');
    } else if (str.includes("0:3")) {
        str = str.replace("0:3", ':innocent:');
    } else if (str.includes("0:-)")) {
        str = str.replace("0:-)", ':innocent:');
    } else if (str.includes("0:)")) {
        str = str.replace("0:)", ':innocent:');
    } else if (str.includes("0;^)")) {
        str = str.replace("0;^)", ':innocent:');
    } else if (str.includes("O:)")) {
        str = str.replace("O:)", ':innocent:');
    } else if (str.includes("O;-)")) {
        str = str.replace("O;-)", ':innocent:');
    } else if (str.includes("O=)")) {
        str = str.replace("O=)", ':innocent:');
    } else if (str.includes("0;-)")) {
        str = str.replace("0;-)", ':innocent:');
    } else if (str.includes("O:-3")) {
        str = str.replace("O:-3", ':innocent:');
    } else if (str.includes("O:3")) {
        str = str.replace("O:3", ':innocent:');
    } else if (str.includes("B-)")) {
        str = str.replace("B-)", ':sunglasses:');
    } else if (str.includes("B)")) {
        str = str.replace("B)", ':sunglasses:');
    } else if (str.includes("8)")) {
        str = str.replace("8)", ':sunglasses:');
    } else if (str.includes("8-)")) {
        str = str.replace("8-)", ':sunglasses:');
    } else if (str.includes("B-D")) {
        str = str.replace("B-D", ':sunglasses:');
    } else if (str.includes("8-D")) {
        str = str.replace("8-D", ':sunglasses:');
    } else if (str.includes("-_-")) {
        str = str.replace("-_-", ':expressionless:');
    } else if (str.includes("-___-")) {
        str = str.replace("-___-", ':expressionless:');
    } else if (str.includes("-__-")) {
        str = str.replace("-__-", ':expressionless:');
    } else if (str.includes(">:\\")) {
        str = str.replace(">:\\", ':confused:');
    } else if (str.includes(">:/")) {
        str = str.replace(">:/", ':confused:');
    } else if (str.includes(":-/")) {
        str = str.replace(":-/", ':confused:');
    } else if (str.includes(":-.")) {
        str = str.replace(":-.", ':confused:');
    } else if (str.includes(":\\")) {
        str = str.replace(":\\", ':confused:');
    } else if (str.includes("=/")) {
        str = str.replace("=/", ':confused:');
    } else if (str.includes("=//")) {
        str = str.replace("=//", ':confused:');
    } else if (str.includes("=\\")) {
        str = str.replace("=\\", ':confused:');
    } else if (str.includes(":L")) {
        str = str.replace(":L", ':confused:');
    } else if (str.includes("=L")) {
        str = str.replace("=L", ':confused:');
    } else if (str.includes(":P")) {
        str = str.replace(":P", ':stuck_out_tongue:');
    } else if (str.includes(":-P")) {
        str = str.replace(":-P", ':stuck_out_tongue:');
    } else if (str.includes("=P")) {
        str = str.replace("=P", ':stuck_out_tongue:');
    } else if (str.includes(":-p")) {
        str = str.replace(":-p", ':stuck_out_tongue:');
    } else if (str.includes("=p")) {
        str = str.replace("=p", ':stuck_out_tongue:');
    } else if (str.includes(":-Þ")) {
        str = str.replace(":-Þ", ':stuck_out_tongue:');
    } else if (str.includes(":Þ")) {
        str = str.replace(":Þ", ':stuck_out_tongue:');
    } else if (str.includes(":þ")) {
        str = str.replace(":þ", ':stuck_out_tongue:');
    } else if (str.includes(":-þ")) {
        str = str.replace(":-þ", ':stuck_out_tongue:');
    } else if (str.includes(":-b")) {
        str = str.replace(":-b", ':stuck_out_tongue:');
    } else if (str.includes(":-O")) {
        str = str.replace(":-O", ':open_mouth:');
    } else if (str.includes(":O")) {
        str = str.replace(":O", ':open_mouth:');
    } else if (str.includes(":-o")) {
        str = str.replace(":-o", ':open_mouth:');
    } else if (str.includes("O_O")) {
        str = str.replace("O_O", ':open_mouth:');
    } else if (str.includes(">:O")) {
        str = str.replace(">:O", ':open_mouth:');
    } else if (str.includes(":-X")) {
        str = str.replace(":-X", ':no_mouth:');
    } else if (str.includes(":X")) {
        str = str.replace(":X", ':no_mouth:');
    } else if (str.includes(":-#")) {
        str = str.replace(":-#", ':no_mouth:');
    } else if (str.includes(":#")) {
        str = str.replace(":#", ':no_mouth:');
    } else if (str.includes("=X")) {
        str = str.replace("=X", ':no_mouth:');
    } else if (str.includes("=x")) {
        str = str.replace("=x", ':no_mouth:');
    } else if (str.includes(":-x")) {
        str = str.replace(":-x", ':no_mouth:');
    } else if (str.includes(":-#")) {
        str = str.replace(":-#", ':no_mouth:');
    }

    return str;
}

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @return {string}
 */
Emoji.prototype.emojify = function emojify(str) {
  var emoji = this;
  str = ReplaceEmoticon(str);
  return str.split(Emoji.parser) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              return (i % 2 === 0) ? s : emoji._get(s); // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
            })
            .join('') // convert back to string
  ;
};
