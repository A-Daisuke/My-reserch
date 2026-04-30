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
          Math.floor((VAR_1 % (60 * 60 * 1000)) / (60 * 1000));
        });
    }
};