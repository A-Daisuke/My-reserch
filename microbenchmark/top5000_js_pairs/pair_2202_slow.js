const Benchmark = {
    run: function() {
        const VAR_1 = Date.now();
        const FUNCTION_1 = (VAR_2) => (VAR_3) => {
          if (VAR_2 > 0) {
            VAR_3();
            FUNCTION_1(VAR_2 - 1)(VAR_3);
          }
        };
        FUNCTION_1(1000)(() => {
          new Date(VAR_1).getMinutes();
        });
    }
};