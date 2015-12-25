cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
        "id": "cordova-plugin-customurlscheme.LaunchMyApp",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-customurlscheme": "4.0.0",
    "cordova-plugin-geolocation": "1.0.1"
}
// BOTTOM OF METADATA
});