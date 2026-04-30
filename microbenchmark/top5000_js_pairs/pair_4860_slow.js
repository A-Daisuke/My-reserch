const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push(VAR_3 * Math.random() * 100);
        }
        VAR_2.filter(function (VAR_4) {
          VAR_1++;
          return true;
        });
    }
};