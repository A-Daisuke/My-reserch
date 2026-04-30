const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = ~~(Math.random() * 1000 - 500);
          var VAR_4 = ~~(Math.random() * 1000 - 500);
          if (!VAR_1.has(VAR_3)) VAR_1.set(VAR_3, new Map());
          VAR_1.get(VAR_3).set(VAR_4, 1);
        }
    }
};