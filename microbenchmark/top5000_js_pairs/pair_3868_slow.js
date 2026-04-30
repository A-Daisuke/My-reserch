const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          function FUNCTION_2(VAR_2, VAR_3) {
            if (VAR_3 >= VAR_1) return VAR_2;
            else return FUNCTION_2(VAR_2 + VAR_3, VAR_3 + 1);
          }
          return FUNCTION_2(0, 0);
        }
        var VAR_4 = FUNCTION_1(1000);
        console.log(VAR_4);
    }
};