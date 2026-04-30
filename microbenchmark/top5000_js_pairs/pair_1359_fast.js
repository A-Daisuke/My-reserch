const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = -100000; VAR_2 < 100000; ++VAR_2) {
          VAR_1 += Math.sign(VAR_2);
        }
        console && console.log(VAR_1);
    }
};