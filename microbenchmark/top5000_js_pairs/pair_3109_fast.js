const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          setTimeout(
            (function (VAR_3) {
              return function () {
                VAR_1.push(VAR_3);
              };
            })(VAR_2),
            VAR_2 * 10,
          );
        }
    }
};