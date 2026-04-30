const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = {
          KEY_1: function () {
            VAR_1++;
          },
        };
        var VAR_3 = {};
        if (VAR_3.KEY_1) {
          VAR_3.KEY_1();
        }
    }
};