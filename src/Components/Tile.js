import React from "react";

function Tile({ slug, character }) {

    function copyText(e) {
        let copyText = document.getElementById(slug)?.innerText;

        navigator.clipboard.readText().then(function(clipboardText) {  
            if (e.shiftKey) {
                copyText = clipboardText + copyText;
            }
            navigator.clipboard.writeText(copyText).then(function() {
                console.log(copyText)
            }, function() {
                alert('Failed to copy emoji. Try back another time. Sorryyyy!! -Adrienne')
            });
        });
      }

    return (
        <div id={slug} onClick={ copyText }>
            {character}
        </div>
    );
  }

  export default Tile;
