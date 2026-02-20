/* Copy-to-clipboard for AI prompt blocks.
   Finds all .prompt-block elements and attaches copy behavior
   to their .copy-btn buttons. */

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".prompt-block .copy-btn");

    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var block = btn.closest(".prompt-block");
            var code = block.querySelector("code");
            if (!code) return;

            var text = code.textContent;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    showCopied(btn);
                }).catch(function () {
                    fallbackCopy(text, btn);
                });
            } else {
                fallbackCopy(text, btn);
            }
        });
    });

    function fallbackCopy(text, btn) {
        var textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand("copy");
            showCopied(btn);
        } catch (e) {
            btn.textContent = "Error";
        }
        document.body.removeChild(textarea);
    }

    function showCopied(btn) {
        var original = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copied");
        }, 2000);
    }
});
