const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          function FUNCTION_1(VAR_3, VAR_4, VAR_1) {
            if (VAR_1 === 1) return VAR_4;
            else return FUNCTION_1(VAR_4, VAR_3 + VAR_4, VAR_1 - 1);
          }
          if (VAR_2 === 0) return 0;
          else if (VAR_2 < 3) return 1;
          else return FUNCTION_1(0, 1, VAR_2);
        }
        FUNCTION_2(15);
    }
};