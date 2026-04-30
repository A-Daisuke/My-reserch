const Benchmark = {
    run: function() {
        (function () {
          var VAR_1, VAR_2;
          for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            (function () {
              if (VAR_2 !== 0) {
                VAR_1 += ",";
              }
              VAR_1 += VAR_2;
            })();
          }
        })();
    }
};