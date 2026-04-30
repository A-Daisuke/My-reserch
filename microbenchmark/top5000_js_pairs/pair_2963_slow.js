const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(0);
        function FUNCTION_1(VAR_2) {
          const [, ...VAR_3] = VAR_2;
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};