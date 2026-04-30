const Benchmark = {
    run: function() {
        function* FUNCTION_1(VAR_1) {
          return VAR_1 < 2 ? VAR_1 : (yield* FUNCTION_1(VAR_1 - 1)) + (yield* FUNCTION_1(VAR_1 - 2));
        }
        VAR_2 = FUNCTION_1(20);
        VAR_2.next();
    }
};