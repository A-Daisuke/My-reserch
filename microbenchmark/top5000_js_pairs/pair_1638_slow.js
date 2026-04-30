const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return ["foo", VAR_1 > 0 ? "bar" : null, "baz"]
            .filter(function (VAR_2) {
              return VAR_2 != null;
            })
            .join("/");
        }
        for (var VAR_3 = -1000; VAR_3 < 1000; ++VAR_3) {
          FUNCTION_1(VAR_3);
        }
    }
};