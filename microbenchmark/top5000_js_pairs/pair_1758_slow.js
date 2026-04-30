const Benchmark = {
    run: function() {
        VAR_1 = 9999;
        VAR_2 = new Array(VAR_1).fill(0).map((VAR_3, VAR_4) => VAR_4);
        function FUNCTION_1(VAR_5, VAR_6) {
          return VAR_5.map(VAR_6).filter(Boolean);
        }
        function FUNCTION_2(VAR_7) {
          return VAR_7 % 0 ? VAR_7 : null;
        }
        FUNCTION_1(VAR_2, FUNCTION_2);
    }
};