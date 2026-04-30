const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 5000;
        var VAR_3 = 0;
        while (VAR_3 < VAR_2) {
          VAR_1.push(VAR_3);
          VAR_3++;
        }
        var VAR_6 = [];
        VAR_6.push.apply(VAR_6, VAR_1);
    }
};