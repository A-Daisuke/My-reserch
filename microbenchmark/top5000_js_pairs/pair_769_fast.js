const Benchmark = {
    run: function() {
        FUNCTION_1("foo", 500000);
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          VAR_1 = String(VAR_1);
          var VAR_6 = -1;
          if (!VAR_3 && VAR_3 !== 0) VAR_3 = " ";
          VAR_2 = VAR_2 - VAR_1.length;
          while (++VAR_6 < VAR_2) {
            VAR_1 = VAR_3 + VAR_1;
          }
          return VAR_1;
        }
    }
};