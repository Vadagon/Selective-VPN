var proxy = {
	rules: {
		proxyForHttp: {
			scheme: "http",
			host: "18.219.10.5",
			port: 3128
		},
		proxyForHttps: {
			scheme: "http",
			host: "18.219.10.5",
			port: 3128
		},
		proxyForFtp: {
			scheme: "http",
			host: "18.219.10.5",
			port: 3128
		},
		fallbackProxy: {
			scheme: "http",
			host: "18.219.10.5",
			port: 3128
		},
		bypassList: []
	},
	modeOn: "fixed_servers",
	modeOff: "auto_detect",
	statusOn: function(){
		document.getElementById('flipper').classList.remove('front-face-parent');
		document.getElementById('flipper').classList.add('back-face-parent');
		document.getElementById('buttonFunky').textContent = 'Disconnect';
		document.getElementById('processingFunky').textContent = 'Disconnecting';
	},
	statusOff: function(){
		document.getElementById('flipper').classList.remove('back-face-parent');
		document.getElementById('flipper').classList.add('front-face-parent');
		document.getElementById('buttonFunky').textContent = 'Connect';
		document.getElementById('processingFunky').textContent = 'Connecting';	
	},
	connect: function(e){
		chrome.proxy.settings.set({value: {rules: proxy.rules, mode: proxy.modeOn}, scope: 'regular'}, function() {
			e('connected');
		});
	},
	disconnect: function(e){
		chrome.proxy.settings.clear({scope: 'regular'}, function() {
			e('disconnected');
		})
	},
	status: function(e){
		chrome.proxy.settings.get({'incognito': false}, function(config) {
			if(config.value.mode == 'fixed_servers' && config.value.rules.proxyForFtp.host == '18.219.10.5'){
				e(true);
			}else{
				e(false);
			}
		});	
	}
}

document.addEventListener('DOMContentLoaded', function () {
	proxy.status(function(e){
		e?proxy.statusOn():proxy.statusOff();
		document.getElementById('funky').disabled = false;
		document.getElementById('connectToggle').addEventListener('click', function(){
			proxy.status(function(e){
				if (e && !document.getElementById('funky').disabled) {
					proxy.disconnect(function(){
						
						setTimeout(function() {
							proxy.statusOff();
							setTimeout(function() {
								proxy.statusOff();
								document.getElementById('funky').checked = false;
								document.getElementById('funky').disabled = false;
							}, 4000);
						}, 3000);
					});
				}else if(!document.getElementById('funky').disabled){
					proxy.connect(function(){
						
						setTimeout(function() {
							proxy.statusOn();
							setTimeout(function() {
								proxy.statusOn();
								document.getElementById('funky').checked = false;
								document.getElementById('funky').disabled = false;
							}, 4000);
						}, 3000);
					});
				}
				document.getElementById('funky').disabled = true;
			});
		});
	});
});