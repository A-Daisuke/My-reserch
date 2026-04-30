const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3, VAR_4, VAR_5;
        for (VAR_5 = 0; VAR_5 < 8000; VAR_5++) {
          (function () {
            VAR_1 = 1;
            VAR_2 = 2;
            VAR_3 = {};
            VAR_4 = {};
          })();
        }
    }
};