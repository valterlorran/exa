module.exports = {
    "randomDigit":{
        "info":"Returns a random number between 0 and 9",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "integer"
        ],
        "call":"public static function randomDigit()"
    },
    "randomDigitNotNull":{
        "info":"Returns a random number between 1 and 9",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "integer"
        ],
        "call":"public static function randomDigitNotNull()"
    },
    "randomDigitNot":{
        "info":"Generates a random digit, which cannot be $except",
        "params":[
            {
                "types":[
                    "int"
                ],
                "text":""
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "int"
        ],
        "call":"public static function randomDigitNot($except)"
    },
    "randomNumber":{
        "info":"Returns a random integer with 0 to $nbDigits digits.\n The maximum value returned is mt_getrandmax()",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"Defaults to a random number between 1 and 9"
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"Whether the returned number should have exactly $nbDigits"
            }
        ],
        "examples":[
            "79907610"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "integer"
        ],
        "call":"public static function randomNumber($nbDigits = null, $strict = false)"
    },
    "randomFloat":{
        "info":"Return a random float number",
        "params":[
            {
                "types":[
                    "int"
                ],
                "text":""
            },
            {
                "types":[
                    "int",
                    "float"
                ],
                "text":""
            },
            {
                "types":[
                    "int",
                    "float"
                ],
                "text":""
            }
        ],
        "examples":[
            "48.8932"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "float"
        ],
        "call":"public static function randomFloat($nbMaxDecimals = null, $min = 0, $max = null)"
    },
    "numberBetween":{
        "info":"Returns a random number between $int1 and $int2 (any order)",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"default to 0"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"defaults to 32 bit max integer, ie 2147483647"
            }
        ],
        "examples":[
            "79907610"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "integer"
        ],
        "call":"public static function numberBetween($int1 = 0, $int2 = 2147483647)"
    },
    "randomLetter":{
        "info":"Returns a random letter from a to z",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function randomLetter()"
    },
    "randomAscii":{
        "info":"Returns a random ASCII character (excluding accents and special chars)",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function randomAscii()"
    },
    "randomElements":{
        "info":"Returns randomly ordered subsequence of $count elements from a provided array\n @throws \\LengthException When requesting more elements than provided",
        "params":[
            {
                "types":[
                    "array"
                ],
                "text":"Array to take elements from. Defaults to a-f"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"Number of elements to take."
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"Allow elements to be picked several times. Defaults to false"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array New array with $count elements from $array"
        ],
        "call":"public static function randomElements(array $array = array('a', 'b', 'c'), $count = 1, $allowDuplicates = false)"
    },
    "randomElement":{
        "info":"Returns a random element from a passed array",
        "params":[
            {
                "types":[
                    "array"
                ],
                "text":""
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "mixed"
        ],
        "call":"public static function randomElement($array = array('a', 'b', 'c'))"
    },
    "randomKey":{
        "info":"Returns a random key from a passed associative array",
        "params":[
            {
                "types":[
                    "array"
                ],
                "text":""
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "int|string|null"
        ],
        "call":"public static function randomKey($array = array())"
    },
    "shuffle":{
        "info":"Returns a shuffled version of the argument.\n This function accepts either an array, or a string.",
        "params":[
            {
                "types":[
                    "array",
                    "string"
                ],
                "text":"The set to shuffle"
            }
        ],
        "examples":[
            "$faker->shuffle([1, 2, 3]); // [2, 1, 3]",
            "$faker->shuffle('hello, world'); // 'rlo,h eold!lw'"
        ],
        "links":[

        ],
        "sees":[
            "shuffleArray()",
            "shuffleString()"
        ],
        "returns":[
            "array|string The shuffled set"
        ],
        "call":"public static function shuffle($arg = '')"
    },
    "shuffleArray":{
        "info":"Returns a shuffled version of the array.\n This function does not mutate the original array. It uses the\n Fisher–Yates algorithm, which is unbiased, together with a Mersenne\n twister random generator. This function is therefore more random than\n PHP's shuffle() function, and it is seedable.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "text":"The set to shuffle"
            }
        ],
        "examples":[
            "$faker->shuffleArray([1, 2, 3]); // [2, 1, 3]"
        ],
        "links":[
            "http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle"
        ],
        "sees":[

        ],
        "returns":[
            "array The shuffled set"
        ],
        "call":"public static function shuffleArray($array = array())"
    },
    "shuffleString":{
        "info":"Returns a shuffled version of the string.\n This function does not mutate the original string. It uses the\n Fisher–Yates algorithm, which is unbiased, together with a Mersenne\n twister random generator. This function is therefore more random than\n PHP's shuffle() function, and it is seedable. Additionally, it is\n UTF8 safe if the mb extension is available.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"The set to shuffle"
            },
            {
                "types":[
                    "string"
                ],
                "text":"The string encoding (defaults to UTF-8)"
            }
        ],
        "examples":[
            "$faker->shuffleString('hello, world'); // 'rlo,h eold!lw'"
        ],
        "links":[
            "http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle"
        ],
        "sees":[

        ],
        "returns":[
            "string The shuffled set"
        ],
        "call":"public static function shuffleString($string = '', $encoding = 'UTF-8')"
    },
    "numerify":{
        "info":"Replaces all hash sign ('#') occurrences with a random number\n Replaces all percentage sign ('%') occurrences with a not null number",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that needs to bet parsed"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function numerify($string = '###')"
    },
    "lexify":{
        "info":"Replaces all question mark ('?') occurrences with a random letter",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that needs to bet parsed"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function lexify($string = '????')"
    },
    "bothify":{
        "info":"Replaces hash signs ('#') and question marks ('?') with random numbers and letters\n An asterisk ('*') is replaced with either a random number or a random letter",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that needs to bet parsed"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function bothify($string = '## ??')"
    },
    "asciify":{
        "info":"Replaces signs with random numbers and letters and special characters",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that needs to bet parsed"
            }
        ],
        "examples":[
            "$faker->asciify(''********'); // \"s5'G!uC3\""
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function asciify($string = '****')"
    },
    "regexify":{
        "info":"Transforms a basic regular expression into a random string satisfying the expression.\n Regex delimiters '/.../' and begin/end markers '^...$' are ignored.\n Only supports a small subset of the regex syntax. For instance,\n unicode, negated classes, unbounded ranges, subpatterns, back references,\n assertions, recursive patterns, and comments are not supported. Escaping\n support is extremely fragile.\n This method is also VERY slow. Use it only when no other formatter\n can generate the fake data you want. For instance, prefer calling\n `$faker->email` rather than `regexify` with the previous regular\n expression.\n Also note than `bothify` can probably do most of what this method does,\n but much faster. For instance, for a dummy email generation, try\n `$faker->bothify('?????????@???.???')`.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"A regular expression (delimiters are optional)"
            }
        ],
        "examples":[
            "$faker->regexify('[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}'); // sm0@y8k96a.ej"
        ],
        "links":[

        ],
        "sees":[
            "https://github.com/icomefromthenet/ReverseRegex for a more robust implementation"
        ],
        "returns":[
            "string"
        ],
        "call":"public static function regexify($regex = '')"
    },
    "toLower":{
        "info":"Converts string to lowercase.\n Uses mb_string extension if available.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that should be converted to lowercase"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function toLower($string = '')"
    },
    "toUpper":{
        "info":"Converts string to uppercase.\n Uses mb_string extension if available.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"String that should be converted to uppercase"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function toUpper($string = '')"
    },
    "optional":{
        "info":"Chainable method for making any formatter optional.\n\"0\" will always return null, \"1\" will always return the generator.\nIf $weight is an integer value, then the same system works\nbetween 0 (always get false) and 100 (always get true).",
        "params":[
            {
                "types":[
                    "float",
                    "integer"
                ],
                "text":"Set the probability of receiving a null value."
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "mixed|null"
        ],
        "call":"public static function optional($weight = 0.5, $default = null)"
    },
    "unique":{
        "info":"Chainable method for making any formatter unique.\n <code>\n // will never return twice the same value\n $faker->unique()->randomElement(array(1, 2, 3));\n </code>\n After which an OverflowException is thrown.\n @throws \\OverflowException When no unique value can be found by iterating $maxRetries times",
        "params":[
            {
                "types":[
                    "boolean"
                ],
                "text":"If set to true, resets the list of existing values"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"Maximum number of retries to find a unique value,"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "UniqueGenerator A proxy class returning only non-existing values"
        ],
        "call":"public static function unique($reset = false, $maxRetries = 10000)"
    },
    "valid":{
        "info":"Chainable method for forcing any formatter to return only valid values.\n The value validity is determined by a function passed as first argument.\n <code>\n $values = array();\n $evenValidator = function ($digit) {\n \t return $digit % 2 === 0;\n };\n for ($i=0; $i < 10; $i++) {\n \t $values []= $faker->valid($evenValidator)->randomDigit;\n }\n print_r($values); // [0, 4, 8, 4, 2, 6, 0, 8, 8, 6]\n </code>\nAfter which an OverflowException is thrown.\n @throws \\OverflowException When no valid value can be found by iterating $maxRetries times",
        "params":[
            {
                "types":[
                    "Closure"
                ],
                "text":"A function returning true for valid values"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"Maximum number of retries to find a unique value,"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "ValidGenerator A proxy class returning only valid values"
        ],
        "call":"public static function valid($validator = null, $maxRetries = 10000)"
    },
    "word":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Lorem'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function word()"
    },
    "words":{
        "info":"Generate an array of random words",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"how many words to return"
            },
            {
                "types":[
                    "bool"
                ],
                "text":"if true the sentences are returned as one string"
            }
        ],
        "examples":[
            "array('Lorem', 'ipsum', 'dolor')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array|string"
        ],
        "call":"public static function words($nb = 3, $asText = false)"
    },
    "sentence":{
        "info":"Generate a random sentence\notherwise $nbWords may vary by +/-40% with a minimum of 1",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"around how many words the sentence should contain"
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"set to false if you want exactly $nbWords returned,"
            }
        ],
        "examples":[
            "'Lorem ipsum dolor sit amet.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function sentence($nbWords = 6, $variableNbWords = true)"
    },
    "sentences":{
        "info":"Generate an array of sentences",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"how many sentences to return"
            },
            {
                "types":[
                    "bool"
                ],
                "text":"if true the sentences are returned as one string"
            }
        ],
        "examples":[
            "array('Lorem ipsum dolor sit amet.', 'Consectetur adipisicing eli.')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array|string"
        ],
        "call":"public static function sentences($nb = 3, $asText = false)"
    },
    "paragraph":{
        "info":"Generate a single paragraph\notherwise $nbSentences may vary by +/-40% with a minimum of 1",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"around how many sentences the paragraph should contain"
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"set to false if you want exactly $nbSentences returned,"
            }
        ],
        "examples":[
            "'Sapiente sunt omnis. Ut pariatur ad autem ducimus et. Voluptas rem voluptas sint modi dolorem amet.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function paragraph($nbSentences = 3, $variableNbSentences = true)"
    },
    "paragraphs":{
        "info":"Generate an array of paragraphs",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"how many paragraphs to return"
            },
            {
                "types":[
                    "bool"
                ],
                "text":"if true the paragraphs are returned as one string, separated by two newlines"
            }
        ],
        "examples":[
            "array($paragraph1, $paragraph2, $paragraph3)"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array|string"
        ],
        "call":"public static function paragraphs($nb = 3, $asText = false)"
    },
    "text":{
        "info":"Generate a text string.\n Depending on the $maxNbChars, returns a string made of words, sentences, or paragraphs.",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"Maximum number of characters the text should contain (minimum 5)"
            }
        ],
        "examples":[
            "'Sapiente sunt omnis. Ut pariatur ad autem ducimus et. Voluptas rem voluptas sint modi dolorem amet.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function text($maxNbChars = 200)"
    },
    "citySuffix":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'town'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function citySuffix()"
    },
    "streetSuffix":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Avenue'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function streetSuffix()"
    },
    "buildingNumber":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'791'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function buildingNumber()"
    },
    "city":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Sashabury'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function city()"
    },
    "streetName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Crist Parks'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function streetName()"
    },
    "streetAddress":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'791 Crist Parks'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function streetAddress()"
    },
    "postcode":{
        "info":"",
        "params":[

        ],
        "examples":[
            "86039-9874"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function postcode()"
    },
    "address":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'791 Crist Parks, Sashabury, IL 86039-9874'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function address()"
    },
    "country":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Japan'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function country()"
    },
    "latitude":{
        "info":"",
        "params":[
            {
                "types":[
                    "float",
                    "int"
                ],
                "text":""
            },
            {
                "types":[
                    "float",
                    "int"
                ],
                "text":""
            }
        ],
        "examples":[
            "'77.147489'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "float Uses signed degrees format (returns a float number between -90 and 90)"
        ],
        "call":"public static function latitude($min = -90, $max = 90)"
    },
    "longitude":{
        "info":"",
        "params":[
            {
                "types":[
                    "float",
                    "int"
                ],
                "text":""
            },
            {
                "types":[
                    "float",
                    "int"
                ],
                "text":""
            }
        ],
        "examples":[
            "'86.211205'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "float Uses signed degrees format (returns a float number between -180 and 180)"
        ],
        "call":"public static function longitude($min = -180, $max = 180)"
    },
    "localCoordinates":{
        "info":"",
        "params":[

        ],
        "examples":[
            "array('77.147489', '86.211205')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array | latitude, longitude"
        ],
        "call":"public static function localCoordinates()"
    },
    "name":{
        "info":"",
        "params":[
            {
                "types":[
                    "string",
                    "null"
                ],
                "text":"'male', 'female' or null for any"
            }
        ],
        "examples":[
            "'John Doe'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function name($gender = null)"
    },
    "firstName":{
        "info":"",
        "params":[
            {
                "types":[
                    "string",
                    "null"
                ],
                "text":"'male', 'female' or null for any"
            }
        ],
        "examples":[
            "'John'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function firstName($gender = null)"
    },
    "lastName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Doe'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function lastName()"
    },
    "title":{
        "info":"",
        "params":[
            {
                "types":[
                    "string",
                    "null"
                ],
                "text":"'male', 'female' or null for any"
            }
        ],
        "examples":[
            "'Mrs.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function title($gender = null)"
    },
    "titleMale":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Mr.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function titleMale()"
    },
    "titleFemale":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Mrs.'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function titleFemale()"
    },
    "phoneNumber":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'555-123-546'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function phoneNumber()"
    },
    "e164PhoneNumber":{
        "info":"",
        "params":[

        ],
        "examples":[
            "+27113456789"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function e164PhoneNumber()"
    },
    "imei":{
        "info":"International Mobile Equipment Identity (IMEI)",
        "params":[

        ],
        "examples":[
            "'720084494799532'"
        ],
        "links":[
            "http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity",
            "http://imei-number.com/imei-validation-check/"
        ],
        "sees":[

        ],
        "returns":[
            "int $imei"
        ],
        "call":"public static function imei()"
    },
    "ean13":{
        "info":"Get a random EAN13 barcode.",
        "params":[

        ],
        "examples":[
            "'4006381333931'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function ean13()"
    },
    "ean8":{
        "info":"Get a random EAN8 barcode.",
        "params":[

        ],
        "examples":[
            "'73513537'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function ean8()"
    },
    "isbn10":{
        "info":"Get a random ISBN-10 code",
        "params":[

        ],
        "examples":[
            "'4881416324'"
        ],
        "links":[
            "http://en.wikipedia.org/wiki/International_Standard_Book_Number"
        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function isbn10()"
    },
    "isbn13":{
        "info":"Get a random ISBN-13 code",
        "params":[

        ],
        "examples":[
            "'9790404436093'"
        ],
        "links":[
            "http://en.wikipedia.org/wiki/International_Standard_Book_Number"
        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function isbn13()"
    },
    "biasedNumberBetween":{
        "info":"Returns a biased integer between $min and $max (both inclusive).\n The distribution depends on $function.\n The algorithm creates two doubles, x ∈ [0, 1], y ∈ [0, 1) and checks whether the\n return value of $function for x is greater than or equal to y. If this is\n the case the number is accepted and x is mapped to the appropriate integer\n between $min and $max. Otherwise two new doubles are created until the pair\n is accepted.",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"Minimum value of the generated integers."
            },
            {
                "types":[
                    "integer"
                ],
                "text":"Maximum value of the generated integers."
            },
            {
                "types":[
                    "callable"
                ],
                "text":"A function mapping x ∈ [0, 1] onto a double ∈ [0, 1]"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "integer An integer between $min and $max."
        ],
        "call":"public static function biasedNumberBetween($min = 0, $max = 100, $function = 'sqrt')"
    },
    "hexColor":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'#fa3cc2'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function hexColor()"
    },
    "safeHexColor":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'#ff0044'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function safeHexColor()"
    },
    "rgbColorAsArray":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'array(0,255,122)'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function rgbColorAsArray()"
    },
    "rgbColor":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'0,255,122'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function rgbColor()"
    },
    "rgbCssColor":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'rgb(0,255,122)'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function rgbCssColor()"
    },
    "rgbaCssColor":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'rgba(0,255,122,0.8)'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function rgbaCssColor()"
    },
    "safeColorName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'blue'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function safeColorName()"
    },
    "colorName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'NavajoWhite'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function colorName()"
    },
    "company":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Acme Ltd'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function company()"
    },
    "companySuffix":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Ltd'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function companySuffix()"
    },
    "jobTitle":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Job'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function jobTitle()"
    },
    "unixTime":{
        "info":"Get a timestamp between January 1, 1970 and now",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "1061306726"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "int"
        ],
        "call":"public static function unixTime($max = 'now')"
    },
    "dateTime":{
        "info":"Get a datetime object for a date between January 1, 1970 and now",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            },
            {
                "types":[
                    "string"
                ],
                "text":"time zone in which the date time should be set, default to result of `date_default_timezone_get`"
            }
        ],
        "examples":[
            "DateTime('2005-08-16 20:39:21')"
        ],
        "links":[

        ],
        "sees":[
            "http://php.net/manual/en/timezones.php",
            "http://php.net/manual/en/function.date-default-timezone-get.php"
        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTime($max = 'now', $timezone = null)"
    },
    "dateTimeAD":{
        "info":"Get a datetime object for a date between January 1, 001 and now",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            },
            {
                "types":[
                    "string"
                ],
                "text":"time zone in which the date time should be set, default to result of `date_default_timezone_get`"
            }
        ],
        "examples":[
            "DateTime('1265-03-22 21:15:52')"
        ],
        "links":[

        ],
        "sees":[
            "http://php.net/manual/en/timezones.php",
            "http://php.net/manual/en/function.date-default-timezone-get.php"
        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeAD($max = 'now', $timezone = null)"
    },
    "iso8601":{
        "info":"get a date string formatted with ISO8601",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'2003-10-21T16:05:52+0000'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function iso8601($max = 'now')"
    },
    "date":{
        "info":"Get a date string between January 1, 1970 and now",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":""
            },
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'2008-11-27'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function date($format = 'Y-m-d', $max = 'now')"
    },
    "time":{
        "info":"Get a time string (24h format by default)",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":""
            },
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'15:02:34'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function time($format = 'H:i:s', $max = 'now')"
    },
    "dateTimeBetween":{
        "info":"Get a DateTime object based on a random date between two given dates.\n Accepts date strings that can be recognized by strtotime().",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "string"
                ],
                "text":"Defaults to 30 years ago"
            },
            {
                "types":[
                    "\\DateTime",
                    "string"
                ],
                "text":"Defaults to \"now\""
            },
            {
                "types":[
                    "string"
                ],
                "text":"time zone in which the date time should be set, default to result of `date_default_timezone_get`"
            }
        ],
        "examples":[
            "DateTime('1999-02-02 11:42:52')"
        ],
        "links":[

        ],
        "sees":[
            "http://php.net/manual/en/timezones.php",
            "http://php.net/manual/en/function.date-default-timezone-get.php"
        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null)"
    },
    "dateTimeInInterval":{
        "info":"Get a DateTime object based on a random date between one given date and\n an interval\n Accepts date string that can be recognized by strtotime().",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"Defaults to 30 years ago"
            },
            {
                "types":[
                    "string"
                ],
                "text":"Defaults to 5 days after"
            },
            {
                "types":[
                    "string"
                ],
                "text":"time zone in which the date time should be set, default to result of `date_default_timezone_get`"
            }
        ],
        "examples":[
            "dateTimeInInterval('1999-02-02 11:42:52', '+ 5 days')"
        ],
        "links":[

        ],
        "sees":[
            "http://php.net/manual/en/timezones.php",
            "http://php.net/manual/en/function.date-default-timezone-get.php"
        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeInInterval($date = '-30 years', $interval = '+5 days', $timezone = null)"
    },
    "dateTimeThisCentury":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "DateTime('1964-04-04 11:02:02')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeThisCentury($max = 'now')"
    },
    "dateTimeThisDecade":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "DateTime('2010-03-10 05:18:58')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeThisDecade($max = 'now')"
    },
    "dateTimeThisYear":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "DateTime('2011-09-19 09:24:37')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeThisYear($max = 'now')"
    },
    "dateTimeThisMonth":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "DateTime('2011-10-05 12:51:46')"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function dateTimeThisMonth($max = 'now')"
    },
    "amPm":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'am'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function amPm($max = 'now')"
    },
    "dayOfMonth":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'22'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function dayOfMonth($max = 'now')"
    },
    "dayOfWeek":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'Tuesday'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function dayOfWeek($max = 'now')"
    },
    "month":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'7'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function month($max = 'now')"
    },
    "monthName":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "'September'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function monthName($max = 'now')"
    },
    "year":{
        "info":"",
        "params":[
            {
                "types":[
                    "\\DateTime",
                    "int",
                    "string"
                ],
                "text":"maximum timestamp used as random end limit, default to \"now\""
            }
        ],
        "examples":[
            "1673"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "int"
        ],
        "call":"public static function year($max = 'now')"
    },
    "century":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'XVII'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function century()"
    },
    "timezone":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'Europe/Paris'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function timezone()"
    },
    "mimeType":{
        "info":"Get a random MIME type",
        "params":[

        ],
        "examples":[
            "'video/avi'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function mimeType()"
    },
    "fileExtension":{
        "info":"Get a random file extension (without a dot)",
        "params":[

        ],
        "examples":[
            "avi"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function fileExtension()"
    },
    "file":{
        "info":"Copy a random file from the source directory to the target directory and returns the filename/fullpath",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"The directory to look for random file taking"
            },
            {
                "types":[
                    "string"
                ],
                "text":""
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"Whether to have the full path or just the filename"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function file($sourceDirectory = '/tmp', $targetDirectory = '/tmp', $fullPath = true)"
    },
    "imageUrl":{
        "info":"Generate the URL that will return a random image\n Set randomize to false to remove the random GET parameter at the end of the url.",
        "params":[

        ],
        "examples":[
            "'http://lorempixel.com/640/480/?12345'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function imageUrl($width = 640, $height = 480, $category = null, $randomize = true, $word = null, $gray = false)"
    },
    "image":{
        "info":"Download a remote random image to disk and return its location\n Requires curl, or allow_url_fopen to be on in php.ini.",
        "params":[

        ],
        "examples":[
            "'/path/to/dir/13b73edae8443990be1aa8f1a483bc27.jpg'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function image($dir = null, $width = 640, $height = 480, $category = null, $fullPath = true, $randomize = true, $word = null)"
    },
    "email":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'jdoe@acme.biz'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function email()"
    },
    "safeEmail":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'jdoe@example.com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function safeEmail()"
    },
    "freeEmail":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'jdoe@gmail.com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function freeEmail()"
    },
    "companyEmail":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'jdoe@dawson.com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function companyEmail()"
    },
    "freeEmailDomain":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'gmail.com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function freeEmailDomain()"
    },
    "safeEmailDomain":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'example.org'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function safeEmailDomain()"
    },
    "userName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'jdoe'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function userName()"
    },
    "password":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'fY4èHdZv68'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function password($minLength = 6, $maxLength = 20)"
    },
    "domainName":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'tiramisu.com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function domainName()"
    },
    "domainWord":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'faber'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function domainWord()"
    },
    "tld":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'com'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function tld()"
    },
    "url":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'http://www.runolfsdottir.com/'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function url()"
    },
    "slug":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'aut-repellat-commodi-vel-itaque-nihil-id-saepe-nostrum'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function slug($nbWords = 6, $variableNbWords = true)"
    },
    "ipv4":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'237.149.115.38'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function ipv4()"
    },
    "ipv6":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'35cd:186d:3e23:2986:ef9f:5b41:42a4:e6f1'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function ipv6()"
    },
    "localIpv4":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'10.1.1.17'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function localIpv4()"
    },
    "macAddress":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'32:F1:39:2F:D6:18'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function macAddress()"
    },
    "boolean":{
        "info":"Return a boolean, true or false",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"Between 0 (always get false) and 100 (always get true)."
            }
        ],
        "examples":[
            "true"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "bool"
        ],
        "call":"public static function boolean($chanceOfGettingTrue = 50)"
    },
    "md5":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'cfcd208495d565ef66e7dff9f98764da'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function md5()"
    },
    "sha1":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'b5d86317c2a144cd04d0d7c03b2b02666fafadf2'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function sha1()"
    },
    "sha256":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'85086017559ccc40638fcde2fecaf295e0de7ca51b7517b6aebeaaf75b4d4654'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function sha256()"
    },
    "locale":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'fr_FR'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function locale()"
    },
    "countryCode":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'FR'"
        ],
        "links":[
            "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"
        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function countryCode()"
    },
    "countryISOAlpha3":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'FRA'"
        ],
        "links":[
            "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3"
        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function countryISOAlpha3()"
    },
    "languageCode":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'fr'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function languageCode()"
    },
    "currencyCode":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'EUR'"
        ],
        "links":[
            "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"
        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function currencyCode()"
    },
    "creditCardType":{
        "info":"",
        "params":[

        ],
        "examples":[
            "'MasterCard'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string Returns a credit card vendor name"
        ],
        "call":"public static function creditCardType()"
    },
    "creditCardNumber":{
        "info":"Returns the String of a credit card number.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"Supporting any of 'Visa', 'MasterCard', 'American Express', and 'Discover'"
            },
            {
                "types":[
                    "boolean"
                ],
                "text":"Set to true if the output string should contain one separator every 4 digits"
            },
            {
                "types":[
                    "string"
                ],
                "text":"Separator string for formatting card number. Defaults to dash (-)."
            }
        ],
        "examples":[
            "'4485480221084675'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function creditCardNumber($type = null, $formatted = false, $separator = '-')"
    },
    "creditCardExpirationDate":{
        "info":"",
        "params":[
            {
                "types":[
                    "boolean"
                ],
                "text":"True (by default) to get a valid expiration date, false to get a maybe valid date"
            }
        ],
        "examples":[
            "04/13"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "\\DateTime"
        ],
        "call":"public static function creditCardExpirationDate($valid = true)"
    },
    "creditCardExpirationDateString":{
        "info":"",
        "params":[
            {
                "types":[
                    "boolean"
                ],
                "text":"True (by default) to get a valid expiration date, false to get a maybe valid date"
            },
            {
                "types":[
                    "string"
                ],
                "text":""
            }
        ],
        "examples":[
            "'04/13'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function creditCardExpirationDateString($valid = true, $expirationDateFormat = null)"
    },
    "creditCardDetails":{
        "info":"",
        "params":[
            {
                "types":[
                    "boolean"
                ],
                "text":"True (by default) to get a valid expiration date, false to get a maybe valid date"
            }
        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "array"
        ],
        "call":"public static function creditCardDetails($valid = true)"
    },
    "iban":{
        "info":"International Bank Account Number (IBAN)",
        "params":[
            {
                "types":[
                    "string"
                ],
                "text":"ISO 3166-1 alpha-2 country code"
            },
            {
                "types":[
                    "string"
                ],
                "text":"for generating bank account number of a specific bank"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"total length without country code and 2 check digits"
            }
        ],
        "examples":[

        ],
        "links":[
            "http://en.wikipedia.org/wiki/International_Bank_Account_Number"
        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function iban($countryCode, $prefix = '', $length = null)"
    },
    "swiftBicNumber":{
        "info":"Return the String of a SWIFT/BIC number",
        "params":[

        ],
        "examples":[
            "'RZTIAT22263'"
        ],
        "links":[
            "   http://en.wikipedia.org/wiki/ISO_9362"
        ],
        "sees":[

        ],
        "returns":[
            " string Swift/Bic number"
        ],
        "call":"public static function swiftBicNumber()"
    },
    "realText":{
        "info":"Generate a text string by the Markov chain algorithm.\n Depending on the $maxNbChars, returns a random valid looking text. The algorithm\n generates a weighted table with the specified number of words as the index and the\n possible following words as the value.\n The minimum is 1, and it produces the higher level of randomness, although the\n generated text usually doesn't make sense. Higher index sizes (up to 5)\n produce more correct text, at the price of less randomness.",
        "params":[
            {
                "types":[
                    "integer"
                ],
                "text":"Maximum number of characters the text should contain (minimum: 10)"
            },
            {
                "types":[
                    "integer"
                ],
                "text":"Determines how many words are considered for the generation of the next word."
            }
        ],
        "examples":[
            "'Alice, swallowing down her flamingo, and began by taking the little golden key'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function realText($maxNbChars = 200, $indexSize = 2)"
    },
    "macProcessor":{
        "info":"Generate mac processor",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function macProcessor()"
    },
    "linuxProcessor":{
        "info":"Generate linux processor",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "string"
        ],
        "call":"public static function linuxProcessor()"
    },
    "userAgent":{
        "info":"Generate a random user agent",
        "params":[

        ],
        "examples":[
            "'Mozilla/5.0 (Windows CE) AppleWebKit/5350 (KHTML, like Gecko) Chrome/13.0.888.0 Safari/5350'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function userAgent()"
    },
    "chrome":{
        "info":"Generate Chrome user agent",
        "params":[

        ],
        "examples":[
            "'Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_5) AppleWebKit/5312 (KHTML, like Gecko) Chrome/14.0.894.0 Safari/5312'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function chrome()"
    },
    "firefox":{
        "info":"Generate Firefox user agent",
        "params":[

        ],
        "examples":[
            "'Mozilla/5.0 (X11; Linuxi686; rv:7.0) Gecko/20101231 Firefox/3.6'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function firefox()"
    },
    "safari":{
        "info":"Generate Safari user agent",
        "params":[

        ],
        "examples":[
            "'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_1 rv:3.0; en-US) AppleWebKit/534.11.3 (KHTML, like Gecko) Version/4.0 Safari/534.11.3'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function safari()"
    },
    "opera":{
        "info":"Generate Opera user agent",
        "params":[

        ],
        "examples":[
            "'Opera/8.25 (Windows NT 5.1; en-US) Presto/2.9.188 Version/10.00'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function opera()"
    },
    "internetExplorer":{
        "info":"Generate Internet Explorer user agent",
        "params":[

        ],
        "examples":[
            "'Mozilla/5.0 (compatible; MSIE 7.0; Windows 98; Win 9x 4.90; Trident/3.0)'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function internetExplorer()"
    },
    "uuid":{
        "info":"Generate name based md5 UUID (version 3).",
        "params":[

        ],
        "examples":[
            "'7e57d004-2b97-0e7a-b45f-5387367791cd'"
        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[

        ],
        "call":"public static function uuid()"
    }
}