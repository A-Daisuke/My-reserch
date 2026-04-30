const Benchmark = {
    run: function() {
        var VAR_1 = "I'm a thirty-five character string.",
          VAR_2 = [],
          VAR_3,
          VAR_4 = 20000;
        while (VAR_4--) {
          VAR_2[VAR_2.VAR_5] = VAR_1;
        }
        VAR_3 = VAR_2.join("");
    }
};