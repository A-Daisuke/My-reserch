const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return { KEY_1: "b" };
        }
        var VAR_1 = 10000;
        while (--VAR_1) {
          new FUNCTION_1();
        }
    }
};