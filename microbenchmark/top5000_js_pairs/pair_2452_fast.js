const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_2, VAR_3) {
          var VAR_4 = "";
          for (; VAR_3 > 0; (VAR_3 >>= 1) && (VAR_2 += VAR_2)) if (VAR_3 & 1) VAR_4 += VAR_2;
          return VAR_4;
        }
        var VAR_1;
        VAR_1 = FUNCTION_1("*", 10000);
    }
};