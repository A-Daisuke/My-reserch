const Benchmark = {
    run: function() {
        var VAR_1 = 5;
        var VAR_2 = 0;
        var VAR_3 = 10;
        function FUNCTION_1() {
          var VAR_6 = [VAR_2, 0];
          while (VAR_6.length) {
            var VAR_7 = VAR_6.pop();
            var VAR_8 = VAR_6.pop();
            while (VAR_8 < VAR_3) {
              VAR_8++;
              if (VAR_7 + 1 < VAR_1) {
                VAR_6.push(VAR_8);
                VAR_6.push(VAR_7);
                VAR_6.push(VAR_2);
                VAR_6.push(VAR_7 + 1);
                break;
              }
            }
          }
        }
        FUNCTION_1();
    }
};