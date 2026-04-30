const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_3 = {
          KEY_1: function () {},
        };
        for (var VAR_2 = VAR_1; VAR_2 >= 0; VAR_2--) VAR_3.KEY_1();
    }
};