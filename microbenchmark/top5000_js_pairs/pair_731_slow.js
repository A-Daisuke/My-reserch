const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.floor(Math.random() * 100));
        VAR_1.filter(function (VAR_3, VAR_4, VAR_5) {
          return VAR_5.indexOf(VAR_3) == VAR_5.lastIndexOf(VAR_3);
        });
    }
};