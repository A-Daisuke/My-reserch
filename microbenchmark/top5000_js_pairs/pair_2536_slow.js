const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (VAR_1 = 1; VAR_1 <= 10000; VAR_1++) {
          VAR_2.push("index_" + VAR_1);
        }
        var VAR_3;
        VAR_2.forEach(function (VAR_4, VAR_5) {
          if (VAR_4 === "index_1000") {
            VAR_3 = VAR_5;
          }
        });
    }
};