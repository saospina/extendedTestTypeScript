exports.config = {
	directConnect : true,
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'JSFilesLocation/specs/*Spec.js' ],

	onPrepare : () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(15000);
	},

	capabilities : {
		browserName : 'firefox',
		chromeOptions : {
			args : [
				'--disable-infobars',
				'--disable-extensions',
				'verbose',
				'log-path=/tmp/chromedriver.log'
			],
			prefs : {
				'profile.password_manager_enabled' : false,
				'credentials_enable_service' : false,
				'password_manager_enabled' : false
			}
		}
	}
}