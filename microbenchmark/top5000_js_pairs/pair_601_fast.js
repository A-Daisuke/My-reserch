const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = VAR_1.length;
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_2 < VAR_4; VAR_2++) {
          VAR_5.push(
            (function (VAR_7) {
              return VAR_1[VAR_7];
            })(VAR_2),
          );
        }
    }
};