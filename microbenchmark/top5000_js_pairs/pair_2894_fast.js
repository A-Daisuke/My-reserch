const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: [],
          KEY_2: [],
        };
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.KEY_1.push("item-" + VAR_2);
        }
        for (var VAR_4 = 0; VAR_2 < VAR_1.KEY_1.length; VAR_2++) {
          VAR_1.KEY_2.push("transformed-" + VAR_1.KEY_1[VAR_2]);
        }
    }
};