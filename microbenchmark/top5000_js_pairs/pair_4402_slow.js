const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = null;
          this.VAR_2 = 1;
          this.VAR_3 = "c";
        };
        var FUNCTION_2 = function () {};
        FUNCTION_2.VAR_4 = {
          KEY_1: null,
          KEY_2: 1,
          KEY_3: "c",
        };
        function FUNCTION_3() {
          this.VAR_1 = null;
          this.VAR_2 = 1;
          this.VAR_3 = "c";
        }
        function FUNCTION_4() {}
        FUNCTION_4.VAR_5 = {
          KEY_4: null,
          KEY_5: 1,
          KEY_6: "c",
        };
        var VAR_6 = [];
        for (var VAR_7 = 0; VAR_7 < 100; VAR_7++) {
          VAR_6.push(new FUNCTION_1());
        }
    }
};