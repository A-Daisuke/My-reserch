const Benchmark = {
    run: function() {
        FUNCTION_1("foo", 500000);
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_4 = Math.max(0, VAR_2 - VAR_1.length);
          var VAR_5 = new Array(VAR_4).join(VAR_3 || " ");
          return VAR_5 + VAR_1;
        }
    }
};