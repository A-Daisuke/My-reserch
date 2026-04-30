const Benchmark = {
    run: function() {
        VAR_1 = new Uint8Array(1);
        function FUNCTION_1(VAR_2) {
          for (var VAR_3 = 0; VAR_3 < VAR_2; ++VAR_3) VAR_1[0] = 255;
          return VAR_1;
        }
        FUNCTION_1(10000);
    }
};