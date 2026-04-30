const Benchmark = {
    run: function() {
        var VAR_1 = " string",
          VAR_2 = [],
          VAR_3 = 5000,
          VAR_4 = 0,
          VAR_5;
        for (; VAR_4 < VAR_3; VAR_4 += 1) {
          VAR_2[VAR_2.VAR_6] = VAR_1;
        }
        VAR_5 = VAR_2.join("");
    }
};