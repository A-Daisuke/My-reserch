const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = "";
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1[VAR_2++] = "test";
          VAR_1[VAR_2++] = VAR_4;
          VAR_1[VAR_2++] = "text";
        }
        VAR_3 = VAR_1.join("");
    }
};