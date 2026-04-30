const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("X" + VAR_2);
        }
        var VAR_3;
        for (VAR_3 = VAR_1.length - 1; VAR_3 >= 0; VAR_3--) {
          if (VAR_1[VAR_3] === "X9000") {
            break;
          }
        }
    }
};