const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
          KEY_2: function () {},
        };
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.KEY_1(1, 2, 3);
        }
    }
};