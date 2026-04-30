const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.random() * 10000 + 1);
        }
        VAR_1.sort(function (VAR_3, VAR_4) {
          return VAR_3 - VAR_4;
        });
        VAR_1[0];
        VAR_1[VAR_1.length - 1];
    }
};