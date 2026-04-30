const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000,
          VAR_3 = 0;
        while (--VAR_2) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = VAR_1.length,
          VAR_7;
        VAR_7 = VAR_1.slice(0, VAR_4);
        while (VAR_7.length) {
          VAR_3 += VAR_7.pop();
        }
    }
};