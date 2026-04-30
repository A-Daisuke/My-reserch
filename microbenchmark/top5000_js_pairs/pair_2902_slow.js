const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        VAR_1 = VAR_1.map(function () {
          return Math.random();
        });
        VAR_1.forEach(function (VAR_2, VAR_3) {});
    }
};