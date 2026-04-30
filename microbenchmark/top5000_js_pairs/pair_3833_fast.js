const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function (VAR_2) {
            VAR_2++;
          },
        };
        VAR_1.KEY_1(0);
    }
};