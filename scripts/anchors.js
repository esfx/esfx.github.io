window.addEventListener("load", function () {
    const headers = document.querySelectorAll(".content h1[id], .content h2[id], .content h3[id]");
    for (var i = 0; i < headers.length; i++) {
        var header = headers[i];
        var anchor = document.createElement("a");
        anchor.classList.add("anchor");
        anchor.href = "#" + header.id;

        /** @type {SVGSVGElement} */
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add("octicon");
        svg.classList.add("octicon-link");
        svg.setAttributeNS("http://www.w3.org/2000/svg", "viewBox", "0 0 16 16");
        svg.setAttributeNS("http://www.w3.org/2000/svg", "width", "16");
        svg.setAttributeNS("http://www.w3.org/2000/svg", "height", "16");
        svg.innerHTML = '<path fill-rule="evenodd" d="M 4 9 h 1 v 1 H 4 c -1.5 0 -3 -1.69 -3 -3.5 S 2.55 3 4 3 h 4 c 1.45 0 3 1.69 3 3.5 c 0 1.41 -0.91 2.72 -2 3.25 V 8.59 c 0.58 -0.45 1 -1.27 1 -2.09 C 10 5.22 8.98 4 8 4 H 4 c -0.98 0 -2 1.22 -2 2.5 S 3 9 4 9 Z m 9 -3 h -1 v 1 h 1 c 1 0 2 1.22 2 2.5 S 13.98 12 13 12 H 9 c -0.98 0 -2 -1.22 -2 -2.5 c 0 -0.83 0.42 -1.64 1 -2.09 V 6.25 c -1.09 0.53 -2 1.84 -2 3.25 C 6 11.31 7.55 13 9 13 h 4 c 1.45 0 3 -1.69 3 -3.5 S 14.5 6 13 6 Z" />';
        anchor.appendChild(svg);
        header.appendChild(anchor);
    }
});