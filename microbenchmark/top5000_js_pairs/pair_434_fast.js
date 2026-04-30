const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          Array.prototype.splice.apply(VAR_1, [VAR_2, 0].concat([VAR_2]));
        }
    }
};