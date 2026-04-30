const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 1000; VAR_2--; ) VAR_1.push(Boolean((Math.random() * 2) | 0));
        VAR_1.sort(function (VAR_3, VAR_4) {
          return VAR_4 < VAR_3;
        });
    }
};