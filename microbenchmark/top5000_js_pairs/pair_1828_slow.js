const Benchmark = {
    run: function() {
        var VAR_1 = [{ KEY_1: "Foo" }, { KEY_2: "Bar" }, { KEY_3: "Baz" }, { KEY_4: "Qux" }];
        function FUNCTION_1(VAR_2) {
          return (
            {
              KEY_5: function () {
                return true;
              },
              KEY_6: function () {
                return true;
              },
              KEY_7: function () {
                return true;
              },
              KEY_8: function () {
                return true;
              },
            }[VAR_2.KEY_1] ||
            function () {
              return false;
            }
          )();
        }
        function FUNCTION_2(VAR_3) {
          for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
            VAR_3(VAR_1[VAR_4 % 4]);
          }
        }
        FUNCTION_2(FUNCTION_1);
    }
};