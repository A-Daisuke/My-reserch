const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3 = " ") {
          if (VAR_2 <= VAR_1.length) return VAR_1;
          return Array(VAR_2 - VAR_1.length).join(VAR_3) + VAR_1;
        }
        FUNCTION_1("foobarbaz", 500);
    }
};