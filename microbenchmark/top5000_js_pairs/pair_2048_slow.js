const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
          KEY_2: {},
          KEY_3: 123,
        };
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 <= 100; VAR_3++) {
          VAR_2 = VAR_2.concat(VAR_1.KEY_1, VAR_1.KEY_2, VAR_1.KEY_3);
        }
    }
};