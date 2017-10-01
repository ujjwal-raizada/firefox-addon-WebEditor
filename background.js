function openPage() {
 
  //script inject code start

  function onExecuted(result) {
    console.log(`Editor start`);
  }
  //handles error
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  //inject the following
  //javascript in the current active
  //tab

  var editorcode = "alert('Website is in Editor mode !! After editing , use CTRL + S , to save !');document.body.contentEditable = 'true'; document.designMode = 'on'; void 0";
  
  var executing = browser.tabs.executeScript({
    code: editorcode
  });
  executing.then(onExecuted, onError);
//script inject code ends

}
//lsitening to browser button click
browser.browserAction.onClicked.addListener(openPage);




 
