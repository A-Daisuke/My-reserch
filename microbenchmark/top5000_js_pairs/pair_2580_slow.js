const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = Object.create(null);
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          if (!!VAR_2[VAR_3]) {
            VAR_2[VAR_3];
          }
        }
    }
};