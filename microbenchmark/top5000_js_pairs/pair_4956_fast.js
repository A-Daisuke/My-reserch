const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_4 = "";
        while (VAR_1--) {
          VAR_4 += "Totally concating this string " + VAR_1 + "<br/>";
        }
    }
};