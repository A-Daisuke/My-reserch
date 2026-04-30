const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = [];
          for (VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
            VAR_1[VAR_1.VAR_3] = "elem" + VAR_2;
          }
        }
        function FUNCTION_2() {
          var VAR_4 = [];
          for (VAR_5 = 0; VAR_5 < 500000; VAR_5++) {
            VAR_4.push("elem" + VAR_5);
          }
        }
        function FUNCTION_3() {
          var VAR_6 = [];
          for (VAR_7 = 0; VAR_2 < 500000; VAR_2++) {
            VAR_1[VAR_1.VAR_8] = "elem" + VAR_2;
          }
        }
        FUNCTION_1();
    }
};