const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_6 = "";
          VAR_2 = Math.max(1, VAR_2);
          do {
            if (VAR_2 & 1) VAR_6 += VAR_1;
            VAR_1 += VAR_1;
          } while ((VAR_2 >>= 1));
          return VAR_6;
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          var VAR_5 = "";
          VAR_4 = Math.max(1, VAR_4);
          do {
            if (VAR_4 & 1) VAR_5 = VAR_6.concat(VAR_3);
            VAR_3 = VAR_3.concat(VAR_3);
          } while ((VAR_4 >>= 1));
          return VAR_5;
        }
        FUNCTION_1("a", 1000);
    }
};