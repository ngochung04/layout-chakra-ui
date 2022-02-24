import {
  Box,
  Collapse,
  Container,
  Link,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { VscCircleFilled } from "react-icons/vsc";
const MoreDetails = () => {
  const languages = [
    { name: "Afrikaans", key: "af" },
    { name: "Albanian", key: "sq" },
    { name: "Amharic", key: "am" },
    { name: "Arabic", key: "ar" },
    { name: "Armenian", key: "hy" },
    { name: "Azerbaijani", key: "az" },
    { name: "Basque", key: "eu" },
    { name: "Belarusian", key: "be" },
    { name: "Bengali", key: "bn" },
    { name: "Bosnian", key: "bs" },
    { name: "Bulgarian", key: "bg" },
    { name: "Catalan", key: "ca" },
    { name: "Cebuano", key: "ceb (ISO-639-2)" },
    { name: "Chinese (Simplified)", key: "zh-CN (BCP-47)" },
    { name: "Chinese (Traditional)", key: "zh-TW (BCP-47)" },
    { name: "Corsican", key: "co" },
    { name: "Croatian", key: "hr" },
    { name: "Czech", key: "cs" },
    { name: "Danish", key: "da" },
    { name: "Dutch", key: "nl" },
    { name: "English", key: "en" },
    { name: "Esperanto", key: "eo" },
    { name: "Estonian", key: "et" },
    { name: "Finnish", key: "fi" },
    { name: "French", key: "fr" },
    { name: "Frisian", key: "fy" },
    { name: "Galician", key: "gl" },
    { name: "Georgian", key: "ka" },
    { name: "German", key: "de" },
    { name: "Greek", key: "el" },
    { name: "Gujarati", key: "gu" },
    { name: "Haitian Creole ", key: "ht" },
    { name: "Hausa", key: "ha" },
    { name: "Hawaiian", key: "haw (ISO-639-2)" },
    { name: "Hebrew", key: "he**" },
    { name: "Hindi", key: "hi" },
    { name: "Hmong", key: "hmn (ISO-639-2)" },
    { name: "Hungarian", key: "hu" },
    { name: "Icelandic", key: "is" },
    { name: "Igbo", key: "ig" },
    { name: "Indonesian", key: "id" },
    { name: "Irish", key: "ga" },
    { name: "Italian", key: "it" },
    { name: "Japanese", key: "ja" },
    { name: "Javanese", key: "jw" },
    { name: "Kannada", key: "kn" },
    { name: "Kazakh", key: "kk" },
    { name: "Khmer", key: "km" },
    { name: "Korean", key: "ko" },
    { name: "Kurdish", key: "ku" },
    { name: "Kyrgyz", key: "ky" },
    { name: "Lao", key: "lo" },
    { name: "Latin", key: "la" },
    { name: "Latvian", key: "lv" },
    { name: "Lithuanian", key: "lt" },
    { name: "Luxembourgish", key: "lb" },
    { name: "Macedonian", key: "mk" },
    { name: "Malagasy", key: "mg" },
    { name: "Malay", key: "ms" },
    { name: "Malayalam", key: "ml" },
    { name: "Maltese", key: "mt" },
    { name: "Maori", key: "mi" },
    { name: "Marathi", key: "mr" },
    { name: "Mongolian", key: "mn" },
    { name: "Myanmar (Burmese)", key: " my" },
    { name: "Nepali", key: "ne" },
    { name: "Norwegian", key: "no" },
    { name: "Nyanja (Chichewa)", key: "ny" },
    { name: "Pashto", key: "ps" },
    { name: "Persian", key: "fa" },
    { name: "Polish", key: "pl" },
    { name: "Portuguese (Portugal, Brazil)", key: "pt" },
    { name: "Punjabi", key: "pa" },
    { name: "Romanian", key: "ro" },
    { name: "Russian", key: "ru" },
    { name: "Samoan", key: "sm" },
    { name: "Scots Gaelic", key: "gd" },
    { name: "Serbian", key: "sr" },
    { name: "Sesotho", key: "st" },
    { name: "Shona", key: "sn" },
    { name: "Sindhi", key: "sd" },
    { name: "Sinhala (Sinhalese) ", key: "si" },
    { name: "Slovak", key: "sk" },
    { name: "Slovenian", key: "sl" },
    { name: "Somali", key: "so" },
    { name: "Spanish", key: "es" },
    { name: "Sundanese", key: "su" },
    { name: "Swahili", key: "sw" },
    { name: "Swedish", key: "sv" },
    { name: "Tagalog (Filipino)", key: "tl" },
    { name: "Tajik", key: "tg" },
    { name: "Tamil", key: "ta" },
    { name: "Telugu", key: "te" },
    { name: "Thai", key: "th" },
    { name: "Turkish", key: "tr" },
    { name: "Ukrainian", key: "uk" },
    { name: "Urdu", key: "ur" },
    { name: "Uzbek", key: "uz" },
    { name: "Vietnamese", key: "vi" },
    { name: "Welsh", key: "cy" },
    { name: "Xhosa", key: "xh" },
    { name: "Yiddish", key: "yi" },
    { name: "Yoruba", key: "yo" },
    { name: "Zulu", key: "zu" },
  ];

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Text my="2rem">README</Text>
      <Text mb="1rem" fontSize="xl" fontWeight="bold" color="gray.600">
        Supported Language
      </Text>
      <Text>Language - ISO-639-1 Code</Text>
      <UnorderedList position="relative">
        <Collapse startingHeight="4.5rem" in={isOpen}>
          {languages.map((language, index) => (
            <ListItem key={index} my="0.5rem">
              <ListIcon as={VscCircleFilled} />
              <Text fontStyle="italic" display="inline">
                {language.name}
              </Text>
              <Text display="inline">{" " + language.key}</Text>
            </ListItem>
          ))}
          <Text display="inline" fontSize="sm">
            このAPIについてご質問がございますか?
          </Text>
          <Link ml="0.5rem" display="inline" fontSize="sm" color="blue.500">
            APIプロバイダに問合せる
          </Link>
        </Collapse>
        <Box
          display={isOpen ? "none" : "block"}
          position="absolute"
          w="7rem"
          bg="blackAlpha.100"
          h="100%"
          mt={-10}
          bgClip="content-box"
          bgGradient="linear(to-b ,#fffa 0%, #fff 100%)"
        />
      </UnorderedList>

      <Link onClick={onToggle} color="blue.500">
        {isOpen ? (
          <Text pt="1.5rem">表示を戻す...</Text>
        ) : (
          <Text pt="2rem">もっと見る...</Text>
        )}
      </Link>
    </Box>
  );
};
export default MoreDetails;
