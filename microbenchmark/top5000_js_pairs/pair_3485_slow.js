const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1250; VAR_2++) {
          VAR_1.push(2 * VAR_2);
        }
        VAR_1
          .map(function (VAR_3, VAR_4) {
            return VAR_4 + " " + VAR_3;
          })
          .join(",");
    }
};