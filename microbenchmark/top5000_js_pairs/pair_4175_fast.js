const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.push("Text " + VAR_1);
        }
        var VAR_4,
          VAR_5,
          VAR_6 = "";
        for (VAR_4 = 0, VAR_5 = VAR_2.length; VAR_4 < VAR_5; VAR_4++) {
          VAR_6 += VAR_2[VAR_1];
        }
    }
};