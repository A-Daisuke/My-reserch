const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).fill(null);
        var VAR_2 = new Array(1000).fill("a");
        function FUNCTION_1(VAR_3) {
          return VAR_3;
        }
        function FUNCTION_4(VAR_6) {
          const VAR_7 = [];
          for (const VAR_8 of VAR_6)
            if (VAR_8 !== null) VAR_7.push(FUNCTION_1(VAR_8));
        }
        FUNCTION_4(VAR_1);
        FUNCTION_4(VAR_2);
    }
};