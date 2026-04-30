const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          try {
            throw VAR_1;
          } catch (VAR_3) {
            VAR_2.push(function () {
              return VAR_3;
            });
          }
        }
    }
};