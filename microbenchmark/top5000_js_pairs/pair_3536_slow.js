const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = 0;
        for (VAR_1 = 0; VAR_1 < 1000; ++VAR_1) {
          VAR_2.push(VAR_1);
        }
        for (VAR_1 = 0; VAR_1 < 1000; ++VAR_1) {
          VAR_3 += VAR_2.splice(0, 1)[0];
        }
        if (!(VAR_3 > 0)) throw new Error("wtf");
    }
};