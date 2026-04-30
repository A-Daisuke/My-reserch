const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [2],
            VAR_3 = 2,
            VAR_4 = 1;
          for (var VAR_5 = 3, VAR_6; VAR_2.length < VAR_1; VAR_5 += 2) {
            for (var VAR_7 = 0, VAR_8 = VAR_2.length; VAR_7 < VAR_8; VAR_7++) {
              if (VAR_5 % VAR_2[VAR_7] == 0) {
                VAR_4 = 0;
                break;
              }
            }
            if (VAR_4) {
              VAR_3 += VAR_5;
              VAR_2.push(VAR_5);
            } else {
              VAR_4 = 1;
            }
          }
          return VAR_3;
        }
        console.log(FUNCTION_1(1000));
    }
};