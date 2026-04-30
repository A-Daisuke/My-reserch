const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 114; VAR_2++) {
          VAR_1.push(
            Array.apply(null, new Array(164)).map(Number.prototype.valueOf, 0),
          );
        }
    }
};