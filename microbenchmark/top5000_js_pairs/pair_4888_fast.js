const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3 * 2);
        }
        Array.prototype.push.apply(VAR_1, VAR_2);
    }
};