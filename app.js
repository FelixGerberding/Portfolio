function getAge(){
  var birthday = new Date("05/29/2001");
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

(function() {

    openComment = false;

    initialStyles = "/* \n * Licensed under the unlicense\n * Use this however you like \n * Authored by Felix Gerberding\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* \n * ...hellooo?            \n *\n * Ohh, hey there. You came here for a portfolio?         \n *\n * I'm just sitting here coding away.            \n * Sure, you can watch.                       \n *\n * But if someone is watching, I should make this a bit prettier. \n * i'll just type a bit and soon it will look better        \n *\n * Confused? Sit back!\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #1d1f21; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Atom <3\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #DAD085; }\n.selector .key { color: #DAD085; }\n.key           { color: #c5c8c6; }\n.value         { color: #62B1FE; }\n\n\n/* \n * But you're here for a portfolio, right? \n */ \n\n\n/* First, we'll move this stuff over */\n\npre:first-of-type { left: 51%; }\n\n\n/* Now you can get your portfolio */\n\n#felix { \n  right:51%;\n  display: inline !important; \n  font-size:16px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\na { color:#62B1FE };\n\n/* I planned this all along! Have fun looking around 😇 */";

    openComment = false;

    writeStyleChar = function(which) {
      if (which === '/' && openComment === false) {
        openComment = true;
        styles = $('#style-text').html() + which;
      } else if (which === '/' && openComment === true) {
        openComment = false;
        styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
      } else if (which === ':') {
        styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
      } else if (which === ';') {
        styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
      } else if (which === '{') {
        styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
      } else {
        styles = $('#style-text').html() + which;
      }
      $('#style-text').html(styles);
      return $('#style-tag').append(which);
    };
  
    writeStyles = function(message, index, interval) {
      var pre;
      if (index < message.length) {
        pre = document.getElementById('style-text');
        pre.scrollTop = pre.scrollHeight;
        writeStyleChar(message[index++]);
        return setTimeout((function() {
          return writeStyles(message, index, window.animationTimer);
        }), window.animationTimer);
      }
    };
    
    $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span><pre id=\"style-text\"></pre>\n<pre id=\"felix\"><h2>Felix Gerberding</h2><p>I'm a <b id='age'></b> y/o guy from Germany that likes programming, technology and everything related to it. I love to work on interesting problems. If you want to get in touch, feel free to reach out.<br><br><h3>Experience 🚀</h3><ul><li>Engineering Fellow at CORE SE (since 2022, still going)</li><li>Developer at Voltic GmbH (since 2020, 24 Months)</li><li>Working Student (Development) at XU Exponential University (since Feb 2020, 6 months)</li><li>Internship in Web-Development at Saatwerk (2017, two weeks)</li></ul><h3>Education 🏫</h3><ul><li>BSc. Coding & Software Engineering at XU Exponential University (since Oct 2019, still going)</li><li>Hannah-Arendt-Gymnasium Barsinghausen (finished 2019)</li></ul><h3>Certificates 🏆</h3><ul><li>European Business Law: Understanding the Fundamentals by <a href=\"https://www.coursera.org/account/accomplishments/verify/TXNCLAP4KLN7\">Lund University</a></li><li>Technical Support Fundamentals by <a href=\"https://www.coursera.org/account/accomplishments/verify/H8CBCY5BZFRX\">Google</a></li><li>Various <a href=\"https://blog.felix.codes/409191b6dc5347ae935cf461ea238e06\">Course Certificates</a> on LinkedIn</li><li>A lot of Badges & Certificates on <a href='https://www.hackerrank.com/gerberding_felix'>Hackerrank</a></li></ul><h3>Projects ⚙️</h3>I've worked on lots of projects, large and small. These are some of my favorites:<ul><li><a href=\"https://blog.felix.codes/IconGenerator-eu-Hobby-Project-fef81e7c338944ff8400c519f211124c\">icongenerator.eu</a> [ 2018 - 2020 | JavaScript, jQuery, PHP ]</li><li><a href=\"https://blog.felix.codes/Dinermind-University-Project-d39260202d1447d3a0ef994c4cc9848f\">Dinermind (Uni-Project)</a> [ 2021 | Kotlin, Android ]</li><li><a href=\"https://einhorn.guide\">einhorn.guide</a> [ 2022 - now | Markdown, TypeScript, Static-Site ]</li><li><a href=\"https://blog.felix.codes/TeamSpeak-gg-Hobby-Project-46a938be651a4ac6a69fc69ccd8c030d\">TeamSpeak.gg</a> [ 2018 - 2020 | AWS, JavaScript, Serverless ]</li></ul><h3>Socials</h3><ul><li><a href='https://www.linkedin.com/in/felix-gerberding/'>LinkedIn</a></li><li><a href='https://github.com/DrOpossum'>GitHub</a></li><li><a href='https://twitter.com/FelixGerberding'>Twitter</a></li><li><a href='https://stackoverflow.com/users/7845355/felix-gerberding'>StackOverflow</a></li><li><a href='https://blog.felix.codes/'>My Personal Blog</a></li></ul></pre>\n");

    $('#age').html(getAge())

    window.animationTimer = window.innerWidth <= 578 ? 4 : 14;
    writeStyles(initialStyles, 0, window.animationTimer);

}).call(this);

function skip(){
  window.animationTimer = 1;
  document.getElementById("float").style.display = "none"
}
