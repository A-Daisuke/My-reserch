const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "weee!" },
          VAR_2 = Object.create(VAR_1),
          VAR_3 = Object.create(VAR_2),
          VAR_4 = VAR_3.KEY_1,
          VAR_5 = "";
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) {
          VAR_5 += VAR_4[VAR_6 % VAR_4.length];
        }
    }
};