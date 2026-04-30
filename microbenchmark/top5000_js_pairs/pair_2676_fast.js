const Benchmark = {
    run: function() {
        var VAR_1 = "I'm a thirty-five character string.",
          VAR_6 = "",
          VAR_4 = 5000;
        while (VAR_4--) {
          VAR_6 += VAR_1;
        }
    }
};