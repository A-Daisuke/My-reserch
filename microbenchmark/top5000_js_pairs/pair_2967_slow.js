const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2,
          VAR_3;
        for (var VAR_4 = 0; VAR_4 < 150; ++VAR_4) {
          VAR_1 += "prefix";
          for (var VAR_5 = 0; VAR_5 < 15; ++VAR_5) {
            VAR_3 = VAR_1.length;
            VAR_1 += "test";
            VAR_1 += "test string";
            VAR_1 += "long test string";
            VAR_1 += "test string";
            VAR_1 += "test";
            VAR_2 = VAR_1.substring(VAR_3);
          }
          VAR_1 += "suffix";
        }
    }
};