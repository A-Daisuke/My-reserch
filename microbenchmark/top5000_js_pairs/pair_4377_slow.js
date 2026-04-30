const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 1 };
        var VAR_2 = Object.create(VAR_1);
        var VAR_3 = Object.create(VAR_2);
        var VAR_4 = Object.create(VAR_3);
        var VAR_5 = Object.create(VAR_4);
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          VAR_5.KEY_1;
        }
    }
};