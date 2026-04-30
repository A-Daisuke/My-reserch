const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          Object.defineProperties(this, {
            KEY_1: {
              KEY_2: "",
              KEY_3: true,
            },
          });
        }
        var VAR_1 = new FUNCTION_1();
        function FUNCTION_2() {
          var VAR_2 = "";
          Object.defineProperties(this, {
            KEY_4: {
              KEY_5: function () {
                return VAR_2;
              },
            },
          });
        }
        var VAR_3 = new FUNCTION_2();
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1.KEY_1 = "a";
        }
    }
};