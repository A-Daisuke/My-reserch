const Benchmark = {
    run: function() {
        const VAR_1 = new Array(1000);
        function FUNCTION_1(VAR_2, VAR_3) {
          return VAR_2.slice(0, VAR_3).concat(VAR_2.slice(VAR_3 + 1));
        }
        function FUNCTION_2(VAR_6, VAR_7) {
          const VAR_8 = VAR_2.slice();
          VAR_8.splice(VAR_7, 1);
          return VAR_8;
        }
        FUNCTION_1(VAR_1, 1);
        FUNCTION_1(VAR_1, 500);
        FUNCTION_1(VAR_1, 980);
    }
};