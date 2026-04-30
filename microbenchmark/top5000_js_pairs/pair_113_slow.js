const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = Math.floor((VAR_1 - 1) / 5);
          var VAR_3 = Math.floor((VAR_1 - 1) / 3);
          var VAR_4 = 0;
          var VAR_5 = [];
          for (var VAR_6 = 1; VAR_6 <= VAR_3; VAR_6++) {
            var VAR_7 = 3 * VAR_6;
            var VAR_8 = 5 * VAR_6;
            if (VAR_5.indexOf(VAR_7) === -1) {
              VAR_4 += VAR_7;
              VAR_5.push(VAR_7);
            }
            if (VAR_6 <= VAR_2 && VAR_5.indexOf(VAR_8) === -1) {
              VAR_4 += VAR_8;
              VAR_5.push(VAR_8);
            }
          }
          return VAR_4;
        }
        FUNCTION_1(10000);
    }
};