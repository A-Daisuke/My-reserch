const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = 10000;
        var VAR_6 = 1;
        var VAR_3 = [];
        var VAR_7 = [];
        function FUNCTION_1(VAR_4) {
          if (VAR_6 === 1 && VAR_3.length >= VAR_1) {
            VAR_7 = [];
            VAR_6 = 2;
          }
          if (VAR_6 === 2 && VAR_7.length >= VAR_1) {
            VAR_3 = [];
            VAR_6 = 1;
          }
          if (VAR_6 === 1) {
            VAR_3.push(VAR_4);
          } else if (VAR_6 === 2) {
            VAR_7.push(VAR_4);
          }
        }
        for (var VAR_5 = 0; VAR_5 < VAR_2; VAR_5++) {
          FUNCTION_1("message");
        }
    }
};