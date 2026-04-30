const Benchmark = {
    run: function() {
        var VAR_1 =
          "okay.this.is.a.string.okay.this.is.a.string.okay.this.is.a.string.okay.this.is.a.string";
        FUNCTION_1(VAR_1);
        function FUNCTION_1(VAR_2) {
          var VAR_3 = "";
          for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
            VAR_3 = VAR_1.split(".").join(" ");
          }
          return VAR_3;
        }
    }
};