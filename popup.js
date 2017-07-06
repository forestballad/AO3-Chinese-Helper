window.onload=function(){
    chrome.storage.local.get('func1_on', function (result) {
        var func1_on = result.func1_on;
        if (func1_on == undefined){
          func1_on = false
          chrome.storage.local.set({'func1_on': false})
        }
        $('#switch1').prop('checked', func1_on);
    });
    $('#switch1').click(handler1)

    chrome.storage.local.get('func2_on', function (result) {
        var func2_on = result.func2_on;
        if (func2_on == undefined){
          func2_on = false
          chrome.storage.local.set({'func2_on': false})
        }
        $('#switch2').prop('checked', func2_on);
    });
    $('#switch2').click(handler2)

     chrome.storage.local.get('func3_on', function (result) {
        var func3_on = result.func3_on;
        if (func3_on == undefined){
          func3_on = false
          chrome.storage.local.set({'func3_on': false})
        }
        $('#switch3').prop('checked', func3_on);
    });
    $('#switch3').click(handler3)   
}


function handler1() {
    chkBox = $('#switch1').prop('checked')
    chrome.storage.local.set({'func1_on': chkBox})

    chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {stuff:"1", val:chkBox});
    });
}

function handler2() {
    chkBox = $('#switch2').prop('checked')
    chrome.storage.local.set({'func2_on': chkBox})

    chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {stuff:"2", val:chkBox});
    });
}

function handler3() {
    chkBox = $('#switch3').prop('checked')
    chrome.storage.local.set({'func3_on': chkBox})

    chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, {stuff:"3", val:chkBox});
    });
}