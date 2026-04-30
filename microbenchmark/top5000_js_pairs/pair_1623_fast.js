const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          Object.defineProperties(this, {
            KEY_1: {
              KEY_3: "",
              KEY_4: true,
            },
          });
        }
        var VAR_2 = new FUNCTION_1();
        var VAR_4;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_4 = VAR_2.KEY_1;
        }
    }
};