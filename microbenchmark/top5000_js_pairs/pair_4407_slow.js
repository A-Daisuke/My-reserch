const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "This is a resolved label" };
        function FUNCTION_1(VAR_2) {
          return VAR_1[VAR_2];
        }
        function FUNCTION_2() {
          this.FUNCTION_3 = function () {
            return FUNCTION_1("SomeLabel");
          };
        }
        function FUNCTION_4() {
          this.VAR_3 = new FUNCTION_2();
        }
        var VAR_4 = new FUNCTION_4();
        VAR_4.VAR_3.FUNCTION_3();
    }
};