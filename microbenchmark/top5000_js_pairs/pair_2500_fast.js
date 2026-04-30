const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 100000; VAR_2--; ) {
          VAR_1.push(VAR_2);
        }
        VAR_1.forEach(function (VAR_4) {
          var VAR_5 = 0;
          VAR_5 = VAR_4 + 100;
          VAR_5++;
        });
    }
};