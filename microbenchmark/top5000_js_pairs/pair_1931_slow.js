const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = new Array(100000);
        VAR_2.forEach(function (VAR_3) {
          VAR_1 = VAR_3;
        });
    }
};