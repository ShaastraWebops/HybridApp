cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
        "id": "cordova-plugin-customurlscheme.LaunchMyApp",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    },
    {
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "id": "mx.ferreyra.callnumber.CallNumber",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-customurlscheme": "4.0.0",
    "cordova-plugin-geolocation": "1.0.1",
    "mx.ferreyra.callnumber": "0.0.2",
    "pushbots-cordova-plugin": "1.3.0",
    "android.support.v4": "21.0.1"
}
// BOTTOM OF METADATA
});