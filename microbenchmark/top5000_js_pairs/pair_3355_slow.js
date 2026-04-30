const Benchmark = {
    run: function() {
        var VAR_1 = new Intl.NumberFormat(undefined, {
          KEY_1: 3,
          KEY_2: 3,
          KEY_3: false,
        });
        var VAR_2 = 1.163168924;
        var VAR_3 = VAR_2.toLocaleString(undefined, {
          KEY_4: 3,
          KEY_5: undefined,
          KEY_6: false,
        });
    }
};