const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function (VAR_2) {
            VAR_2++;
          },
        };
        var VAR_3 = Object.create(VAR_1);
        VAR_3.KEY_1(1);
    }
};