const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 5000;
        do {
          VAR_1.push(VAR_2);
        } while (++VAR_2 < VAR_3);
        VAR_4 = [1, 2, 3];
        Array.prototype.push.apply(VAR_4, VAR_1);
    }
};