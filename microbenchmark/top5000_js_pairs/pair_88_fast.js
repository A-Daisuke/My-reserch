const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 10));
        }
        var VAR_3 = [];
        for (var VAR_6 = 0, VAR_7 = VAR_1.length; VAR_2 < VAR_7; VAR_2++) {
          var VAR_5 = VAR_1[VAR_2];
          if (VAR_5 % 10 == 5) {
            VAR_3.push(VAR_5);
          }
        }
    }
};