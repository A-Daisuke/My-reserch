const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3 = " ") {
          return VAR_2 <= VAR_1.length
            ? VAR_1
            : Array(VAR_2 - VAR_1.length)
                .fill(VAR_3)
                .join("") + VAR_1;
        }
        FUNCTION_1("foobarbaz", 500);
    }
};