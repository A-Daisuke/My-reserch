const Benchmark = {
    run: function() {
        let VAR_1 = 0;
        function FUNCTION_1() {
          return ++VAR_1;
        }
        let VAR_3 = 0;
        for (let VAR_4 = 0; VAR_4 < 1000000; VAR_4++) VAR_3 = (VAR_3 + FUNCTION_1()) | 0;
    }
};