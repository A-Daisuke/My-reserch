const Benchmark = {
    run: function() {
        var VAR_1 = ["<ul>"];
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1.push("<li>" + VAR_2 + "</li>");
        }
        VAR_1.push("</ul>");
        VAR_1 = VAR_1.join("");
    }
};