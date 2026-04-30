const Benchmark = {
    run: function() {
        var VAR_1 = [{ KEY_1: "Foo" }, { KEY_2: "Bar" }, { KEY_3: "Baz" }, { KEY_4: "Qux" }];
        function FUNCTION_1(VAR_2) {
          return (function (VAR_5) {
            switch (VAR_2.KEY_1) {
              case "Foo":
                return true;
              case "Bar":
                return true;
              case "Baz":
                return true;
              case "Qux":
                return true;
              default:
                return false;
            }
          })(VAR_2);
        }
        function FUNCTION_2(VAR_3) {
          for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
            VAR_3(VAR_1[VAR_4 % 4]);
          }
        }
        FUNCTION_2(FUNCTION_1);
    }
};