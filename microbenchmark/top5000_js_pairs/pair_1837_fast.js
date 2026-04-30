const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_1 === void 0) return 1;
          if (VAR_2 === void 0) return -1;
          return VAR_1 < VAR_2 ? -1 : VAR_1 > VAR_2 ? 1 : 0;
        }
        var VAR_3 = "aaaaaaaaad",
          VAR_4 = "aaaaaaaaac";
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          FUNCTION_1(VAR_3, VAR_4);
        }
    }
};