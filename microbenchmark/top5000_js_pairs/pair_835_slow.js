const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          if (Math.random() < 0.5) {
            VAR_1.push("100%");
          } else {
            VAR_1.push(Math.floor(Math.random() * 100) + "%");
          }
        }
        var VAR_3 = VAR_1.map(function (VAR_4) {
          return parseFloat(VAR_4) / 100;
        });
    }
};