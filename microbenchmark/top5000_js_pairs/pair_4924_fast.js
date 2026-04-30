const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3];
        while (VAR_1.length < 1000) {
          VAR_1.push.apply(VAR_1, VAR_1);
        }
        var VAR_4 = [],
          VAR_5 = -1,
          VAR_6 = VAR_1.length;
        for (; ++VAR_5 < VAR_6; ) {
          VAR_4.push(VAR_1[VAR_5] + 1);
        }
    }
};