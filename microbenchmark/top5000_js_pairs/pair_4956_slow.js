const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push("Totally concating this string ", VAR_1, "<br/>");
        }
        var VAR_3 = VAR_2.join("");
    }
};