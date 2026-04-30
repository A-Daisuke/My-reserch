const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3,
          VAR_4;
        for (var VAR_5 = 0; VAR_5 < 150; ++VAR_5) {
          VAR_1.push("prefix");
          for (var VAR_6 = 0; VAR_6 < 15; ++VAR_6) {
            VAR_2 = [];
            VAR_2.push(
              "test",
              "test string",
              "long test string",
              "test string",
              "test",
            );
            VAR_3 = VAR_2.join("");
            VAR_1.push(VAR_2);
          }
          VAR_1.push("suffix");
        }
        VAR_4 = VAR_1.join("");
    }
};