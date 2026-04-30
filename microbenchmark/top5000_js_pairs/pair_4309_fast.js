const Benchmark = {
    run: function() {
        var VAR_1 = Function.prototype;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1();
        function FUNCTION_2(VAR_4) {
          VAR_4();
        }
        function FUNCTION_1(VAR_3) {
          if (typeof VAR_3 === "function") VAR_4();
        }
        function FUNCTION_3() {
          return (Math.random() * 65536) | 0;
        }
        FUNCTION_2(VAR_1);
    }
};