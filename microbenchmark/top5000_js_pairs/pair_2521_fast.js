const Benchmark = {
    run: function() {
        const FUNCTION_3 = (VAR_4, VAR_5) => `${VAR_4} ${VAR_5}`;
        new Array(10000).fill(null).map(FUNCTION_1);
        function FUNCTION_1(VAR_1, VAR_2) {
          return FUNCTION_3(VAR_1, VAR_2);
        }
    }
};