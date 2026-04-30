const Benchmark = {
    run: function() {
        var VAR_1 = 100000,
          VAR_2 = "",
          VAR_3 = [];
        while (VAR_1--) {
          VAR_3.push("sasfasdfasdfasdf0");
        }
        VAR_2 = VAR_3.join("");
    }
};