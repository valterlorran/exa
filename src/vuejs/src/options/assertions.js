module.exports = {
    "assertSuccessful":{
        "info":"Assert that the response has a successful status code.",
        "params":[

        ],
        "examples":[

        ],
        "links":[

        ],
        "sees":[

        ],
        "returns":[
            "$this"
        ],
        "call":"public static function assertSuccessful()"
    },
    "assertStatus":{
        "info":"Assert that the response has the given status code.",
        "params":[
            {
                "types":[
                    "int"
                ],
                "name":[
                    "$status"
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
            "$this"
        ],
        "call":"public static function assertStatus($status)"
    },
    "assertRedirect":{
        "info":"Assert whether the response is redirecting to a given URI.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$uri"
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
            "$this"
        ],
        "call":"public static function assertRedirect($uri = null)"
    },
    "assertHeader":{
        "info":"Asserts that the response contains the given header and equals the optional value.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$headerName"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertHeader($headerName, $value = null)"
    },
    "assertPlainCookie":{
        "info":"Asserts that the response contains the given cookie and equals the optional value.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$cookieName"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertPlainCookie($cookieName, $value = null)"
    },
    "assertCookie":{
        "info":"Asserts that the response contains the given cookie and equals the optional value.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$cookieName"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$value"
                ],
                "text":""
            },
            {
                "types":[
                    "bool"
                ],
                "name":[
                    "$encrypted"
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
            "$this"
        ],
        "call":"public static function assertCookie($cookieName, $value = null, $encrypted = true)"
    },
    "assertCookieExpired":{
        "info":"Asserts that the response contains the given cookie and is expired.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$cookieName"
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
            "$this"
        ],
        "call":"public static function assertCookieExpired($cookieName)"
    },
    "assertCookieMissing":{
        "info":"Asserts that the response does not contains the given cookie.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$cookieName"
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
            "$this"
        ],
        "call":"public static function assertCookieMissing($cookieName)"
    },
    "assertSee":{
        "info":"Assert that the given string is contained within the response.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertSee($value)"
    },
    "assertSeeText":{
        "info":"Assert that the given string is contained within the response text.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertSeeText($value)"
    },
    "assertDontSee":{
        "info":"Assert that the given string is not contained within the response.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertDontSee($value)"
    },
    "assertDontSeeText":{
        "info":"Assert that the given string is not contained within the response text.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertDontSeeText($value)"
    },
    "assertJson":{
        "info":"Assert that the response is a superset of the given JSON.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$data"
                ],
                "text":""
            },
            {
                "types":[
                    "bool"
                ],
                "name":[
                    "$strict"
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
            "$this"
        ],
        "call":"public static function assertJson(array $data, $strict = false)"
    },
    "assertExactJson":{
        "info":"Assert that the response has the exact given JSON.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$data"
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
            "$this"
        ],
        "call":"public static function assertExactJson(array $data)"
    },
    "assertJsonFragment":{
        "info":"Assert that the response contains the given JSON fragment.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$data"
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
            "$this"
        ],
        "call":"public static function assertJsonFragment(array $data)"
    },
    "assertJsonMissing":{
        "info":"Assert that the response does not contain the given JSON fragment.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$data"
                ],
                "text":""
            },
            {
                "types":[
                    "bool"
                ],
                "name":[
                    "$exact"
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
            "$this"
        ],
        "call":"public static function assertJsonMissing(array $data, $exact = false)"
    },
    "assertJsonMissingExact":{
        "info":"Assert that the response does not contain the exact JSON fragment.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$data"
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
            "$this"
        ],
        "call":"public static function assertJsonMissingExact(array $data)"
    },
    "assertJsonStructure":{
        "info":"Assert that the response has a given JSON structure.",
        "params":[
            {
                "types":[
                    "array",
                    "null"
                ],
                "name":[
                    "$structure"
                ],
                "text":""
            },
            {
                "types":[
                    "array",
                    "null"
                ],
                "name":[
                    "$responseData"
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
            "$this"
        ],
        "call":"public static function assertJsonStructure(array $structure = null, $responseData = null)"
    },
    "assertJsonCount":{
        "info":"Assert that the response JSON has the expected count of items at the given key.",
        "params":[
            {
                "types":[
                    "int"
                ],
                "name":[
                    "$count"
                ],
                "text":""
            },
            {
                "types":[
                    "string",
                    "null"
                ],
                "name":[
                    "$key"
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
            "$this"
        ],
        "call":"public static function assertJsonCount(int $count, $key = null)"
    },
    "assertJsonValidationErrors":{
        "info":"Assert that the response has the given JSON validation errors for the given keys.",
        "params":[
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$keys"
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
            "$this"
        ],
        "call":"public static function assertJsonValidationErrors($keys)"
    },
    "decodeResponseJson":{
        "info":"Validate and return the decoded response JSON.",
        "params":[

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
        "call":"public static function decodeResponseJson()"
    },
    "json":{
        "info":"Validate and return the decoded response JSON.",
        "params":[

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
        "call":"public static function json()"
    },
    "assertViewIs":{
        "info":"Assert that the response view equals the given value.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertViewIs($value)"
    },
    "assertViewHas":{
        "info":"Assert that the response view has a given piece of bound data.",
        "params":[
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$key"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertViewHas($key, $value = null)"
    },
    "assertViewHasAll":{
        "info":"Assert that the response view has a given list of bound data.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$bindings"
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
            "$this"
        ],
        "call":"public static function assertViewHasAll(array $bindings)"
    },
    "assertViewMissing":{
        "info":"Assert that the response view is missing a piece of bound data.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$key"
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
            "$this"
        ],
        "call":"public static function assertViewMissing($key)"
    },
    "assertSessionHas":{
        "info":"Assert that the session has a given value.",
        "params":[
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$key"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$value"
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
            "$this"
        ],
        "call":"public static function assertSessionHas($key, $value = null)"
    },
    "assertSessionHasAll":{
        "info":"Assert that the session has a given list of values.",
        "params":[
            {
                "types":[
                    "array"
                ],
                "name":[
                    "$bindings"
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
            "$this"
        ],
        "call":"public static function assertSessionHasAll(array $bindings)"
    },
    "assertSessionHasErrors":{
        "info":"Assert that the session has the given errors.",
        "params":[
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$keys"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$format"
                ],
                "text":""
            },
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$errorBag"
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
            "$this"
        ],
        "call":"public static function assertSessionHasErrors($keys = [], $format = null, $errorBag = 'default')"
    },
    "assertSessionHasErrorsIn":{
        "info":"Assert that the session has the given errors.",
        "params":[
            {
                "types":[
                    "string"
                ],
                "name":[
                    "$errorBag"
                ],
                "text":""
            },
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$keys"
                ],
                "text":""
            },
            {
                "types":[
                    "mixed"
                ],
                "name":[
                    "$format"
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
            "$this"
        ],
        "call":"public static function assertSessionHasErrorsIn($errorBag, $keys = [], $format = null)"
    },
    "assertSessionMissing":{
        "info":"Assert that the session does not have a given key.",
        "params":[
            {
                "types":[
                    "string",
                    "array"
                ],
                "name":[
                    "$key"
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
            "$this"
        ],
        "call":"public static function assertSessionMissing($key)"
    }
}