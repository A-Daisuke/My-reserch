const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = "";
          Object.defineProperties(this, {
            KEY_1: {
              KEY_2: function () {
                return VAR_1;
              },
            },
          });
        }
        var VAR_2 = new FUNCTION_1();
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.KEY_1 = "a";
        }
    }
};