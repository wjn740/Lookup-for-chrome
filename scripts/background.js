/*********************************************************************************
	Please see readme.txt with this bundle.
	author: Prasad Cholakkottil aka pMan
**********************************************************************************/

	// walk-through function for stringify, sanitize it
	function validate(key, value) {
		if (typeof value != 'object' && typeof value != 'undefined') {
			return String(value);
		}
		return false;
	}
	
	// filter keyword, this can be object
	function validateString(string) {
		keywd = JSON.parse(JSON.stringify(string, validate));
		if( keywd.length > 45 ) {
			alert("Whooops...\nSelection can\'t exceed 45 characters.\n\nThe longest word in English is only 45 characters long.\n\'pneumonoultramicroscopicsilicovolcanoconiosis\'");
			exit;
		}
		return keywd;
	}

	// get tab id of lookup tab
	function getTabId(newTab) {
		if(tabId == null || onlyOneTab === false) {
			tabId = Number(newTab.id);
		}
	}
	
	// called when tab closed event triggered
	function tabClosed(tab) {
		var cur_tab_id = JSON.parse(JSON.stringify(tab));
		if(cur_tab_id == tabId) {
			tabId = null;
		}
		return;
	}
	
	// Open a new tab for lookup
	function openTab(tabUrl) {
		if (tabId == null || onlyOneTab == false) {
			chrome.tabs.create({url: tabUrl, selected:true}, getTabId);
		} else {
			if (onlyOneTab == true) {
				chrome.tabs.update(tabId, {url: tabUrl, selected:true});
			}
		}
		chrome.tabs.onRemoved.addListener(tabClosed);
	}
	
	// for Cambridge dictionary
	function lookupCald(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://dictionary.cambridge.org/search/british/direct/?q="+keyword, keyword);
		}
	}

	// for www.freedictionary.com
	function lookupFreeDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.thefreedictionary.com/"+keyword, keyword);
		}
	}

	// for Google definitions
	function lookupDefinition(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			openTab("/html/loading.html#http://www.google.com/search?q=define+"+keyword);
		}
	}

	// for Urban dictionary
	function lookupUrbanDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			openTab("/html/loading.html#http://www.urbandictionary.com/define.php?term="+keyword);
		}
	}

	// for Wiktionary
	function lookupWiktionary(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://en.wiktionary.org/wiki/"+keyword, keyword);
		}
	}

	// for Merriam webster
	function lookupMerriamWebster(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.merriam-webster.com/dictionary/"+keyword, keyword);
		}
	}
	
	// for Longman Dict Of Contemporary English
	function lookupLdoce(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.ldoceonline.com/search/?q="+keyword, keyword);
		}
	}
	
	// for Merriam webster thesaurus
	function lookupMerriamWebsterT(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.merriam-webster.com/thesaurus/"+keyword, keyword);
		}
	}
	
	// for Thesaurus.com
	function lookupThesaurus(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://thesaurus.com/browse/"+keyword, keyword);
		}
	}
	
	// for Oxford Advanced Learners Dictionary
	function lookupOALD(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.oxfordlearnersdictionaries.com/search/english/direct/?q="+keyword, keyword);
		}
	}

	// for Oxford Advanced Learners Dictionary - American English
	function lookupOALDAMER(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.oxfordlearnersdictionaries.com/search/american_english/direct/?q="+keyword, keyword);
		}
	}
	
	// for Investopedia
	function lookupInvestopedia(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.investopedia.com/search/default.aspx?q="+keyword, keyword);
		}
	}
	
	// for Dictionary.com
	function lookupDictionary(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://dictionary.reference.com/browse/"+keyword, keyword);
		}
	}
	
	// for Macmillan dictionary
	function lookupMacmillanDic(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.macmillandictionary.com/dictionary/british/"+keyword, keyword);
		}
	}
	
	// for Macmillan thesaurus
	function lookupMacmillanThes(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.macmillandictionary.com/thesaurus/british/"+keyword, keyword);
		}
	}
	
	// for Accounting Dictionary
	function lookupAccountDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://accountingdictionary.org/dictionary/"+keyword, keyword);
		}
	}
	
	// for Reverso Dictionary
	function lookupReversoDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://dictionary.reverso.net/english-cobuild/"+keyword, keyword);
		}
	}
	
	// for Collins English Dictionary
	function lookupCollinsEnglishDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english/"+keyword, keyword);
		}
	}

	// for Collins English Dictionary
	function lookupCollinsThesaurus(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-thesaurus/"+keyword, keyword);
		}
	}
	
	// for Collins French Dictionary
	function lookupCollinsFrenchDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-french/"+keyword, keyword);
		}
	}
	
	// for Collins French English Dictionary
	function lookupCollinsFrenchEngDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/french-english/"+keyword, keyword);
		}
	}

	// for Collins German Dictionary
	function lookupCollinsGermanDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-german/"+keyword, keyword);
		}
	}
	
	// for Collins Spanish Dictionary
	function lookupCollinsSpanishDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-spanish/"+keyword, keyword);
		}
	}
	
	// for Collins Italian Dictionary
	function lookupCollinsItalianDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-italian/"+keyword, keyword);
		}
	}
	
	// for linguee Dictionary
	function lookupLingueeDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.linguee.es/espanol-ingles/search?query="+keyword, keyword);
		}
	}
	
	// for linguee Japanese Dictionary
	function lookupLingueeEnglishJapaneseDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.linguee.com/english-japanese/translation/"+keyword+".html", keyword);
		}
	}
	
	// for linguee Spanish Dictionary
	function lookupLingueeEnglishSpanishDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.linguee.com/english-spanish/translation/"+keyword+".html", keyword);
		}
	}
	
	// for linguee French Dictionary
	function lookupLingueeEnglishFrenchDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.linguee.com/english-french/translation/"+keyword+".html", keyword);
		}
	}
	
    // for Merriam Webster Learner's Dictionary
	function lookupMerriamWebsterL(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.learnersdictionary.com/definition/"+keyword, keyword);
		}
	}

    // for Collins Cobuild Learner's Dictionary
	function lookupCollinsCobuildDict(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.collinsdictionary.com/dictionary/english-cobuild-learners/"+keyword, keyword);
		}
	}
	
	// for Macmillan dictionary American
	function lookupMacmillanDicAmer(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.macmillandictionary.com/dictionary/american/"+keyword, keyword);
		}
	}
	
	
	// for American Heritage Dictionary
	function lookupAmericanHeritage(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("https://www.ahdictionary.com/word/search.html?q="+keyword, keyword);
		}
	}
	
	// for Vocabulary.com
	function lookupVocabularycom(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.vocabulary.com/dictionary/"+keyword, keyword);
		}
	}
	
	// for Webster's New World College Dictionary
	function lookupWebsterNewWorld(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.yourdictionary.com/"+keyword, keyword);
		}
	}
	
	// for The Wordsmyth English Dictionary-Thesaurus
	function lookupWordsmyth(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.wordsmyth.net/?ent="+keyword, keyword);
		}
	}
	
	// for Infoplease Dictionary
	function lookupInfoplease(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://dictionary.infoplease.com/"+keyword, keyword);
		}
	}
	
	// for Oxford Dictionary American English
	function lookupOxford(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.oxforddictionaries.com/us/definition/american_english/"+keyword, keyword);
		}
	}
	
	// for Wordnik
	function lookupWordnik(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("https://www.wordnik.com/words/"+keyword, keyword);
		}
	}
	
	// for Online Etymology Dictionary
	function lookupEtymology(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.etymonline.com/index.php?term="+keyword, keyword);
		}
	}
	
	// for UltraLingua English Dictionary
	function lookupUltraLingua(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.ultralingua.com/onlinedictionary/dictionary#src_lang=English&dest_lang=English&query="+keyword, keyword);
		}
	}
	
	// for Online Plain Text English Dictionary
	function lookupOnlinePlain(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.onelook.com/?other=web1913&w="+keyword, keyword);
		}
	}
	
	// for The Free Dictionary.Org
	function lookupFreeDictOrg(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.freedictionary.org/?Query="+keyword, keyword);
		}
	}
	
	// for AllWords.com Multi-Lingual Dictionary
	function lookupAllWords(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.allwords.com/query.php?SearchType=3&Keyword="+keyword, keyword);
		}
	}
	
	// for Princeton WordNet
	function lookupWordNet(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://wordnetweb.princeton.edu/perl/webwn?s="+keyword, keyword);
		}
	}
	
	// for Cambridge American Dictionary
	function lookupCambridgeAmer(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://dictionary.cambridge.org/search/american-english/?q="+keyword, keyword);
		}
	}
	
	// for LookWAYup Translating Dictionary/Thesaurus
	function lookupLookwayup(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://lookwayup.com/lwu.exe/lwu/d?s=f&w="+keyword, keyword);
		}
	}
	
	// for Mnemonic Dictionary
	function lookupMnemonic(info, tab) {
		var keyword = validateString(info.selectionText);
		if (keyword != false) {
			showPopup("http://www.mnemonicdictionary.com/word/"+keyword, keyword);
		}
	}
	
	// shows the popup with selectd dictionary URL.
	// Inject style and scripts.
	function showPopup(url, keyword) {
        chrome.tabs.getSelected(null, function(tab) {
            var arr = [url, keyword, dics];
            var getProtocol = function (url) {
                var parser = document.createElement('a');
                parser.href = url;
                return parser.protocol;
            };

            var isHttps = getProtocol(tab.url) === 'https:' ? true : false;
            if (usePopup && !isHttps) {
                chrome.tabs.insertCSS(null, {file:"html/inject.css"});
                chrome.tabs.executeScript(null, {code: "var a='"+JSON.stringify(arr)+"';"}, function(){
                    chrome.tabs.executeScript(null, {file:"scripts/jquery.min.js"}, function(){
                        chrome.tabs.executeScript(null, {file:"scripts/jquery-ui-1.10.3.min.js"}, function(){
                            chrome.tabs.executeScript(null, {file:"scripts/inject.min.js"});
                        });
                    });
                });
            } else {
                openTab("/html/loading.html#"+url);
            }
        });
	}
	
	// initialize
	var url = "";
	var tabId = null;
	var keywd = null;
	var selCxt = "selection";
	var pageCxt = "page";
	var title = "";
	var onlyOneTab = lookupInOnlyOneTab();
	var enabled = isEnabled();
	var usePopup = usePopup();
	
	chrome.contextMenus.removeAll();	// clear all
	if (enabled == true) {
		// adding context menu items from dics (JSON) that stores all available dicts
		dics = getEnabledDicts('menu');		// get all enabled dictionaries and
		for (var i in dics) {				// add them one by one.
			title = dics[i].title;
			func = this["lookup" + dics[i].func];
			link = dics[i].url;
			chrome.contextMenus.create({"title": title, "contexts":[selCxt], "onclick": func});
		}
	}
