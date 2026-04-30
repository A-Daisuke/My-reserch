const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = Array.prototype.push;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) Array.prototype.push.call(VAR_1, Math.random());
    }
};