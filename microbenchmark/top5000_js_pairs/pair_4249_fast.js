const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = VAR_1,
            VAR_3,
            VAR_4;
          while (VAR_1--) {
            VAR_3 = {
              KEY_1: VAR_1,
              KEY_2: VAR_3,
            };
          }
          while (VAR_2--) {
            VAR_4 = VAR_3.KEY_1;
            VAR_3 = VAR_3.KEY_2;
          }
        }
        function FUNCTION_2(VAR_5) {
          var VAR_6 = VAR_5,
            VAR_7 = [];
          var VAR_8;
          while (VAR_5--) {
            VAR_3.push(VAR_5);
          }
          while (VAR_6--) {
            VAR_8 = VAR_3.pop();
          }
        }
        FUNCTION_1(10);
    }
};