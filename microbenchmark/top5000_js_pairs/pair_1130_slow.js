const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(60);
          if (VAR_1.length > 60) {
            VAR_1.shift();
            var VAR_3 = VAR_1.reduce(function (VAR_4, VAR_5) {
              return VAR_4 + VAR_5;
            }, 0);
            VAR_3 = (VAR_3 / 60) | 0;
          }
        }
    }
};