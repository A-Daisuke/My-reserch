const Benchmark = {
    run: function() {
        var VAR_1 = {},
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1["abc_" + VAR_2] = null;
        }
        var VAR_3 = [];
        VAR_3.push(
          (function () {
            for (var VAR_4 in VAR_1) {
              return false;
            }
          })(),
        );
    }
};