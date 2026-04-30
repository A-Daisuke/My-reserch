const Benchmark = {
    run: function() {
        var FUNCTION_2 = function (VAR_7, VAR_8, VAR_9) {
          return {
            KEY_1: VAR_7,
            KEY_2: VAR_8,
            KEY_3: VAR_9,
          };
        };
        var VAR_10 = [];
        for (var VAR_11 = 0; VAR_11 < 10000; VAR_11++) {
          VAR_10.push({
            KEY_4: "abc",
            KEY_5: "def",
            KEY_6: 1,
          });
        }
    }
};