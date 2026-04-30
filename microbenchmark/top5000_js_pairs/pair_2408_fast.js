const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (VAR_1 = 1; VAR_1 <= 10000; VAR_1++) {
          VAR_2.push("index_" + VAR_1);
        }
        var VAR_3;
        var VAR_6;
        for (VAR_6 = 1; VAR_6 <= 10000; VAR_6++) {
          if (VAR_2[VAR_6] === "index_1000") {
            VAR_3 = VAR_6;
            break;
          }
        }
    }
};