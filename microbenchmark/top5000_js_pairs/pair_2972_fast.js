const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8ClampedArray(3);
        function FUNCTION_1() {
          return [Math.random() * 255, Math.random() * 255, Math.random() * 255];
        }
        for (var VAR_2 = 0; VAR_2 < 1024; VAR_2++) {
          var VAR_3 = FUNCTION_1();
          VAR_1[0] = VAR_3[0];
          VAR_1[1] = VAR_3[1];
          VAR_1[2] = VAR_3[2];
        }
    }
};