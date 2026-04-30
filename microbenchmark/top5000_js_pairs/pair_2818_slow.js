const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push("0");
        }
        VAR_3 = VAR_1.join("");
        VAR_4 = VAR_3.split("");
        for (var VAR_5 = 0; VAR_2 < 100000; VAR_2++) {
          var VAR_6 = VAR_1.shift();
        }
    }
};