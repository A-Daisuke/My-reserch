const Benchmark = {
    run: function() {
        (function () {
          for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
            console.log(VAR_1);
          }
          for (var VAR_2 = 0; VAR_1 < 1000; VAR_1++) {
            console.log(VAR_1);
          }
          for (var VAR_3 = 0; VAR_1 < 1000; VAR_1++) {
            console.log(VAR_1);
          }
          for (var VAR_4 = 0; VAR_1 < 1000; VAR_1++) {
            console.log(VAR_1);
          }
          for (var VAR_5 = 0; VAR_1 < 1000; VAR_1++) {
            console.log(VAR_1);
          }
        })();
    }
};