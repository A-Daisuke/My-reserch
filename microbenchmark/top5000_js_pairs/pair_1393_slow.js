const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        var FUNCTION_2 = function (VAR_7, VAR_8, VAR_9) {
          return {
            KEY_1: VAR_7,
            KEY_2: VAR_8,
            KEY_3: VAR_9,
          };
        };
        var VAR_10 = [];
        for (var VAR_11 = 0; VAR_11 < 10000; VAR_11++) {
          VAR_10.push(new FUNCTION_1("abc", "def", VAR_11 + 10));
        }
    }
};