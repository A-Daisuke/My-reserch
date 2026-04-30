const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = {
          KEY_1: [1, 2, 3, 4, 5, 6],
        };
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3 += 1) {
          Array.prototype.push.apply(VAR_1, VAR_2.KEY_1);
        }
    }
};