const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1250; VAR_2++) {
          VAR_1.push(2 * VAR_2);
        }
        var VAR_5 = "";
        VAR_1.forEach(function (VAR_3, VAR_4) {
          if (VAR_5 !== "") {
            VAR_5 += ",";
          }
          VAR_5 += VAR_4 + " " + VAR_3;
        });
    }
};