const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3 = " ") {
          return VAR_3.repeat(VAR_2 >= VAR_1.length ? VAR_2 - VAR_1.length : 0) + VAR_1;
        }
        FUNCTION_1("foobarbaz", 500);
    }
};