const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = {
          KEY_1: function () {
            VAR_1++;
          },
        };
        var VAR_3 = {};
        try {
          VAR_3.KEY_1();
        } catch (VAR_4) {}
    }
};