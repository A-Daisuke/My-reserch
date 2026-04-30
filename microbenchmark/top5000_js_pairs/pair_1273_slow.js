const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = -100000; VAR_2 < 100000; ++VAR_2) {
          VAR_1 += VAR_2 === 0 ? 0 : VAR_2 / Math.abs(VAR_2);
        }
        console && console.log(VAR_1);
    }
};