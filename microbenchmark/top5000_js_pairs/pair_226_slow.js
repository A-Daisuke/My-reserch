const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000).fill(1);
        VAR_1.forEach(function (VAR_2) {
          VAR_2 += 1;
        });
    }
};