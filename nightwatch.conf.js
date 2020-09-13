const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
var output = "docs/test/images"
var input = "frontend/src/test"
module.exports = {
    "src_folders": [
        input // Where the tests are located
    ],
    "output_folder": output, // reports from nightwatch
    "selenium": { // selenium configuration settings
        "start_process": true, // tells nightwatch to manage the selenium process
        "server_path": seleniumServer.path, // path to selenium
        "log_path": "test",
        "host": "127.0.0.1", // host for selenium
        "port": 8080, // port for selenium
        "cli_args": {
            "webdriver.chrome.driver": chromedriver.path // pass chromedriver path
        }
    },
    "test_settings": {
        "default": { // default settings (you can override with custom settings)
            "screenshots": {
                "enabled": true, // enables screenshots
                "path": "./test/images" // output folder for screenshots
            },
            "globals": {
                "waitForConditionTimeout": 15000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": {
                "browserName": "chrome", // use Chrome as the default browser
                "chromeOptions": {
                    "args": [] // pass custom CLI args to Chrome
                }
            }
        }
    }
}