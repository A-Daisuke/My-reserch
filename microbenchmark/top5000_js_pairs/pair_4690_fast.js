const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 % 2 === 0 ? "col_left" : "col_right";
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) FUNCTION_1(VAR_2);
    }
};