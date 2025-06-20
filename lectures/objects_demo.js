const myObj = {
    "name": "Jane",
    "menu": {
        "pizza": 14.99,
        "quesadilla": 8.99,
        "chicken pot pie": 5.99
    },
    "students": ["Jack", "Jill"]
};

// How do you grab the price for a quesadilla?
console.log(myObj.menu.quesadilla);
console.log(myObj["menu"]["quesadilla"]);

// How do you grab Jack?
console.log(myObj.students[0]);

let myKey = "students";
console.log(myObj[myKey]); // NOT myObj.myKey

// Loop through objects
for (let key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

// for (const [key, val] of Object.entries(myObj)) {
//     console.log(key);
//     console.log(val);
// }

// for-of loop is used in arrays to grab the values directly
// let myArr = [3, 8, 2];
// for (const myVal of myArr) {
//     console.log(myVal);
// }

// Check if a key exists in an object
console.log("name" in myObj); // One way
console.log(Object.hasOwn(myObj,"name")); // Another way
let madeUpKey = "number";
console.log(Object.hasOwn(myObj,madeUpKey));

const rawAlertData = {
    "@context": [
        "https://geojson.org/geojson-ld/geojson-context.jsonld",
        {
            "@version": "1.1",
            "wx": "https://api.weather.gov/ontology#",
            "@vocab": "https://api.weather.gov/ontology#"
        }
    ],
    "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8cf186ec0743c79c9a1a2c17f681bc22081a6299.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -102.89,
                            46.7
                        ],
                        [
                            -102.84,
                            46.78
                        ],
                        [
                            -102.56,
                            46.75
                        ],
                        [
                            -102.68,
                            46.55
                        ],
                        [
                            -102.89,
                            46.7
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.8cf186ec0743c79c9a1a2c17f681bc22081a6299.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.8cf186ec0743c79c9a1a2c17f681bc22081a6299.001.1",
                "areaDesc": "Hettinger, ND; Stark, ND",
                "geocode": {
                    "SAME": [
                        "038041",
                        "038089"
                    ],
                    "UGC": [
                        "NDC041",
                        "NDC089"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/NDC041",
                    "https://api.weather.gov/zones/county/NDC089"
                ],
                "references": [],
                "sent": "2025-06-19T18:40:00-06:00",
                "effective": "2025-06-19T18:40:00-06:00",
                "onset": "2025-06-19T18:40:00-06:00",
                "expires": "2025-06-19T19:15:00-06:00",
                "ends": "2025-06-19T19:15:00-06:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Extreme",
                "certainty": "Observed",
                "urgency": "Immediate",
                "event": "Tornado Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Bismarck ND",
                "headline": "Tornado Warning issued June 19 at 6:40PM MDT until June 19 at 7:15PM MDT by NWS Bismarck ND",
                "description": "TORBIS\n\nThe National Weather Service in Bismarck has issued a\n\n* Tornado Warning for...\nNorthwestern Hettinger County in southwestern North Dakota...\nSouth central Stark County in southwestern North Dakota...\n\n* Until 715 PM MDT.\n\n* At 639 PM MDT, a severe thunderstorm capable of producing a tornado\nwas located 11 miles south of Dickinson, moving southeast at 25\nmph.\n\nHAZARD...Tornado and golf ball size hail.\n\nSOURCE...Radar indicated rotation.\n\nIMPACT...Flying debris will be dangerous to those caught without\nshelter. Mobile homes will be damaged or destroyed.\nDamage to roofs, windows, and vehicles will occur.  Tree\ndamage is likely.\n\n* This tornadic thunderstorm will remain over mainly rural areas of\nnorthwestern Hettinger and south central Stark Counties, including\nthe following locations... Schefield.",
                "instruction": "TAKE COVER NOW! Move to a basement or an interior room on the lowest\nfloor of a sturdy building. Avoid windows. If you are outdoors, in a\nmobile home, or in a vehicle, move to the closest substantial shelter\nand protect yourself from flying debris.",
                "response": "Shelter",
                "parameters": {
                    "AWIPSidentifier": [
                        "TORBIS"
                    ],
                    "WMOidentifier": [
                        "WFUS53 KBIS 200040"
                    ],
                    "eventMotionDescription": [
                        "2025-06-20T00:39:00-00:00...storm...300DEG...20KT...46.72,-102.82"
                    ],
                    "maxHailSize": [
                        "1.75"
                    ],
                    "tornadoDetection": [
                        "RADAR INDICATED"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KBIS.TO.W.0002.250620T0040Z-250620T0115Z/"
                    ],
                    "eventEndingTime": [
                        "2025-06-19T19:15:00-06:00"
                    ],
                    "WEAHandling": [
                        "Imminent Threat"
                    ],
                    "CMAMtext": [
                        "NWS: TORNADO WARNING in this area til 7:15 PM MDT. Take shelter now. Check media."
                    ],
                    "CMAMlongtext": [
                        "National Weather Service: TORNADO WARNING in this area until 7:15 PM MDT. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building. If you are outdoors, in a mobile home, or in a vehicle, move to the closest substantial shelter and protect yourself from flying debris. Check media."
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "TOR"
                    ],
                    "NationalWeatherService": [
                        "TOW"
                    ]
                }
            }
        }
    ]
}

console.log(rawAlertData["features"][0]["id"]); // Demo how to grab an item from a real API (from the National Weather Service)