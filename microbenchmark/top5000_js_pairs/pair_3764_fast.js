const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = VAR_1.reduce(function (VAR_4, VAR_5) {
          if (typeof value == "string") {
            VAR_5 = parseInt(VAR_5, 10);
          }
          return VAR_4 + VAR_5;
        });
    }
};