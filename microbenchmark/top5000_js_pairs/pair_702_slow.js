const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.floor(Math.random() * 100));
        var VAR_3 = [];
        VAR_1.sort();
        for (var VAR_4 = 0, VAR_5; VAR_2 < VAR_1.length; VAR_2 = VAR_5) {
          for (VAR_5 = VAR_2 + 1; VAR_5 < VAR_1.length && VAR_1[VAR_2] === VAR_1[VAR_5]; VAR_5++);
          if (VAR_5 == VAR_2 + 1) {
            VAR_3.push(VAR_1[VAR_2]);
          }
        }
    }
};