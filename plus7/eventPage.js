chrome.tabs.onUpdated.addListener(function(tab) {
//          alert("hello");

         chrome.tabs.executeScript(null, {file: "2.js"});

                  //chrome.tabs.executeScript(null, 
                  //        {file: "2.js"});

          });
