function getAge(){
  var birthday = new Date("05/29/2001");
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

(function() {

    //initialStyles = "/* \n * Licensed under the unlicense\n * Use this however you like \n * Authored by Felix Gerberding\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* \n * ...hellooo?            \n *\n * Ohh, hey there. You came here for a portfolio?         \n *\n * I'm just sitting here coding away.            \n * Sure, you can watch.                       \n *\n * But if someone is watching, I should make this a bit prettier. \n * i'll just type a bit and soon it will look better        \n *\n * Confused? Sit back!\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #1d1f21; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Atom <3\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #DAD085; }\n.selector .key { color: #DAD085; }\n.key           { color: #c5c8c6; }\n.value         { color: #62B1FE; }\n\n\n/* \n * But you're here for a portfolio, right? \n */ \n\n\n/* First, we'll move this stuff over */\n\npre:first-of-type { left: 51%; }\n\n\n/* Now you can get your portfolio */\n\n#felix { \n  right:51%;\n  display: inline !important; \n  font-size:16px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\na { color:#62B1FE };\n\n/* I planned this all along! Have fun looking around 😇 */";

    window.initialStyles = document.getElementById('style-text').innerHTML
    initialStyles = window.initialStyles
    document.getElementById('style-text').innerHTML = ""

  
    writeStyles = function(message, index, interval) {
      var scroll;
      if (index < message.length) {

        scrollSync = document.getElementById('scrollSync');
        scrollSync.scrollTop = scrollSync.scrollHeight;

        document.getElementById('style-text').innerHTML = document.getElementById('style-text').innerHTML + message[index++]
        if(window.break){
          return
        }
        return setTimeout((function() {
          window.update(document.getElementById('style-text'))
          Prism.highlightElement(document.querySelector('#highlighting-content'))
          return writeStyles(message, index, window.animationTimer);
        }), window.animationTimer);
      }
    };

    document.getElementById('age').innerHTML = getAge()

    window.animationTimer = window.innerWidth <= 578 ? 4 : 8;
    writeStyles(initialStyles, 0, window.animationTimer);

}).call(this);

function skip(){
  
  document.getElementById('style-text').innerHTML = initialStyles
  window.break = true;
  window.update(document.getElementById('style-text'))
  Prism.highlightElement(document.querySelector('#highlighting-content'))
  document.getElementById("float").style.display = "none"
}
