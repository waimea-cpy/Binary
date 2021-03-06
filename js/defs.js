const colourInfo = {
    8:  { name: 'RGB',  code: { base: '2',  digits: 8  }, bits: { red: 3, green: 3, blue: 2, alpha: null } },
    16: { name: 'RGB',  code: { base: '2',  digits: 16 }, bits: { red: 5, green: 6, blue: 5, alpha: null } },
    24: { name: 'RGB',  code: { base: '16', digits: 6  }, bits: { red: 8, green: 8, blue: 8, alpha: null } },
    32: { name: 'RGBA', code: { base: '16', digits: 8  }, bits: { red: 8, green: 8, blue: 8, alpha: 8    } }
};

const assemblyInfo = {
    16: { name: 'x86-16', disasmMode: 0 },
    32: { name: 'x86-32', disasmMode: 1 },
    64: { name: 'x86-64', disasmMode: 2 }
};

const controlChars = {
    00:  { abbr: 'NUL', desc: 'null character' },
    01:  { abbr: 'SOH', desc: 'start of header' },
    02:  { abbr: 'STX', desc: 'start of text' },
    03:  { abbr: 'ETX', desc: 'end of text' },
    04:  { abbr: 'EOT', desc: 'end of transmission' },
    05:  { abbr: 'ENQ', desc: 'enquiry' },
    06:  { abbr: 'ACK', desc: 'acknowledge' },
    07:  { abbr: 'BEL', desc: 'bell' },
    08:  { abbr: 'BS',  desc: 'backspace' },
    09:  { abbr: 'HT',  desc: 'horizontal tab' },
    10:  { abbr: 'LF',  desc: 'line feed' },
    11:  { abbr: 'VT',  desc: 'vertical tab' },
    12:  { abbr: 'FF',  desc: 'form feed' },
    13:  { abbr: 'CR',  desc: 'carriage return' },
    14:  { abbr: 'SO',  desc: 'shift out' },
    15:  { abbr: 'SI',  desc: 'shift in' },
    16:  { abbr: 'DLE', desc: 'data link escape' },
    17:  { abbr: 'DC1', desc: 'device control 1' },
    18:  { abbr: 'DC2', desc: 'device control 2' },
    19:  { abbr: 'DC3', desc: 'device control 3' },
    20:  { abbr: 'DC4', desc: 'device control 4' },
    21:  { abbr: 'NAK', desc: 'negative acknowledge' },
    22:  { abbr: 'SYN', desc: 'synchronize' },
    23:  { abbr: 'ETB', desc: 'end transmission block' },
    24:  { abbr: 'CAN', desc: 'cancel' },
    25:  { abbr: 'EM',  desc: 'end of medium' },
    26:  { abbr: 'SUB', desc: 'substitute' },
    27:  { abbr: 'ESC', desc: 'escape' },
    28:  { abbr: 'FS',  desc: 'file separator' },
    29:  { abbr: 'GS',  desc: 'group separator' },
    30:  { abbr: 'RS',  desc: 'record separator' },
    31:  { abbr: 'US',  desc: 'unit separator' },  	 
    32:  { abbr: ' ',   desc: 'space' },
    127: { abbr: 'DEL', desc: 'delete' },

    128: { abbr: 'PAD', desc: 'padding character' },
    129: { abbr: 'HOP', desc: 'high octet preset' },
    130: { abbr: 'BPH', desc: 'break permitted here' },
    131: { abbr: 'NBH', desc: 'no break here' },
    132: { abbr: 'IND', desc: 'index' },
    133: { abbr: 'NEL', desc: 'next line' },
    134: { abbr: 'SSA', desc: 'start of selection' },
    135: { abbr: 'ESA', desc: 'end of selection' },
    136: { abbr: 'HTS', desc: 'char tab set' },
    137: { abbr: 'HTJ', desc: 'char tab justified' },
    138: { abbr: 'VTS', desc: 'line tab set' },
    139: { abbr: 'PLD', desc: 'partial line forward' },
    140: { abbr: 'PLU', desc: 'partial line backward' },
    141: { abbr: 'RI',  desc: 'reverse line feed' },
    142: { abbr: 'SS2', desc: 'single-shift two' },
    143: { abbr: 'SS3', desc: 'single-shift three' },
    144: { abbr: 'DCS', desc: 'device control string' },
    145: { abbr: 'PU1', desc: 'private use one' },
    146: { abbr: 'PU2', desc: 'private use two' },
    147: { abbr: 'STS', desc: 'set transmit state' },
    148: { abbr: 'CCH', desc: 'cancel character' },
    149: { abbr: 'MW',  desc: 'message waiting' },
    150: { abbr: 'SPA', desc: 'start of guarded area' },
    151: { abbr: 'EPA', desc: 'end of guarded area' },
    152: { abbr: 'SOS', desc: 'start of string' },
    153: { abbr: 'SGCI', desc: 'single graphic char intro' },
    154: { abbr: 'SCI', desc: 'single char intro' },
    155: { abbr: 'CSI', desc: 'control seqe intro' },
    156: { abbr: 'ST',  desc: 'string terminator' },
    157: { abbr: 'OSC', desc: 'o/s command' },
    158: { abbr: 'PM',  desc: 'private message' },
    159: { abbr: 'APC', desc: 'app program command' },

    160: { abbr: '', desc: 'non-breaking space' },
    173: { abbr: '', desc: 'soft hyphen' }
};

