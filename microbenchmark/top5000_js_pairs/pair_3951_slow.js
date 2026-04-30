const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
          KEY_2: null,
        };
        for (var VAR_2 = 0, VAR_3 = 10000; VAR_2 < VAR_3; ++VAR_2) if (VAR_1.KEY_2) VAR_1.KEY_2();
    }
};