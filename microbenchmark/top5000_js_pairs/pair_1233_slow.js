const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3,
          VAR_4;
        for (var VAR_5 = 0; VAR_5 < 150; ++VAR_5) {
          VAR_1.push("prefix");
          for (var VAR_6 = 0; VAR_6 < 15; ++VAR_6) {
            VAR_4 = VAR_1.length;
            VAR_1.push("test");
            VAR_1.push("test string");
            VAR_1.push("long test string");
            VAR_1.push("test string");
            VAR_1.push("test");
            VAR_2 = VAR_1.slice(VAR_4, VAR_4 + 5).join("");
          }
          VAR_1.push("suffix");
        }
        VAR_3 = VAR_1.join("");
    }
};