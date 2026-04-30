const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.random() * 10000 + 1);
        }
        var VAR_5 = Infinity,
          VAR_6 = -Infinity;
        for (var VAR_7 = 0, VAR_8 = VAR_1.length; VAR_2 < VAR_8; VAR_2++) {
          var VAR_9 = VAR_1[VAR_2];
          if (VAR_9 > VAR_6) VAR_6 = VAR_9;
          if (VAR_9 < VAR_5) VAR_5 = VAR_9;
        }
    }
};