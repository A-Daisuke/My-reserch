const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.floor(Math.random() * 100));
        var VAR_6 = [];
        VAR_1.sort();
        for (var VAR_7 = 0, VAR_8; VAR_2 < VAR_1.length; VAR_2 = VAR_8) {
          for (VAR_8 = VAR_2 + 1; VAR_8 < VAR_1.length && VAR_1[VAR_2] === VAR_1[VAR_8]; VAR_8++);
          if (VAR_8 == VAR_2 + 1) {
            VAR_6.push(VAR_1[VAR_2]);
          }
        }
    }
};