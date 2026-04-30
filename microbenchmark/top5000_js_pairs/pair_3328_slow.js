const Benchmark = {
    run: function() {
        var VAR_1 = new Intl.NumberFormat(undefined, {
          KEY_1: 3,
          KEY_2: 3,
          KEY_3: false,
        });
        var VAR_2 = 1.163168924;
        VAR_1.format(VAR_2);
    }
};