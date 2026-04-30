const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2, VAR_3, VAR_4;
        for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          VAR_1 % 2
            ? (function () {
                VAR_2 = VAR_3;
                VAR_3 = VAR_4;
                VAR_4 = VAR_1;
              })()
            : (function () {
                VAR_2 = VAR_1;
                VAR_4 = VAR_3;
                VAR_3 = VAR_2;
              })();
        }
    }
};