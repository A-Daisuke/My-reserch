const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = Array.prototype.push;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_1.push(Math.random());
    }
};