const unicode = [
    { min: 0, max: 31, name: 'ASCII Control' },
    { min: 0, max: 127, name: 'ASCII (Latin Basic)' },
    { min: 128, max: 159, name: 'UniCode Control' },
    { min: 160, max: 255, name: 'Latin Sup' },
    { min: 256, max: 383, name: 'Latin Ext-A' },
    { min: 384, max: 591, name: 'Latin Ext-B' },
    { min: 592, max: 687, name: 'IPA Exts' },
    { min: 688, max: 767, name: 'Spacing Modifier Letters' },
    { min: 768, max: 879, name: 'Combining Diacritical Marks' },
    { min: 880, max: 1023, name: 'Greek and Coptic' },
    { min: 1024, max: 1279, name: 'Cyrillic' },
    { min: 1280, max: 1327, name: 'Cyrillic Sup' },
    { min: 1328, max: 1423, name: 'Armenian' },
    { min: 1424, max: 1535, name: 'Hebrew' },
    { min: 1536, max: 1791, name: 'Arabic' },
    { min: 1792, max: 1871, name: 'Syriac' },
    { min: 1872, max: 1919, name: 'Arabic Sup' },
    { min: 1920, max: 1983, name: 'Thaana' },
    { min: 1984, max: 2047, name: 'NKo' },
    { min: 2048, max: 2111, name: 'Samaritan' },
    { min: 2112, max: 2143, name: 'Mandaic' },
    { min: 2144, max: 2159, name: 'Syriac Sup' },
    { min: 2208, max: 2303, name: 'Arabic Ext-A' },
    { min: 2304, max: 2431, name: 'Devanagari' },
    { min: 2432, max: 2559, name: 'Bengali' },
    { min: 2560, max: 2687, name: 'Gurmukhi' },
    { min: 2688, max: 2815, name: 'Gujarati' },
    { min: 2816, max: 2943, name: 'Oriya' },
    { min: 2944, max: 3071, name: 'Tamil' },
    { min: 3072, max: 3199, name: 'Telugu' },
    { min: 3200, max: 3327, name: 'Kannada' },
    { min: 3328, max: 3455, name: 'Malayalam' },
    { min: 3456, max: 3583, name: 'Sinhala' },
    { min: 3584, max: 3711, name: 'Thai' },
    { min: 3712, max: 3839, name: 'Lao' },
    { min: 3840, max: 4095, name: 'Tibetan' },
    { min: 4096, max: 4255, name: 'Myanmar' },
    { min: 4256, max: 4351, name: 'Georgian' },
    { min: 4352, max: 4607, name: 'Hangul Jamo' },
    { min: 4608, max: 4991, name: 'Ethiopic' },
    { min: 4992, max: 5023, name: 'Ethiopic Sup' },
    { min: 5024, max: 5119, name: 'Cherokee' },
    { min: 5120, max: 5759, name: 'Unified Canadian Aboriginal Syllabics' },
    { min: 5760, max: 5791, name: 'Ogham' },
    { min: 5792, max: 5887, name: 'Runic' },
    { min: 5888, max: 5919, name: 'Tagalog' },
    { min: 5920, max: 5951, name: 'Hanunoo' },
    { min: 5952, max: 5983, name: 'Buhid' },
    { min: 5984, max: 6015, name: 'Tagbanwa' },
    { min: 6016, max: 6143, name: 'Khmer' },
    { min: 6144, max: 6319, name: 'Mongolian' },
    { min: 6320, max: 6399, name: 'Unified Canadian Aboriginal Syllabics Ext' },
    { min: 6400, max: 6479, name: 'Limbu' },
    { min: 6480, max: 6527, name: 'Tai Le' },
    { min: 6528, max: 6623, name: 'New Tai Lue' },
    { min: 6624, max: 6655, name: 'Khmer Symbols' },
    { min: 6656, max: 6687, name: 'Buginese' },
    { min: 6688, max: 6831, name: 'Tai Tham' },
    { min: 6832, max: 6911, name: 'Combining Diacritical Marks Ext' },
    { min: 6912, max: 7039, name: 'Balinese' },
    { min: 7040, max: 7103, name: 'Sundanese' },
    { min: 7104, max: 7167, name: 'Batak' },
    { min: 7168, max: 7247, name: 'Lepcha' },
    { min: 7248, max: 7295, name: 'Ol Chiki' },
    { min: 7296, max: 7311, name: 'Cyrillic Ext-C' },
    { min: 7360, max: 7375, name: 'Sundanese Sup' },
    { min: 7376, max: 7423, name: 'Vedic Exts' },
    { min: 7424, max: 7551, name: 'Phonetic Exts' },
    { min: 7552, max: 7615, name: 'Phonetic Exts Sup' },
    { min: 7616, max: 7679, name: 'Combining Diacritical Marks Sup' },
    { min: 7680, max: 7935, name: 'Latin Ext Additional' },
    { min: 7936, max: 8191, name: 'Greek Ext' },
    { min: 8192, max: 8303, name: 'General Punc' },
    { min: 8304, max: 8351, name: 'Superscripts and Subscripts' },
    { min: 8352, max: 8399, name: 'Currency Symbols' },
    { min: 8400, max: 8447, name: 'Combining Diacritical Marks for Symbols' },
    { min: 8448, max: 8527, name: 'Letterlike Symbols' },
    { min: 8528, max: 8591, name: 'Num Forms' },
    { min: 8592, max: 8703, name: 'Arrows' },
    { min: 8704, max: 8959, name: 'Maths Operators' },
    { min: 8960, max: 9215, name: 'Misc Technical' },
    { min: 9216, max: 9279, name: 'Control Pictures' },
    { min: 9280, max: 9311, name: 'Optical Char Recognition' },
    { min: 9312, max: 9471, name: 'Enclosed AlphaNums' },
    { min: 9472, max: 9599, name: 'Box Drawing' },
    { min: 9600, max: 9631, name: 'Block Elements' },
    { min: 9632, max: 9727, name: 'Geometric Shapes' },
    { min: 9728, max: 9983, name: 'Misc Symbols' },
    { min: 9984, max: 10175, name: 'Dingbats' },
    { min: 10176, max: 10223, name: 'Misc Maths Symbols-A' },
    { min: 10224, max: 10239, name: 'Sup Arrows-A' },
    { min: 10240, max: 10495, name: 'Braille Patterns' },
    { min: 10496, max: 10623, name: 'Sup Arrows-B' },
    { min: 10624, max: 10751, name: 'Misc Maths Symbols-B' },
    { min: 10752, max: 11007, name: 'Sup Maths Operators' },
    { min: 11008, max: 11263, name: 'Misc Symbols and Arrows' },
    { min: 11264, max: 11359, name: 'Glagolitic' },
    { min: 11360, max: 11391, name: 'Latin Ext-C' },
    { min: 11392, max: 11519, name: 'Coptic' },
    { min: 11520, max: 11567, name: 'Georgian Sup' },
    { min: 11568, max: 11647, name: 'Tifinagh' },
    { min: 11648, max: 11743, name: 'Ethiopic Ext' },
    { min: 11744, max: 11775, name: 'Cyrillic Ext-A' },
    { min: 11776, max: 11903, name: 'Sup Punc' },
    { min: 11904, max: 12031, name: 'CJK Radicals Sup' },
    { min: 12032, max: 12255, name: 'Kangxi Radicals' },
    { min: 12272, max: 12287, name: 'Ideographic Desc Chars' },
    { min: 12288, max: 12351, name: 'CJK Symbols and Punc' },
    { min: 12352, max: 12447, name: 'Hiragana' },
    { min: 12448, max: 12543, name: 'Katakana' },
    { min: 12544, max: 12591, name: 'Bopomofo' },
    { min: 12592, max: 12687, name: 'Hangul Compat Jamo' },
    { min: 12688, max: 12703, name: 'Kanbun' },
    { min: 12704, max: 12735, name: 'Bopomofo Ext' },
    { min: 12736, max: 12783, name: 'CJK Strokes' },
    { min: 12784, max: 12799, name: 'Katakana Phonetic Exts' },
    { min: 12800, max: 13055, name: 'Enclosed CJK Letters and Months' },
    { min: 13056, max: 13311, name: 'CJK Compat' },
    { min: 13312, max: 19903, name: 'CJK Unified Ideographs Ext A' },
    { min: 19904, max: 19967, name: 'Yijing Hexagram Symbols' },
    { min: 19968, max: 40959, name: 'CJK Unified Ideographs' },
    { min: 40960, max: 42127, name: 'Yi Syllables' },
    { min: 42128, max: 42191, name: 'Yi Radicals' },
    { min: 42192, max: 42239, name: 'Lisu' },
    { min: 42240, max: 42559, name: 'Vai' },
    { min: 42560, max: 42655, name: 'Cyrillic Ext-B' },
    { min: 42656, max: 42751, name: 'Bamum' },
    { min: 42752, max: 42783, name: 'Modifier Tone Letters' },
    { min: 42784, max: 43007, name: 'Latin Ext-D' },
    { min: 43008, max: 43055, name: 'Syloti Nagri' },
    { min: 43056, max: 43071, name: 'Common Indic Num Forms' },
    { min: 43072, max: 43135, name: 'Phags-pa' },
    { min: 43136, max: 43231, name: 'Saurashtra' },
    { min: 43232, max: 43263, name: 'Devanagari Ext' },
    { min: 43264, max: 43311, name: 'Kayah Li' },
    { min: 43312, max: 43359, name: 'Rejang' },
    { min: 43360, max: 43391, name: 'Hangul Jamo Ext-A' },
    { min: 43392, max: 43487, name: 'Javanese' },
    { min: 43488, max: 43519, name: 'Myanmar Ext-B' },
    { min: 43520, max: 43615, name: 'Cham' },
    { min: 43616, max: 43647, name: 'Myanmar Ext-A' },
    { min: 43648, max: 43743, name: 'Tai Viet' },
    { min: 43744, max: 43775, name: 'Meetei Mayek Exts' },
    { min: 43776, max: 43823, name: 'Ethiopic Ext-A' },
    { min: 43824, max: 43887, name: 'Latin Ext-E' },
    { min: 43888, max: 43967, name: 'Cherokee Sup' },
    { min: 43968, max: 44031, name: 'Meetei Mayek' },
    { min: 44032, max: 55215, name: 'Hangul Syllables' },
    { min: 55216, max: 55295, name: 'Hangul Jamo Ext-B' },
    { min: 55296, max: 56191, name: 'High Surrogates' },
    { min: 56192, max: 56319, name: 'High Private Use Surrogates' },
    { min: 56320, max: 57343, name: 'Low Surrogates' },
    { min: 57344, max: 63743, name: 'Private Use Area' },
    { min: 63744, max: 64255, name: 'CJK Compat Ideographs' },
    { min: 64256, max: 64335, name: 'Alpha Pres Forms' },
    { min: 64336, max: 65023, name: 'Arabic Pres Forms-A' },
    { min: 65024, max: 65039, name: 'Variation Selectors' },
    { min: 65040, max: 65055, name: 'Vertical Forms' },
    { min: 65056, max: 65071, name: 'Combining Half Marks' },
    { min: 65072, max: 65103, name: 'CJK Compat Forms' },
    { min: 65104, max: 65135, name: 'Small Form Variants' },
    { min: 65136, max: 65279, name: 'Arabic Pres Forms-B' },
    { min: 65280, max: 65519, name: 'Halfwidth and Fullwidth Forms' },
    { min: 65520, max: 65535, name: 'Specials' },
    { min: 65536, max: 65663, name: 'Linear B Syllabary' },
    { min: 65664, max: 65791, name: 'Linear B Ideograms' },
    { min: 65792, max: 65855, name: 'Aegean Nums' },
    { min: 65856, max: 65935, name: 'Ancient Greek Nums' },
    { min: 65936, max: 65999, name: 'Ancient Symbols' },
    { min: 66000, max: 66047, name: 'Phaistos Disc' },
    { min: 66176, max: 66207, name: 'Lycian' },
    { min: 66208, max: 66271, name: 'Carian' },
    { min: 66272, max: 66303, name: 'Coptic Epact Nums' },
    { min: 66304, max: 66351, name: 'Old Italic' },
    { min: 66352, max: 66383, name: 'Gothic' },
    { min: 66384, max: 66431, name: 'Old Permic' },
    { min: 66432, max: 66463, name: 'Ugaritic' },
    { min: 66464, max: 66527, name: 'Old Persian' },
    { min: 66560, max: 66639, name: 'Deseret' },
    { min: 66640, max: 66687, name: 'Shavian' },
    { min: 66688, max: 66735, name: 'Osmanya' },
    { min: 66736, max: 66815, name: 'Osage' },
    { min: 66816, max: 66863, name: 'Elbasan' },
    { min: 66864, max: 66927, name: 'Caucasian Albanian' },
    { min: 67072, max: 67455, name: 'Linear A' },
    { min: 67584, max: 67647, name: 'Cypriot Syllabary' },
    { min: 67648, max: 67679, name: 'Imperial Aramaic' },
    { min: 67680, max: 67711, name: 'Palmyrene' },
    { min: 67712, max: 67759, name: 'Nabataean' },
    { min: 67808, max: 67839, name: 'Hatran' },
    { min: 67840, max: 67871, name: 'Phoenician' },
    { min: 67872, max: 67903, name: 'Lydian' },
    { min: 67968, max: 67999, name: 'Meroitic Hieroglyphs' },
    { min: 68000, max: 68095, name: 'Meroitic Cursive' },
    { min: 68096, max: 68191, name: 'Kharoshthi' },
    { min: 68192, max: 68223, name: 'Old South Arabian' },
    { min: 68224, max: 68255, name: 'Old North Arabian' },
    { min: 68288, max: 68351, name: 'Manichaean' },
    { min: 68352, max: 68415, name: 'Avestan' },
    { min: 68416, max: 68447, name: 'Inscriptional Parthian' },
    { min: 68448, max: 68479, name: 'Inscriptional Pahlavi' },
    { min: 68480, max: 68527, name: 'Psalter Pahlavi' },
    { min: 68608, max: 68687, name: 'Old Turkic' },
    { min: 68736, max: 68863, name: 'Old Hungarian' },
    { min: 69216, max: 69247, name: 'Rumi Num Symbols' },
    { min: 69632, max: 69759, name: 'Brahmi' },
    { min: 69760, max: 69839, name: 'Kaithi' },
    { min: 69840, max: 69887, name: 'Sora Sompeng' },
    { min: 69888, max: 69967, name: 'Chakma' },
    { min: 69968, max: 70015, name: 'Mahajani' },
    { min: 70016, max: 70111, name: 'Sharada' },
    { min: 70112, max: 70143, name: 'Sinhala Archaic Nums' },
    { min: 70144, max: 70223, name: 'Khojki' },
    { min: 70272, max: 70319, name: 'Multani' },
    { min: 70320, max: 70399, name: 'Khudawadi' },
    { min: 70400, max: 70527, name: 'Grantha' },
    { min: 70656, max: 70783, name: 'Newa' },
    { min: 70784, max: 70879, name: 'Tirhuta' },
    { min: 71040, max: 71167, name: 'Siddham' },
    { min: 71168, max: 71263, name: 'Modi' },
    { min: 71264, max: 71295, name: 'Mongolian Sup' },
    { min: 71296, max: 71375, name: 'Takri' },
    { min: 71424, max: 71487, name: 'Ahom' },
    { min: 71840, max: 71935, name: 'Warang Citi' },
    { min: 72192, max: 72271, name: 'Zanabazar Square' },
    { min: 72272, max: 72367, name: 'Soyombo' },
    { min: 72384, max: 72447, name: 'Pau Cin Hau' },
    { min: 72704, max: 72815, name: 'Bhaiksuki' },
    { min: 72816, max: 72895, name: 'Marchen' },
    { min: 72960, max: 73055, name: 'Masaram Gondi' },
    { min: 73728, max: 74751, name: 'Cuneiform' },
    { min: 74752, max: 74879, name: 'Cuneiform Nums and Punc' },
    { min: 74880, max: 75087, name: 'Early Dynastic Cuneiform' },
    { min: 77824, max: 78895, name: 'Egyptian Hieroglyphs' },
    { min: 82944, max: 83583, name: 'Anatolian Hieroglyphs' },
    { min: 92160, max: 92735, name: 'Bamum Sup' },
    { min: 92736, max: 92783, name: 'Mro' },
    { min: 92880, max: 92927, name: 'Bassa Vah' },
    { min: 92928, max: 93071, name: 'Pahawh Hmong' },
    { min: 93952, max: 94111, name: 'Miao' },
    { min: 94176, max: 94207, name: 'Ideographic Symbols and Punc' },
    { min: 94208, max: 100351, name: 'Tangut' },
    { min: 100352, max: 101119, name: 'Tangut Components' },
    { min: 110592, max: 110847, name: 'Kana Sup' },
    { min: 110848, max: 110895, name: 'Kana Ext-A' },
    { min: 110960, max: 111359, name: 'Nushu' },
    { min: 113664, max: 113823, name: 'Duployan' },
    { min: 113824, max: 113839, name: 'Shorthand Format Controls' },
    { min: 118784, max: 119039, name: 'Byzantine Musical Symbols' },
    { min: 119040, max: 119295, name: 'Musical Symbols' },
    { min: 119296, max: 119375, name: 'Ancient Greek Musical Notation' },
    { min: 119552, max: 119647, name: 'Tai Xuan Jing Symbols' },
    { min: 119648, max: 119679, name: 'Counting Rod Nums' },
    { min: 119808, max: 120831, name: 'Maths AlphaNum Symbols' },
    { min: 120832, max: 121519, name: 'Sutton SignWriting' },
    { min: 122880, max: 122927, name: 'Glagolitic Sup' },
    { min: 124928, max: 125151, name: 'Mende Kikakui' },
    { min: 125184, max: 125279, name: 'Adlam' },
    { min: 126464, max: 126719, name: 'Arabic Maths Alpha Symbols' },
    { min: 126976, max: 127023, name: 'Mahjong Tiles' },
    { min: 127024, max: 127135, name: 'Domino Tiles' },
    { min: 127136, max: 127231, name: 'Playing Cards' },
    { min: 127232, max: 127487, name: 'Enclosed AlphaNum Sup' },
    { min: 127488, max: 127743, name: 'Enclosed Ideographic Sup' },
    { min: 127744, max: 128511, name: 'Misc Symbols and Pictographs' },
    { min: 128512, max: 128591, name: 'Emoticons' },
    { min: 128592, max: 128639, name: 'Ornamental Dingbats' },
    { min: 128640, max: 128767, name: 'Transport and Map Symbols' },
    { min: 128768, max: 128895, name: 'Alchemical Symbols' },
    { min: 128896, max: 129023, name: 'Geometric Shapes Ext' },
    { min: 129024, max: 129279, name: 'Sup Arrows-C' },
    { min: 129280, max: 129535, name: 'Sup Symbols and Pictographs' },
    { min: 131072, max: 173791, name: 'CJK Unified Ideographs Ext B' },
    { min: 173824, max: 177983, name: 'CJK Unified Ideographs Ext C' },
    { min: 177984, max: 178207, name: 'CJK Unified Ideographs Ext D' },
    { min: 178208, max: 183983, name: 'CJK Unified Ideographs Ext E' },
    { min: 183984, max: 191471, name: 'CJK Unified Ideographs Ext F' },
    { min: 194560, max: 195103, name: 'CJK Compat Ideographs Sup' },
    { min: 917504, max: 917631, name: 'Tags' },
    { min: 917760, max: 917999, name: 'Variation Selectors Sup' },
    { min: 983040, max: 1048575, name: 'Supary Private Use Area-A' },
    { min: 1048576, max: 1114111, name: 'Supary Private Use Area-B' },
];
