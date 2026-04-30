const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        for (var VAR_2 = 0; VAR_2 < VAR_1; VAR_2++) {
          (function () {
            var VAR_3 = VAR_2;
          })();
        }
    }
};