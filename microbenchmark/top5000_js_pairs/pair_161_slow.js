const Benchmark = {
    run: function() {
        var VAR_1 = ["Lorem", "ipsum", "dolor", "sit"],
          VAR_2 = "",
          VAR_3 = [],
          VAR_4,
          VAR_5,
          VAR_6 = 0,
          VAR_7 = [],
          VAR_8;
        for (VAR_8 = 0; VAR_8 < 100000; VAR_8++) {
          VAR_7.push(VAR_1.join(""));
        }
        for (VAR_4 = 0, VAR_5 = VAR_7.length; VAR_4 < VAR_5; VAR_4++) {
          VAR_3[++VAR_6] = VAR_7[VAR_4];
        }
        VAR_2 = VAR_3.join(" ");
    }
};