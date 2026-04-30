const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = Array.prototype.push;
        var VAR_4 = 0 | 0;
        for (var VAR_3 = 0 | 0; (VAR_3 < 1000) | 0; VAR_3++) VAR_1[VAR_4++] = Math.random();
    }
};