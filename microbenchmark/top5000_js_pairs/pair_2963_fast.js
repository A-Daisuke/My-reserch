const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(0);
        function FUNCTION_1(VAR_2) {
          return VAR_2.slice(1, VAR_2.length);
        }
        FUNCTION_1(VAR_1);
    }
};