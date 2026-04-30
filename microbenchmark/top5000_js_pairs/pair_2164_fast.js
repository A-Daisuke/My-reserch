const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (VAR_1 = 1; VAR_1 <= 10000; VAR_1++) {
          VAR_2.push("index_" + VAR_1);
        }
        var VAR_3;
        var VAR_4;
        for (VAR_4 = 1; VAR_4 <= 10000; VAR_4++) {
          if (VAR_2[VAR_4] === "index_1000") {
            VAR_3 = VAR_4;
            break;
          }
        }
    }
};