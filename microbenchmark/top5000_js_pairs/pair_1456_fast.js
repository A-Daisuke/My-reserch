const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          function FUNCTION_2(VAR_3, VAR_4) {
            if (VAR_3 - VAR_4 < 1e-8 && VAR_3 - VAR_4 > -1e-8) return VAR_4;
            return FUNCTION_2(VAR_4, (VAR_1 / VAR_4 + VAR_4) / 2);
          }
          var VAR_5 = FUNCTION_2(VAR_1, VAR_1 / 2);
          var VAR_6 = ~~VAR_5;
          if (VAR_5 == VAR_6) return VAR_5;
          return [VAR_6, VAR_6 + 1];
        }
        console.log(FUNCTION_1(81000000000));
    }
};