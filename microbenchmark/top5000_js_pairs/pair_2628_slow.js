const Benchmark = {
    run: function() {
        var VAR_1 = Array;
        var FUNCTION_1 = function (VAR_2) {
          if (VAR_1.name === "Float32Array") {
            this.VAR_3 = new VAR_1([VAR_2[0], VAR_2[1]]);
          } else {
            this.VAR_3 = new VAR_1(VAR_2[0], VAR_2[1]);
          }
        };
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) new FUNCTION_1([2, 6]);
    }
};