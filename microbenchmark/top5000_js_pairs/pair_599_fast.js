const Benchmark = {
    run: function() {
        var VAR_1 = "I'm a thirty-five character string.",
          VAR_5 = "",
          VAR_4 = 50000;
        while (VAR_4--) {
          VAR_5 += VAR_1;
        }
    }
};