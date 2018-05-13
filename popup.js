			// scheme: "http",
			// host: "18.219.10.5",
			// port: 3128
		

var proxy = {
    cachedUid: null,
    domains: ['whatismyip.host', 'google.com', 'www.google.com', 'google.com.ua', 'www.google.com.ua', 'google.com', 'vk.com', 'vk-cdn.net', 'vk-cdn.me', 'userapi.com', 'vkontakte.ru', 'apivk.com', 'webvisor.org', 'webvisor.com', 'yandex.de', 'yaani.ru', 'yandex-amp.net', 'yandex', 'avto.ru', 'autoru.tv', 'yandex.com.am', 'yandex.kg', 'yandex.lt', 'yandex.lv', 'yandex.md', 'yandex.tj', 'yandex.tm', 'yandex.ee', 'yandex.co.il', 'yandex-launcher.com', 'yandexdatafactory.ru', 'cloud.yandex', 'std-cpp.ru', 'stdcpp.ru', 'yandexlauncher.com', 'yandex.com.ge', 'adfox.net', 'yandexlyceum.ru', 'yavideoad.ru', 'yandex.uz', 'ecir2013.org', 'clickhouse.yandex', 'clickhouse.tech', 'yastat.net', 'loginza.ru', 'mail.yandex', 'yandextrafik.com.tr', 'yandex.travel', 'auto.ru', 'yandex.jobs', 'iframe-toloka.com', 'nic.yandex', 'travel.yandex', 'www.yandex', 'driver.yandex', 'ydf-conference.com', 'autoi.ru', 'adfox.ru', 'yandex-school.ru', 'shad.yandex', 'yandexdatafactory.com', 'yandexdataschool.com', 'yandexdataschool.ru', 'rostaxi.org', 'metabar.ru', 'nota-claim.ru', 'notaclaim.ru', 'pricelabs.ru', 'preview-adfox.ru', 'z5h64q92x9.net', 'yandex.aero', 'bem.info', 'yadisk.cc', 'comparesearches.com', 'yate.ch', 'ya.cc', 'clck.ly', 'clck.ru', 'yandex-ad.cn', 'yandexadexchange.net', 'ruscorpora.ru', 'multiship.ru', 'yamoney.ru', 'mk-test.ru', 'mk-beta.ru', 'moikrug.ru', 'mk-stress.ru', 'mk-dev.ru', 'mk-prod.ru', 'yandex.com.ua', 'yandex.com.ru', 'yaprobki.ru', 'yandex.mobi', 'yandex.az', 'xn--d1acpjx3f.xn--p1ai', 'yndx.net', 'yandex.com.tr', 'yandex.kz', 'yandex.by', 'allods.com', 'allods.ru', 'allodsteam.ru', 'appsmail.ru', 'attachmail.ru', 'attachmy.com', 'beep.car', 'beepcar.ru', 'beepcarstatic.ru', 'bk.ru', 'clouder.pics', 'datacloudmail.ru', 'dclub.ru', 'deliveryclub.ru', 'distribmail.ru', 'dwar.ru', 'fie.org', 'giftomaster.com', 'giftomatic.org', 'gmru.net', 'ic2ster.com', 'icqapi.com', 'icq.com', 'icqmail.com', 'icq.net', 'inbox.ru', 'iseeku.com', 'iseekyou.com', 'jugger.ru', 'list.ru', 'mailapps.me', 'mail.ua', 'maps.me', 'mediator.media', 'my.com', 'oh-uh.net', 'o.life', 'owamail.ru', 'parapa.ru', 'pifagor.io', 'pokespy.info', 'polkrf.ru', 'russianaicup.ru', 'russiancodecup.ru', 'russiancryptocup.com', 'russiancryptocup.ru', 'russiandesigncup.ru', 'russiandevcup.ru', 'russianmlcup.ru', 'seosan.io', 'skyforge.com', 'skyforge.ru', 'smaper.com', 'staticmy.com', 'tarantool.io', 'tarantool.org', 'terrabank.ru', 'terrhq.ru', 'territory.ru', 'timezero.ru', 'warface.com', 'warface.tv', 'xn--80abviyi.xn--p1ai', 'youla.io', 'youla.ru', 'vkuservideo.com', 'vkuservideo.net', 'vk.com', 'vk-cdn.net', 'vk-cdn.me', 'userapi.com', 'vkontakte.ru', '*.vk.com', 'apivk.com', 'vk.cc', 'vk.me', 'ok.com', 'odnoklassniki.com.ua', 'odnoklassniki.ru', 'mycdn.me', 'odnoklassniki.ua', 'ok.ru', 'mradx.net', 'ok.me', 'portal.mail.ru', 'ad.mail.ru', 'imgsmail.ru', 'mail.ru', 'ya.ru', '2ch.hk', 'kinopoisk.ru', 'drweb.com', 'kaspersky.ua', '.kaspersky.', 'yandex.st', 'yastatic.net', 'yandex.ru', 'yadi.sk', 'yandex.fr', 'donationalerts.ru', 'yandex.net', 'yandex.com', 'livejournal.ru', 'rutube.ru', '.yandex', 'narod.ru', 'yandex.cloud', 'cldmail.ru', 'cdnmail.ru', 'myadx.net', 'yandex.ua'],
    proxyList: [],
    port: '443',
    socksPort: null,
    type: 'PROXY',
    params: null,
    activeProxy: null,
    reapplyTimerId: null,
    errorsCountForLoadPacScript: 2,
    lastTimeScriptLoaded: 0,
    loadScriptTimeout: 100 * 1000,
    failedProxy: [],
    getRandom: function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    },
	getPac: function() {
        proxy.activeProxy = proxy.proxyList[proxy.getRandom(0, proxy.proxyList.length - 1)];
        if (proxy.activeProxy) {
            if (!window.localStorage.proxyTries) {
                window.localStorage.proxyTries = proxy.activeProxy;
            } else {
                if (window.localStorage.proxyTries.length < 1800) {
                    window.localStorage.proxyTries += ',' + proxy.activeProxy;
                }
            }
        }
        var a = JSON.stringify(proxy.domains),
            b = {
                mode: 'pac_script',
                pacScript: {
                    data: `function FindProxyForURL(url, host) {
				        var proxyIp = '` + '18.219.10.5' + `';
				        var proxyPort = ` + '3128' + `;
				        var socksPort = ` + proxy.socksPort + `;
				        var proxyType = '` + proxy.type + `';
				        var domains = ` + a + `;
				        
				        for(i = 0; i < domains.length; i++){
				         if (shExpMatch(host, domains[i])) {
				          return proxyType + " " + proxyIp + ":" + proxyPort + ";";
				         }
				        }
				        return "DIRECT";
				       }`
                }
            };
        return b
    },
	modeOn: "pac_script",
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
		// chrome.proxy.settings.set({value: proxy.getPac(), scope: 'regular'}, function() {
		// 	e('connected');
		// });
		chrome.proxy.settings.set({
            value: proxy.getPac(),
            scope: 'regular'
        }, (e) => {
        	console.log('cb!')
            console.log(e)
        })
	},
	disconnect: function(e){
		chrome.proxy.settings.clear({scope: 'regular'}, function() {
			e('disconnected');
		})
	},
	status: function(e){
		chrome.proxy.settings.get({'incognito': false}, function(config) {
			if(config.value.mode == proxy.modeOn){
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