const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: "Name" + VAR_2,
            KEY_2: VAR_2.toString(),
          });
        }
        var VAR_3 = "876";
        var VAR_4 = [];
        for (var VAR_8 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          if (
            VAR_1[VAR_2].KEY_1.indexOf(VAR_3) !== -1 ||
            VAR_1[VAR_2].KEY_2.indexOf(VAR_3) !== -1
          )
            VAR_4.push(VAR_1[VAR_2]);
        }
    }
};