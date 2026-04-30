const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = [];
        var VAR_3 = 5000;
        var VAR_4 = 15452;
        var VAR_5 = 9124;
        var VAR_6 = 52365;
        var VAR_7 = 5654;
        for (; VAR_3 >= 0; --VAR_3) {
          VAR_1.push(VAR_4 + VAR_3 * VAR_5);
          VAR_2.push(VAR_6 + VAR_3 * VAR_7);
        }
        var VAR_8 = [...VAR_1];
        var VAR_9 = [...VAR_2];
        VAR_8.concat(VAR_9);
    }
};